import React from 'react';
import { CompletedParcel } from './CompletedParcel';
import { CurrentParcel } from './CurrentParcel';

export const ShippingEditSummary = ({vendorGroups, index, selectIndex}) => {

    return (
        <div className="shippingMethod-form-header">
            <div className="shippingMethod-form-header-title">
                {
                    vendorGroups.map(vg => (
                        vg.index === index ? (
                            <CurrentParcel key={vg.index} vendorGroup={vendorGroups[index]} />
                        ): (
                            vg.shippingMethod && (
                                <CompletedParcel key={vg.index} vendorGroup={vg} selectIndex={selectIndex} />
                            )
                        )
                    ))
                }
            </div>
        </div>
    )
}