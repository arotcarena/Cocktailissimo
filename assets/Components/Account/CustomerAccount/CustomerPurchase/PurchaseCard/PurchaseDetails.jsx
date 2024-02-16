import React from 'react';
import { AddressShow } from '../../../../../UI/Show/AddressShow';
import { useTranslation } from 'react-i18next';

export const PurchaseDetails = ({purchase: {email, phone, deliveryDetail, invoiceDetail}}) => {
    const {t} = useTranslation('messages');

    return (
        <div className="purchase-full-group dark-group">
            <div className="purchase-full-item">
                <div className="purchase-full-item-title">{t('contact_details')}</div>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
            <div className="purchase-separator"></div>
            <div className="purchase-full-item">
                <div className="purchase-full-item-title">{t('delivery_address')}</div>
                <AddressShow address={deliveryDetail} />
            </div>
            <div className="purchase-separator"></div>
            <div className="purchase-full-item">
                <div className="purchase-full-item-title">{t('invoice_address')}</div>
                <AddressShow address={invoiceDetail} />
            </div>
        </div>
    )
}