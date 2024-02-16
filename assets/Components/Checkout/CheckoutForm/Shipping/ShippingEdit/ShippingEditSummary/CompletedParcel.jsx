import React, { useState } from 'react';
import { CartSummaryVendorGroup } from '../../../../CartSummary/CartSummaryVendorGroup';
import { ShippingMethodCard } from '../../ShippingMethodCard';
import { ExpandMoreIcon } from '../../../../../../UI/Icon/ExpandMoreIcon';
import { EditButton } from '../../../../../../UI/Button/EditButton';
import { SHIPPING_TYPE_RELAY } from '../ShippingForm';
import { RelayLightCard } from '../../ShippingSummary/RelayLightCard';
import { useTranslation } from 'react-i18next';

export const CompletedParcel = ({vendorGroup, selectIndex}) => {
    const {t} = useTranslation('messages');

    const [isExpanded, setExpanded] = useState(false);

    const toggleExpand = e => {
        e.preventDefault();
        setExpanded(isExpanded => !isExpanded);
    };

    const handleEdit = () => {
        selectIndex(vendorGroup.index);
    }

    return (
        <div className="shippingMethod-form-header-title-group mute">
            <button type="button" onClick={toggleExpand} className="shippingMethod-form-header-title-line">
                <span>{t('delivery')} {vendorGroup.position}</span>
                <span className="shippingMethod-form-header-title-badge">{t(vendorGroup.shippingMethod.type, {ns: 'configs'})}</span>
                <div className="separator">
                </div>
                <ExpandMoreIcon additionalClass={'icon' + (isExpanded ? ' expanded': '')} />
            </button>
            {
                isExpanded && (
                    <div className="shippingMethod-form-header-title-group-expand">
                        {
                            vendorGroup.shippingMethod.type === SHIPPING_TYPE_RELAY && (
                                <RelayLightCard relay={vendorGroup.shippingMethod.relay} />
                            )
                        }
                        <ShippingMethodCard shippingMethod={vendorGroup.shippingMethod} />
                        <CartSummaryVendorGroup vendorGroup={vendorGroup} />
                        <EditButton onClick={handleEdit} />
                    </div>
                )
            }
        </div>
    )
}
