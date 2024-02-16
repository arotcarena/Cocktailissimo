import React, { createContext, useEffect, useState } from 'react';
import { CartSummary } from './CartSummary';
import { CheckoutForm, STEP_CIVIL_STATE, STEP_DELIVERY_ADDRESS, STEP_PHONE, STEP_SHIPPING } from './CheckoutForm';
import { useFetch } from '../../CustomHook/fetch/useFetch';
import { Security } from '../../Config/Security';
import { useGetUser } from '../../CustomHook/useGetUser';
import { Loader } from '../../UI/Icon/Loader';
import { sameVendorGroups, vendorGroupsShippingRemove } from '../../functions/checkoutCart';
import { useTranslation } from 'react-i18next';
import { useProgressiveStepsWithStorage } from '../../CustomHook/state/progressiveSteps/useProgressiveStepsWithStorage';
import { forceGeolocCountry } from '../../functions/geoloc/geolocCountry';


export const CheckoutContext = createContext(null);

const checkoutInitialData = {
    civilState: {
        email: '',
        civility: '',
        firstName: '',
        lastName: ''
    },
    company: null,
    phone: '',
    deliveryAddress: {
        civility: '',
        firstName: '',
        lastName: '',
        lineOne: '',
        lineTwo: '',
        postcode: '',
        city: '',
        country: '',
        state: ''
    },
    invoiceAddress: {
        lineOne: '',
        lineTwo: '',
        postcode: '',
        city: '',
        country: '',
        state: ''
    },
    countArticles: null,
    vendorGroups: null,
    articlesPrice: null,
    shippingCost: null,
    totalPrice: null
}

export const Checkout = () => {
    const {t, i18n} = useTranslation('messages');

    // ce hook sauvegarde step et maxStep à chaque changement dans le localStorage, et récupère la valeur à l'initialisation
    const {step, selectStep, forceStep, forwardStep} = useProgressiveStepsWithStorage(STEP_CIVIL_STATE, 'check_st'); 

    //cartSummary
    const [cart, cartIsLoading, cartErrors] = useFetch('/'+ i18n.language +'/api/cart/getFullCart');


    const [checkoutData, setCheckoutData] = useState(checkoutInitialData);

    //pour supprimer les choix de livraison quand l'adresse de livraison change
    const resetShipping = () => {
        setCheckoutData(checkoutData => ({
            ...checkoutData,
            vendorGroups: vendorGroupsShippingRemove(checkoutData.vendorGroups),
            shippingCost: null,
            totalPrice: null
        }));
    }

    //user from session storage
    const {user, updateUser} = useGetUser();
    
    //récupération des données présentes dans localStorage
    useEffect(() => {
        if(window.sessionStorage.getItem('checkout')) {                          
            setCheckoutData(
                Security.decryptToObject(window.sessionStorage.getItem('checkout'))
            );
        }
    }, []);
    // ou dans user from database
    useEffect(() => {
        //on écrase le civilState même s'il était déjà défini dans localStorage
        if(user) {
            setCheckoutData(checkoutData => ({
                ...checkoutData,
                civilState: {
                    email: user.email,
                    civility: user.civility,
                    firstName: user.firstName,
                    lastName: user.lastName
                },
                company: user.company ? user.company.usualName: null,
                phone: (user.phone !== null && user.phone !== '') ? user.phone: checkoutData.phone
            }));
            if(step <= STEP_PHONE) {
                if(user.phone) {
                    selectStep(STEP_DELIVERY_ADDRESS);
                } else {
                    selectStep(STEP_PHONE);
                }
            }
        }
    }, [user]);

    //à chaque changement de checkoutData on persiste les données dans localStorage
    useEffect(() => {
        if(checkoutData) {
            window.sessionStorage.setItem('checkout', Security.encryptFromObject(checkoutData));        
        }
    }, [checkoutData]);

    // si le cart a changé, il faut mettre à jour checkoutData.cart
    // et si on avait déjà choisi des shippingMethods, il faut les choisir à nouveau donc on revient à step_shipping
    useEffect(() => {
        if(cart) {
            if(!sameVendorGroups(checkoutData.vendorGroups, cart.cartVendorGroups)) {
                setCheckoutData(checkoutData => ({
                    ...checkoutData,
                    vendorGroups: cart.cartVendorGroups, // ceci a pour effet de supprimer les shippingMethods
                    articlesPrice: cart.totalPrice,
                    countArticles: cart.count,
                    //on détruit les totaux liés aux shipping choices
                    shippingCost: null,
                    totalPrice: null,
                }));
                if(step > STEP_SHIPPING) {
                    forceStep(STEP_SHIPPING);
                }
            }
        }
    }, [cart]);


    //au changement de deliveryAddress.country, on vérifie si C_ISO est bon, si c'est plus bon on déclenche force geoloc_country coté serveur
    const [mustReload, setMustReload] = useState(false);
    useEffect(() => {
        if(checkoutData.deliveryAddress.country !== '' && checkoutData.deliveryAddress.country !== sessionStorage.getItem('C_ISO')) {
            forceGeolocCountry(checkoutData.deliveryAddress.country);
            setMustReload(true);
        }
    }, [checkoutData.deliveryAddress.country]);
    //pour empêcher l'utilisateur de bypass le rechargement
    if(mustReload) {
        return;
    }

    return (
        <div className="checkout">
            <div className="checkout-container">
                {
                    user === null ? (
                        <div className="checkout-form">
                            <h1>{t('checkout')}</h1>
                            <div className="info-group no-ml">
                                <Loader />
                            </div>
                        </div>
                    ): (
                        <CheckoutContext.Provider value={{
                            userIsLogged: ((user !== null) && (user !== false)),
                            data: checkoutData,
                            setData: setCheckoutData,
                            resetShipping: resetShipping,
                            step: step,
                            selectStep: selectStep,
                            forceStep: forceStep,
                            forwardStep: forwardStep
                        }}>
                            <CheckoutForm />
                        </CheckoutContext.Provider>
                    )
                }

                <CartSummary checkoutData={checkoutData} isLoading={cartIsLoading} />
            </div>
        </div>
    )
}

