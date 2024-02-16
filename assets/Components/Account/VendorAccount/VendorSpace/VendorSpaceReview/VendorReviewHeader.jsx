import React from 'react';
import { ProductShowReview } from '../../../../../UI/Product/ProductShowReview';
import { EmptyShowRow } from '../../../../../UI/Show/EmptyShowRow';
import { useTranslation } from 'react-i18next';

export const VendorReviewHeader = ({note, count}) => {
    const {t} = useTranslation('messages');

    return (
        <div className="vendorDashboard-review-header">
            <div className="account-profile-block no-border">
                <div className="account-profile-block-row text-center">
                    <div className="account-profile-block-row-label">{t('global_note')}</div>
                    <div className="account-profile-block-row-text with-label">
                        {
                            note ? (
                                <ProductShowReview note={note} count={count} />
                            ): (
                                <div><EmptyShowRow /></div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}