import React from 'react';
import { ExpandMoreIcon } from "../../../../../UI/Icon/ExpandMoreIcon";
import { RelayOpeningTimes } from '../ShippingEdit/ShippingForm/AtRelay/RelayChoice/RelayCard';
import { useToggleBoolState } from '../../../../../CustomHook/state/useToggleState';
import { useTranslation } from 'react-i18next';

export const RelayLightCard = ({relay}) => {
    const {t} = useTranslation('messages');
    const address = relay.address;

    const [isOpen, toggle] = useToggleBoolState(false);

    return (
        <div className="relay-card relay-light-card">
            <div className="relay-card-body">
                <div className="relay-card-header">
                    <div className="relay-card-text"><strong>{relay.name}</strong> {address.lineOne} {address.postcode} {address.city} ({address.country})</div>
                </div>

                <div className="relay-card-footer">
                    <button type="button" onClick={toggle} className="relay-card-footer-control i-text">
                        <span>{isOpen ? t('close_opening_times'): t('open_opening_times')}</span>
                        <ExpandMoreIcon additionalClass={isOpen ? ' expanded': ''} />
                    </button>
                </div>
            </div>
            {
                isOpen && <RelayOpeningTimes times={relay.formattedOpeningTimes} />
            }
        </div>
    )
}