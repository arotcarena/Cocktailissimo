import React, { useState } from 'react';
import { SetSubmitInfoContext } from '../../../Context/ShowSubSectionsContext';
import { Flash } from '../../../UI/Flash/Flash';
import { ReviewList } from '../../../UI/ShowSubSections/Publication/Review/ReviewList';

export const VendorShopReview = ({fetchAllEntrypoint}) => {

    const [submitInfo, setSubmitInfo] = useState(null);

    return (
        <SetSubmitInfoContext.Provider value={setSubmitInfo}>

            <ReviewList fetchAllEntrypoint={fetchAllEntrypoint} />

            <Flash isOpen={submitInfo !== null} type={submitInfo?.type} close={() => setSubmitInfo(null)}>
                {submitInfo?.message}
            </Flash>
        </SetSubmitInfoContext.Provider>
    )
}