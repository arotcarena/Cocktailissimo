import React, { useEffect } from 'react';
import { Loader } from '../../../../../UI/Icon/Loader';
import { useButtonLoading } from '../../../../../CustomHook/form/useButtonLoading';
import { useTranslation } from 'react-i18next';
import { PriceShow } from '../../../../../UI/Product/PriceShow';
import { CartVendorGroup } from './CartVendorGroup';

export const Cart = ({cart, fetchCart, remove, setQuantity}) => {
    const {t} = useTranslation('messages');

    const [buttonLoading, handleButtonClick] = useButtonLoading();

    //on fetch à la première ouverture du cart, et sinon uniquement si un add a été fait sur product index ou product show
    useEffect(() => {
        if(sessionStorage.getItem('cart-update') === 'true') {
            sessionStorage.setItem('cart-update', 'false');
            fetchCart();
        }
    }, []);

    return (
        <div className="cart-modal">
            <div className="cart-header side-menu-header">
                <h2 className="cart-title">
                    {t('cart')} ({cart.count ?? '0'})
                </h2>
            </div>
            {
                cart.generalLoading && (
                    <div className="cart-sub-header">
                        <Loader />
                    </div>
                )

            }
            
            {
                !cart.generalLoading && cart.cartVendorGroups.length === 0 && <div className="cart-sub-header">{t('info.empty_cart')}</div>
            }

            {
                cart.cartVendorGroups.length > 0 &&
                (
                    <>
                        <div className="cart-body">
                            <ul className={'cart-list' + (cart.generalLoading ? ' loading': '')}>
                                {
                                    cart.cartVendorGroups.map((cartVendorGroup, index) => (
                                        <CartVendorGroup
                                            key={index}
                                            cartVendorGroup={cartVendorGroup}
                                            remove={remove}
                                            setQuantity={setQuantity}
                                        />
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="cart-footer">
                            <div className="cart-total">{t('total')} : <PriceShow price={cart.totalPrice} /></div>
                            <a href={t('url.checkout.index', {ns: 'urls'})} className={'cart-footer-link side-menu-footer-button' + (buttonLoading ? ' disabled': '')} onClick={handleButtonClick}>
                                {
                                    buttonLoading 
                                    ?
                                    <Loader additionalClass="form-button-loader" lang="en" />
                                    :
                                    <span>{t('process_purchase')}</span>
                                }
                            </a>
                        </div>
                    </>
                )
            }
            
        </div>
    )
}