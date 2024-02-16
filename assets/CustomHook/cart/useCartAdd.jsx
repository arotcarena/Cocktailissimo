import { useState } from "react";
import i18n from "../../entrypoints/i18n";
import { ApiError, apiFetch } from "../../functions/api";
import { cartChipAdd } from "../../functions/cartChip";
import { useTemporaryState } from "../state/useTemporaryState";

export const useCartAdd = () => {

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const cartAdd = async (packaging, quantity) => {
        setLoading(true);
        setError(null);
        try {
            await apiFetch('/'+ i18n.language +'/api/cart/add/id-'+packaging.id+'_quantity-'+quantity);
            cartChipAdd(parseInt(quantity), packaging.price.priceToPay);
            sessionStorage.setItem('cart-update', 'true');
            setTemporaryAdded();
        } catch(e) {
            if(e instanceof ApiError) {
                const serverError = e.errors;
                if(serverError.type === 'notEnoughStock') {
                    const quantityToAdd = parseInt(quantity) - parseInt(serverError.quantityNotAdded);
                    if(quantityToAdd > 0) {
                        cartChipAdd(quantityToAdd, packaging.price.priceToPay);
                        sessionStorage.setItem('cart-update', 'true');
                        setTemporaryAdded();
                    }
                }
                setError(serverError.message);
                setTimeout(() => {
                    setError(null);
                }, 3000);
            }
        }
        setLoading(false);
    }
    
    // success alert on add to cart
    const [isAdded, setTemporaryAdded, resetAdded] = useTemporaryState(1500);


    return {cartAdd, isLoading, isAdded, error};
} 