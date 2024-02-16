import React from 'react';
import { CartSummaryVendorGroup } from '../../../../CartSummary/CartSummaryVendorGroup';
import { useTranslation } from 'react-i18next';

export const CurrentParcel = ({vendorGroup}) => {
    const {t} = useTranslation('messages');

    return (
        <div className="shippingMethod-form-header-title-group active">
            {
                vendorGroup.position !== '1/1' && (
                    <div className="shippingMethod-form-header-title-line">
                        <span>{t('delivery')} {vendorGroup.position}</span>
                        <div className="separator">
                        </div>
                    </div>
                )
            }
            <CartSummaryVendorGroup vendorGroup={vendorGroup} />
        </div>
    )
}