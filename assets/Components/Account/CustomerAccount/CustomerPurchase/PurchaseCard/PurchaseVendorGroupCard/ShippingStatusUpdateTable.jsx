import React from 'react';
import { SiteConfig } from '../../../../../../Config/SiteConfig';
import { t } from 'i18next';

export const ShippingStatusUpdateTable = ({shippingInfo}) => {
    if(shippingInfo.status === SiteConfig.SHIPPING_STATUS_PENDING) {
        return (
            <div className="p-margin">
                <span className="delivery-status-badge">{t(shippingInfo.status, {ns: 'configs'})}</span>
            </div>
        )
    }

    return (
        <div className="purchase-lines-list">
            <table className="purchase-full-item-table td-small">
                <thead>
                    <tr>
                        {
                            shippingInfo.sentAt && <th>{t(SiteConfig.SHIPPING_STATUS_SENT, {ns: 'configs'})}</th>
                        }
                        {
                            shippingInfo.deliveredAt && <th>{t(SiteConfig.SHIPPING_STATUS_DELIVERED, {ns: 'configs'})}</th>
                        }
                        {
                            shippingInfo.canceledAt && <th>{t(SiteConfig.SHIPPING_STATUS_CANCELED, {ns: 'configs'})}</th>
                        }
                        {
                            shippingInfo.returnSentAt && <th>{t(SiteConfig.SHIPPING_STATUS_RETURN_SENT, {ns: 'configs'})}</th>
                        }
                        {
                            shippingInfo.returnDeliveredAt && <th>{t(SiteConfig.SHIPPING_STATUS_RETURN_DELIVERED, {ns: 'configs'})}</th>
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            shippingInfo.sentAt && <td>{shippingInfo.sentAt}</td>
                        }
                        {
                            shippingInfo.deliveredAt && <td>{shippingInfo.deliveredAt}</td>
                        }
                        {
                            shippingInfo.canceledAt && <td>{shippingInfo.canceledAt}</td>
                        }
                        {
                            shippingInfo.returnSentAt && <td>{shippingInfo.returnSentAt}</td>
                        }
                        {
                            shippingInfo.returnDeliveredAt && <td>{shippingInfo.returnDeliveredAt}</td>
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}