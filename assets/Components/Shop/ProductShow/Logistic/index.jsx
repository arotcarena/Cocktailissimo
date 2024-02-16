import React, { useEffect, useState } from 'react';
import { PriceShow } from '../../../../UI/Product/PriceShow';
import { StockShow } from './StockShow';
import { QuantitySelector } from './QuantitySelector';
import { FormButton } from '../../../../UI/Form/FormButton';
import { SuccessIcon } from '../../../../UI/Icon/SuccessIcon';
import { PackagingButton } from './PackagingButton';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { useCartAdd } from '../../../../CustomHook/cart/useCartAdd';

export const Logistic = ({packagingChoices, initialPackaging}) => {
    const {t} = useTranslation('messages');

    const [selectedPackaging, selectPackaging] = useState(initialPackaging);

    useEffect(() => {
        //on modifie l'url pour que publicRef soit celle du bon packaging
        if(selectedPackaging !== initialPackaging) {
            history.replaceState({}, '', selectedPackaging.target);
        }
    }, [selectedPackaging]);

    //initialement la quantité est à 1 mais on pourra recevoir une quantité en paramètre
    const [quantity, setQuantity] = useState(1)

    //cart add
    const {cartAdd, isLoading, isAdded, error} = useCartAdd();
    const handleCartAdd = e => {
        e.preventDefault();
        cartAdd(selectedPackaging, quantity);
    }

    return (
        <>
            {
                packagingChoices.length === 1 ? (
                    <div className="packaging-text">{packagingChoices[0].label}</div>
                ): (
                    
                    <div className="packaging-choices">
                        {
                            packagingChoices.map(packaging => (
                                <PackagingButton  
                                    key={packaging.id} 
                                    packaging={packaging}
                                    onSelect={selectPackaging}
                                    isSelected={packaging.id === selectedPackaging.id}
                                />
                            ))
                        }
                    </div>
                )
            }

            <div className="price p-margin">
                <PriceShow price={selectedPackaging.price} />
            </div>
    
            <div className="product-show-row">
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} stock={selectedPackaging.stock} />
                <StockShow stock={selectedPackaging.stock} />
            </div>
    
            {
                createPortal((
                    <div className="product-show-button-group">
                        <FormButton 
                            loading={isLoading} 
                            disabled={isAdded}
                            onClick={handleCartAdd} 
                            additionalClass={'bordeaux product-show-add-button' + (isAdded ? ' is-added': '')}
                        >
                            {
                                isAdded ? <SuccessIcon />: t('add_to_cart')
                            }
                        </FormButton>
                        {
                            error && <div className="form-error">{error}</div>
                        }
                    </div>
                ), document.getElementById('js-product-show-button-portal'))
            }
        </>
    )
}