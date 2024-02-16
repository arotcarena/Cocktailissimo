import React, { useState } from 'react';
import { EyeIcon } from '../../../../../../UI/Icon/Eyes/EyeIcon';
import { CartIcon } from '../../../../../../UI/Icon/CartIcon';
import { PaidIcon } from '../../../../../../UI/Icon/PaidIcon';
import { Modal } from '../../../../../../UI/Container/Modal';
import { useOpenState } from '../../../../../../CustomHook/state/useOpenState';
import { FormButton } from '../../../../../../UI/Form/FormButton';
import { useTranslation } from 'react-i18next';

export const Counters = ({product}) => {
    const {t} = useTranslation('messages');

    const [infoIsOpen, openInfo, closeInfo] = useOpenState(false);
    const [message, setMessage] = useState(null);

    const handleClick = e => {
        if(infoIsOpen) {
            return;
        }
        e.preventDefault();
        const type = e.currentTarget.name;
        switch(type) {
            case 'view':
                setMessage(t('count.product_views', {count: product.countViews}));
                break;
            case 'cart':
                setMessage(t('count.product_carts', {count: product.countCarts}));
                break;
            case 'sale':
                setMessage(t('count.product_sales', {count: product.countSales}));
                break;
            default:
                
        }
        openInfo();
    }

    return (
        <>
            <button type="button" onClick={handleClick} name="view" className="vendorDashboard-product-card-counter-badge top">
                <EyeIcon />
                <span className="vendorDashboard-product-card-counter-badge-text">{ product.countViews }</span>
            </button>
            <button type="button" onClick={handleClick} name="cart" className="vendorDashboard-product-card-counter-badge center">
                <CartIcon />
                <span className="vendorDashboard-product-card-counter-badge-text">{ product.countCarts }</span>
            </button>
            <button type="button" onClick={handleClick} name="sale" className="vendorDashboard-product-card-counter-badge bottom">
                <PaidIcon />
                <span className="vendorDashboard-product-card-counter-badge-text">{ product.countSales }</span>
            </button>
            <Modal additionalClass="vendorDashboard-product-card-modal review-form-modal center-form-modal" isOpen={infoIsOpen} close={closeInfo}>
                <div className="vendorDashboard-product-card-form-header">
                    <div className="vendorDashboard-product-card-form-img" style={{background: 'url('+product.pictures[0].path.index+') center center / cover no-repeat'}}>
                    </div>
                    <div className="vendorDashboard-product-card-title">{product.designation}</div>
                </div>
                <div className="vendorDashboard-product-card-info">{message}</div>
                <FormButton additionalClass="bordeaux" onClick={closeInfo}>{t('close')}</FormButton> 
            </Modal>
        </>
    )
} 