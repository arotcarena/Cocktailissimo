import React from 'react';
import { IndexReviewStars } from '../../../UI/Stars/IndexReviewStars';
import { CartSummaryLine } from './CartSummaryLine';
import { useTranslation } from 'react-i18next';

export const CartSummaryVendorGroup = ({vendorGroup: {vendor, cartLines}}) => {
    const {t} = useTranslation('messages');

    return (
        <div className="cart-vendor-group">
            <div className="cart-vendor-group-title">
                <div className="left">
                    {t('sent_by')}
                </div>
                <div className="center">
                    <a className="cart-vendor-group-title-link ws-nowrap" href={vendor.target}>{vendor.company.usualName}</a>
                    <IndexReviewStars note={vendor.reviewNote} count={vendor.countReviews} />
                </div>
                <div className="right cart-vendor-group-separator">
                </div>
            </div>
            {
                cartLines.map((cartLine, index) => (
                    <CartSummaryLine
                        key={index}
                        cartLine={cartLine}
                    />
                ))
            }
        </div>
    )
}