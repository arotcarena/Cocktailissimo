import React, { useState } from 'react';
import { Modal } from '../../../../../../UI/Container/Modal';
import { FormButton } from '../../../../../../UI/Form/FormButton';
import { useOpenState } from '../../../../../../CustomHook/state/useOpenState';
import { ApiError, apiFetch } from '../../../../../../functions/api';
import { EditIcon } from '../../../../../../UI/Icon/EditIcon';
import { useTranslation } from 'react-i18next';

export const StockUpdater = ({selectedPackaging, product, updateStocks}) => {
    const {t, i18n} = useTranslation('messages');

    const [stockFormIsOpen, openStockForm, closeStockForm] = useOpenState(false);

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleStockSubmit = async e => {
        e.preventDefault();
        if(isLoading) {
            return;
        }
        setError(null);
        setLoading(true);
        const form = new FormData(e.target);
        const newStock = form.get('stock');

        console.log(newStock);
        try {
            const {stock, mainStock} = await apiFetch('/'+i18n.language+'/api/vendorDashboard/updateStock/'+selectedPackaging.id+'/'+newStock);
            updateStocks(selectedPackaging.id, stock, mainStock);
            closeStockForm();
        } catch(e) {
            if(e instanceof ApiError) {
                setError(e.errors);
            } else {
                setError(t('error.temporary_failure'));
            }
        }
        setLoading(false);
    };

    return (
        <>
            <div className="stock-left">
                <span>{t('stock')} : </span>
                <button type="button" onClick={openStockForm} className="stock-badge-input i-text">
                    <span>{selectedPackaging.stock}</span>
                    <EditIcon />
                </button>
            </div>
            <Modal additionalClass="vendorDashboard-product-card-modal review-form-modal center-form-modal" isOpen={stockFormIsOpen} close={closeStockForm}>
                <form onSubmit={handleStockSubmit} className="vendorDashboard-product-card-stock-form">
                    <div className="vendorDashboard-product-card-form-header">
                        <div className="vendorDashboard-product-card-form-img" style={{background: 'url('+product.pictures[0].path.index+') center center / cover no-repeat'}}>
                        </div>
                        <div className="vendorDashboard-product-card-title">
                            {product.designation}
                            {' '}
                            <span className="vendorDashboard-product-card-title-mute">{selectedPackaging.label}</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="stock" className="form-label">{t('stock')}</label>
                        <input id="stock" name="stock" className="form-control" type="number" defaultValue={selectedPackaging.stock} />
                        {
                            error && <div className="form-error">{error}</div>
                        }
                    </div>
                    <div className="submit-group double">
                        <FormButton additionalClass="bordeaux" loading={isLoading}>{t('submit.validate')}</FormButton>
                        <FormButton additionalClass="cancel" onClick={closeStockForm}>{t('cancel')}</FormButton>
                    </div>
                </form>
            </Modal>
        </>
    )
}