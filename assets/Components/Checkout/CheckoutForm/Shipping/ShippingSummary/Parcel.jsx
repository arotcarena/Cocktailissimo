import React, { useState } from 'react';
import { ShippingMethodCard } from '../ShippingMethodCard';
import { CartSummaryVendorGroup } from '../../../CartSummary/CartSummaryVendorGroup';
import { ExpandMoreIcon } from '../../../../../UI/Icon/ExpandMoreIcon';
import { EditButton } from '../../../../../UI/Button/EditButton';
import { SHIPPING_TYPE_RELAY } from '../ShippingEdit/ShippingForm';
import { RelayLightCard } from './RelayLightCard';
import { useTranslation } from 'react-i18next';

export const Parcel = ({vendorGroup, editIndex}) => {
    const {t} = useTranslation('messages');

    const [isExpanded, setExpanded] = useState(false);

    const toggleExpand = e => {
        e.preventDefault();
        setExpanded(isExpanded => !isExpanded);
    };

    const handleEdit = () => {
        editIndex(vendorGroup.index);
    }

    return (
        <div className="shippingMethod-form-header-title-group mute">
            <button type="button" onClick={toggleExpand} className="shippingMethod-form-header-title-line">
                <span>{t('delivery')}{vendorGroup.position !== '1/1' ? (' ' + vendorGroup.position): ''}</span>
                <span className="shippingMethod-form-header-title-badge">{t(vendorGroup.shippingMethod.type, {ns: 'configs'})}</span>
                <div className="separator">
                </div>
                <ExpandMoreIcon additionalClass={'icon' + (isExpanded ? ' expanded': '')} />
            </button>
            <div className="shippingMethod-form-header-title-group-expand">
                {
                    vendorGroup.shippingMethod.type === SHIPPING_TYPE_RELAY && (
                        <RelayLightCard relay={vendorGroup.shippingMethod.relay} />
                    )
                }
                <ShippingMethodCard shippingMethod={vendorGroup.shippingMethod} />
                <EditButton onClick={handleEdit} />
            </div>
            {
                isExpanded && (
                    <CartSummaryVendorGroup vendorGroup={vendorGroup} />
                )
            }
        </div>
    )
}
