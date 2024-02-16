import React from 'react';
import { IndexReviewStars } from '../../../../../../UI/Stars/IndexReviewStars';
import { useTranslation } from 'react-i18next';

export const VendorLine = ({vendor}) => {
    const {t, i18n} = useTranslation('messages');

    return (
        <div className="cart-vendor-group-title">
            <div className="left">
                {t('sent_by')}
            </div>
            <div className="center">
                <VendorLink vendor={vendor} />
                <IndexReviewStars note={vendor.reviewNote} count={vendor.countReviews} />
            </div>
        </div>
    )
}

const VendorLink = ({vendor}) => {

    if(vendor.target) {
        return (
            <a className="cart-vendor-group-title-link ws-nowrap" href={vendor.target}>{vendor.usualName}</a>
        )
    }
    return <span>{vendor.usualName}</span>
}

