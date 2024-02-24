import React from 'react';
import { VendorLine } from './VendorLine';
import { PurchaseLineCard } from './PurchaseLineCard';
import { ShippingCard } from './ShippingCard';
import { useTranslation } from 'react-i18next';
import { ShippingStatusUpdateTable } from './ShippingStatusUpdateTable';
import { SiteConfig } from '../../../../../../Config/SiteConfig';
import { InvoiceDownloaderLink } from '../../../../../../UI/Invoice/InvoiceDownloaderLink';

export const PurchaseVendorGroupCard = ({purchaseVendorGroup, position}) => {
    const {t} = useTranslation('messages');

    const {vendor, purchaseLines, shippingInfo, salesInvoiceNumber} = purchaseVendorGroup;

    return (
        <div className="purchase-vendor-group">
            <VendorLine vendor={vendor} />
            <div className="purchase-lines-list">
                <table className="purchase-full-item-table">
                    <thead>
                        <tr>
                            <th>{t('commercial_item')}</th>
                            <th>{t('quantity')}</th>
                            <th>{t('unit_price')}</th>
                            <th>{t('total_price')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchaseLines.map(purchaseLine => (
                                <PurchaseLineCard key={purchaseLine.id} purchaseLine={purchaseLine} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="purchase-vendor-group-shipping-block">
                <div className="purchase-vendor-group-shipping-title">
                    <span>{t('delivery')}{position !== '1/1' ? (' ' + position): ''}</span>
                    <span className="purchase-vendor-group-shipping-title-badge">{t(shippingInfo.type, {ns: 'configs'})}</span>
                </div>
                <ShippingCard shippingInfo={shippingInfo} />
                <ShippingStatusUpdateTable shippingInfo={shippingInfo} />
                {
                    shippingInfo.tracking && <div className="purchase-vendor-group-tracking"><strong>{t('tracking_number')}</strong> {shippingInfo.tracking}</div>
                }
            </div>
            <InvoiceDownloaderLink purchaseVendorGroupId={purchaseVendorGroup.id} type={SiteConfig.INVOICE_TYPE_SALES} />
        </div>
    )
}