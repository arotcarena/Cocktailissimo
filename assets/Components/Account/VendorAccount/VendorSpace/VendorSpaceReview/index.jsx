import React, { useState } from 'react';
import { VendorReviewHeader } from './VendorReviewHeader';
import { ReviewList } from '../../../../../UI/ShowSubSections/Publication/Review/ReviewList';
import { SetSubmitInfoContext } from '../../../../../Context/ShowSubSectionsContext';
import { Flash } from '../../../../../UI/Flash/Flash';
import { useTranslation } from 'react-i18next';

export const VendorSpaceReview = ({vendor}) => {
    const {t, i18n} = useTranslation('messages');

    const [submitInfo, setSubmitInfo] = useState(null);

    return (
        <div className="vendorDashboard-review">
            <VendorReviewHeader note={vendor.reviewNote} count={vendor.countReviews} />

            <section id="reviews" className="product-show-sub-block review-block">
                <h2 className="border-title">
                    <span>{t('all_reviews')}</span>
                </h2>
                
                <SetSubmitInfoContext.Provider value={setSubmitInfo}>

                    <ReviewList
                        fetchAllEntrypoint={'/'+i18n.language+'/api/review/filterByVendorId/'+vendor.id}
                    />

                    <Flash isOpen={submitInfo !== null} type={submitInfo?.type} close={() => setSubmitInfo(null)}>
                        {submitInfo?.message}
                    </Flash>
                </SetSubmitInfoContext.Provider>
            </section>

        </div>
    )
}

