import { t } from 'i18next';
import React from 'react';
import { DownloadIcon } from '../Icon/DownloadIcon';

export const InvoiceDownloaderLink = ({purchaseVendorGroupId, type, lang = null}) => {
    return (
        <form action="/invoice/download" method="POST">
            <input type="hidden" name="purchaseVendorGroupId" value={purchaseVendorGroupId} />
            <input type="hidden" name="type" value={type} />
            {
                lang && <input type="hidden" name="lang" value={lang} />
            }
            <button className="purchase-vendor-group-download-link i-text">
                <DownloadIcon />
                <span>
                    {t('download.invoice', {ns: 'messages'})}
                </span>
            </button>
        </form>
    )
}