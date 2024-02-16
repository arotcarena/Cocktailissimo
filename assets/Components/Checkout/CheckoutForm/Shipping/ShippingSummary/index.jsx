import React from 'react';
import { Parcel } from './Parcel';


export const ShippingSummary = ({vendorGroups, editIndex}) => {

    return (
        <div className="shippingMethod-form-header">
            <div className="shippingMethod-form-header-title">
                {
                    vendorGroups.map(vg => (
                        <Parcel key={vg.index} vendorGroup={vg} editIndex={editIndex} />
                    ))
                }
            </div>
        </div>
    )
}