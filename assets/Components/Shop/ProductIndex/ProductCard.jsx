import React from 'react';
import { useOpenState } from '../../../CustomHook/state/useOpenState';
import { FormButton } from '../../../UI/Form/FormButton';
import { ProductIndexReview } from '../../../UI/Product/ProductIndexReview';
import { useTouchingListener } from '../../../CustomHook/listener/useTouchingListener';
import { SuccessIcon } from '../../../UI/Icon/SuccessIcon';
import { PriceShow } from '../../../UI/Product/PriceShow';
import { useTranslation } from 'react-i18next';
import { useCartAdd } from '../../../CustomHook/cart/useCartAdd';



export const ProductCard = ({product}) => {
    const {t} = useTranslation('messages');

    const [cartButtonIsOpen, openCartButton, closeCartButton] = useOpenState();
    //on vérifie si utilisation du tactile, auquel cas il faut afficher le bouton "Add to cart" en permanence.
    const isTouching = useTouchingListener();

    //cart add
    const {cartAdd, isLoading, isAdded, error} = useCartAdd();
    const handleCartAdd = e => {
        e.preventDefault();
        cartAdd(product.basePackaging, 1);
    }


    return (
        <li className="product-card type-product" onMouseOver={openCartButton} onMouseLeave={closeCartButton}>
            <a className="product-card-img-link" href={product.basePackaging.target}>
                <div className="product-card-img-wrapper">
                    <img className="product-card-img" src={product.firstPicture.path} alt={product.firstPicture.alt} />
                </div>
            </a>
            <div className="product-card-body">
                <h2 className="product-card-title">
                    <a href={product.basePackaging.target}>
                        {product.designation}
                        <span className="product-card-title-suffix">{product.basePackaging.label ? (' ' + product.basePackaging.label): ''}</span>
                    </a>
                </h2>
                
                <ProductIndexReview product={product} />
                
            <div className="product-card-text">
                <PriceShow price={product.basePackaging.price} />
            </div>
            </div>
            <div className="product-card-footer">
                <FormButton 
                    loading={isLoading} 
                    disabled={isAdded}
                    onClick={handleCartAdd} 
                    additionalClass={'bordeaux outline product-card-button' + (cartButtonIsOpen || isTouching ? ' open': '') + (isAdded ? ' is-added': '')}
                >
                    {
                        isAdded ? <SuccessIcon />: t('add_to_cart')
                    }
                </FormButton>
            </div>
            {
                error && <div className="form-error">{error}</div>
            }
        </li>
    )
}