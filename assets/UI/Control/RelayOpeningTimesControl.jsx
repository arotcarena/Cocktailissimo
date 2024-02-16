import React from 'react';
import { ExpandMoreIcon } from '../Icon/ExpandMoreIcon';
import { RelayOpeningTimes } from '../../Components/Checkout/CheckoutForm/Shipping/ShippingEdit/ShippingForm/AtRelay/RelayChoice/RelayCard';
import { useToggleBoolState } from '../../CustomHook/state/useToggleState';
import { t } from 'i18next';

export const RelayOpeningTimesControl = ({openingTimes}) => {

    const [isOpen, toggle] = useToggleBoolState(false, true);

    return (
        <>
            <button type="button" onClick={toggle} className="relay-card-footer-control i-text">
                <span>{isOpen ? t('close_opening_times'): t('open_opening_times')}</span>
                <ExpandMoreIcon additionalClass={isOpen ? ' expanded': ''} />
            </button>
            {
                isOpen && <RelayOpeningTimes times={openingTimes} />
            }
        </>
    )
}