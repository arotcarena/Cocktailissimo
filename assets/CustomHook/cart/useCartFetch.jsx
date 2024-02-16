import { useCallback, useReducer, useState } from "react"
import { ApiError, apiFetch } from "../../functions/api";
import { priceAdd, priceLess, priceMultiply } from "../../functions/price/priceOperator";
import { extractCartLines } from "../../functions/helpers/vendorGroupsLinesExtractor";
import { t } from "i18next";
import i18n from "../../entrypoints/i18n";


const reducer = (cart, action) => {
    switch(action.type) {

        case 'START_GENERAL_LOADING':
            return {
                ...cart,
                generalLoading: true
            };

        case 'STOP_GENERAL_LOADING':
            return {
                ...cart,
                generalLoading: false
            };

        case 'FETCH':
            return {
                ...cart,
                // action.payload === fullCart
                cartVendorGroups: action.payload.cartVendorGroups.map(cartVendorGroup => ({
                    ...cartVendorGroup,
                    cartLines: cartVendorGroup.cartLines.map(cartLine => ({
                        id: cartLine.packaging.id,
                        packaging: cartLine.packaging,
                        quantity: cartLine.quantity,
                        unitPrice: cartLine.unitPrice,
                        totalPrice: cartLine.totalPrice,
                        error: null
                    }))
                })),
                count: action.payload.count,
                totalPrice: action.payload.totalPrice,
                generalError: null
            };

        case 'SET_QUANTITY': 
            return {
                ...cart,
                cartVendorGroups: cart.cartVendorGroups.map(cartVendorGroup => ({
                    ...cartVendorGroup,
                    cartLines: cartVendorGroup.cartLines.map(cartLine => {
                        if(cartLine.packaging.id === action.target) {
                            //on vérifie le stock
                            if(action.payload > cartLine.packaging.stock) {
                                cartLine.quantity = cartLine.packaging.stock;
                                cartLine.error = t('insufficient_stock', {ns: 'messages'});
                            } else if(action.payload < 1) {
                                cartLine.quantity = 1;
                                cartLine.error = null;
                            } else {
                                cartLine.quantity = action.payload;
                                cartLine.error = null;
                            }
                            cartLine.totalPrice = priceMultiply(cartLine.unitPrice, cartLine.quantity);
                        }
                        return cartLine;
                    })
                }))
            };

        case 'REMOVE':
            const lineToRemove = (extractCartLines(cart)).find(cartLine => cartLine.packaging.id === action.target);
            const lineTotalPrice = lineToRemove.totalPrice;
            const lineQuantity = lineToRemove.quantity;
            const lineToRemoveId = lineToRemove.id;

            //on prépare le nouvel array cartVendorGroups en supprimant la lineToRemove
            const cartVendorGroups = cart.cartVendorGroups.map(cartVendorGroup => ({
                ...cartVendorGroup,
                cartLines: cartVendorGroup.cartLines.filter(cartLine => cartLine.id !== lineToRemoveId)
            }));

            return {
                ...cart,
                cartVendorGroups: cartVendorGroups.filter(cartVendorGroup => cartVendorGroup.cartLines.length > 0), //on supprime le vendorGroup s'il n'a plus aucune cartLine
                totalPrice: priceLess(cart.totalPrice, lineTotalPrice),
                count: cart.count - lineQuantity
            };

        case 'ERROR':
            return {
                ...cart,
                generalLoading: false,
                generalError: action.payload 
            }

        case 'UPDATE_TOTAL_PRICE_AND_COUNT':
            //on crée un tableau contenant tous les cartLine.totalPrice indexés par cartLineId
            const cartLines = extractCartLines(cart);
            const lineTotalPricesById = Object.fromEntries(cartLines.map(cartLine => ([
                cartLine.id,
                priceMultiply(cartLine.unitPrice, cartLine.quantity)
            ])));
            //on additionne pour obtenir le cart.totalPrice
            const cartTotalPrice = priceAdd(Object.values(lineTotalPricesById));

            const count = cartLines.reduce((acc, cartLine) => {
                return acc + cartLine.quantity;
            }, 0);
            
            return {
                ...cart,
                cartVendorGroups: cart.cartVendorGroups.map(cartVendorGroup => ({
                    ...cartVendorGroup,
                    cartLines: cartVendorGroup.cartLines.map(cartLine => ({
                        ...cartLine,
                        totalPrice: lineTotalPricesById[cartLine.id] // on met à jour tous les cartLine.totalPrice grâce à notre tableau lineTotalPricesById
                    }))
                })),
                totalPrice: cartTotalPrice,
                count: count
            };
    }
}


/**
 * @returns 
 */
export const useCartFetch = () => {

    const [cart, dispatch] = useReducer(reducer, {
        cartVendorGroups: [],
        count: null,
        totalPrice: null,
        generalLoading: false, // loading du fetch
        generalError: null
    });

    const [quantityTimer, setQuantityTimer] = useState(null);

    const fetchCart = useCallback(async () => {
        dispatch({type: 'START_GENERAL_LOADING'});
        try {
            const fullCart = await apiFetch('/'+i18n.language+'/api/cart/getFullCart');
            dispatch({type: 'FETCH', payload: fullCart});
        } catch(e) {
            dispatch({type: 'ERROR', payload: e});
        }
        dispatch({type: 'STOP_GENERAL_LOADING'});
    }, [dispatch]);

    const remove = useCallback(async (packagingId) => {
        dispatch({type: 'REMOVE', target: packagingId});
        try {
            await apiFetch('/'+i18n.language+'/api/cart/remove/id-'+packagingId);
        } catch(e) {
            //on réactualise pour être raccord avec la database
            fetchCart();
        }   
    }, [fetchCart, dispatch]);

    const setQuantity = useCallback((packagingId, quantity) => {
        dispatch({type: 'SET_QUANTITY', target: packagingId, payload: quantity});
        //on doit attendre la mise à jour de l'état ci-dessus pour savoir si l'ajout a pu se faire, et ensuite mettre à jour le prix total et le count
        dispatch({type: 'UPDATE_TOTAL_PRICE_AND_COUNT'}); //modifie cart et déclenche le cartChipUpdate()

        //coté server : on met un timer pour éviter trop d'appels successif (on appelle le serveur qu'une fois toutes les 300 ms au maximum)
        if(quantityTimer) {
            clearTimeout(quantityTimer);
        }
        setQuantityTimer(
            setTimeout(async () => {
                try {
                    await apiFetch('/'+i18n.language+'/api/cart/setQuantity/id-'+packagingId+'_quantity-'+quantity);
                } catch(e) {
                    if(!e instanceof ApiError) {
                        //en cas d'erreur autre que stock (gérée en local) on réactualise pour être raccord avec la database
                        fetchCart();
                    }
                }
            }, 300)
        );
    }, [fetchCart, dispatch, quantityTimer]);


    return {cart, fetchCart, remove, setQuantity};
}





