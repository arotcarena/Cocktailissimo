import React from 'react';
import { PriceShow } from '../../../../../UI/Product/PriceShow';
import { useTranslation } from 'react-i18next';

export const PurchaseTotals = ({purchase: {articlesPrice, shippingCost, totalPrice}}) => {
    const {t} = useTranslation('messages');

    return (
        <div className="purchase-totals">
            <div className="purchase-totals-line">
                <div className="purchase-totals-label">{t('items_total_price')}</div>
                <div className="purchase-totals-value">
                    <PriceShow price={articlesPrice} />
                </div>
            </div>
            <div className="purchase-totals-line">
                <div className="purchase-totals-label">{t('delivery')}</div>
                <div className="purchase-totals-value">
                    <PriceShow price={shippingCost} />
                </div>
            </div>
            <div className="purchase-separator purchase-totals-separator"></div>
            <div className="purchase-totals-line main-line">
                <div className="purchase-totals-label">{t('total')}</div>
                <div className="purchase-totals-value">
                    <PriceShow price={totalPrice} />
                </div>
            </div>
        </div>
    )
}