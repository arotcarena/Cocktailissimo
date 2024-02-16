import React from 'react';
import { CarrierIcon } from '../../../../ShippingMethodCard';
import { distanceFormater } from '../../../../../../../../functions/formaters';
import { ExpandMoreIcon } from '../../../../../../../../UI/Icon/ExpandMoreIcon';
import { useToggleBoolState } from '../../../../../../../../CustomHook/state/useToggleState';
import { useTranslation } from 'react-i18next';

export const RelayCard = ({relay}) => {
    const {t} = useTranslation('messages');

    const address = relay.address;

    const [isOpen, toggle] = useToggleBoolState(false);

    return (
        <div className="relay-card">
            <div className="relay-card-row">
                <div className="carrier-icon-wrapper">
                    {
                        relay.carriers.map((carrier, index) => <CarrierIcon key={index} carrier={carrier} />)
                    }
                </div>
                <div className="relay-card-body">
                    <div className="relay-card-header">
                        <div className="relay-card-title">{relay.name}</div>
                        <div className="relay-card-text">{address.lineOne}</div>
                        <div className="relay-card-text">{address.postcode} {address.city} ({address.country})</div>
                    </div>

                    <div className="relay-card-footer">
                        <button type="button" onClick={toggle} className="relay-card-footer-control i-text">
                            <span>{isOpen ? t('close_opening_times'): t('open_opening_times')}</span>
                            <ExpandMoreIcon additionalClass={isOpen ? ' expanded': ''} />
                        </button>
                    </div>
                </div>
                {
                    relay.distance && <div className="relay-card-badge shippingMethod-form-header-title-badge">{distanceFormater(relay.distance)}</div>
                }
            </div>
            {
                isOpen && <RelayOpeningTimes times={relay.formattedOpeningTimes} />
            }
        </div>
    )
}


export const RelayOpeningTimes = ({times}) => {
    const {t} = useTranslation('messages');
    
    const daysLabels = {
        0: t('day.mon'), 1: t('day.tue'), 2: t('day.wed'), 3: t('day.thu'), 4: t('day.fri'), 5: t('day.sat'), 6:t('day.sun')
    };

    return (
        <div className="relay-card-expand">
            <table className="opening-times-table">
                <tbody>
                    {
                        Object.entries(daysLabels).map(([key, day]) => <OpeningTimesRow key={key} day={day} times={times[key]} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

const OpeningTimesRow = ({day, times}) => {
    const customTimes = {
        type: null,
        morning: null,
        afternoon: null,
        fullDay: null
    };

    switch(times.length) {
        case 2:
            customTimes.type = 'dual';
            break;
        case 1:
            const startHour = parseInt(times[0].substring(0, 2));
            const endHour = parseInt(times[0].substring(8, 10));
            if(endHour < 12) {
                //si avant midi
                customTimes.type = 'morning';
            } else if(startHour > 12) {
                //si après midi
                customTimes.type = 'afternoon'
            } else {
                //si on enjambe midi
                if(endHour <= 14) {
                    customTimes.type = 'morning';
                } else {
                    customTimes.type = 'fullDay';
                }
            }
            break;
        default:
            //on laisse customTimes.type null
    }

    return (
        <tr>
            <td>{day}</td>
            {
                customTimes.type === 'dual' && (
                    <>
                        <td>{times[0]}</td>
                        <td>{times[1]}</td>
                    </>
                )
            }
            {
                customTimes.type === 'morning' && (
                    <>
                        <td>{times[0]}</td>
                        <td>- - -</td>
                    </>
                )
            }
            {
                customTimes.type === 'afternoon' && (
                    <>
                        <td>- - -</td>
                        <td>{times[0]}</td>
                    </>
                )
            }
            {
                customTimes.type === 'fullDay' && (
                    <>
                        <td colSpan={2}>{times[0]}</td>
                    </>
                )
            }
            {
                customTimes.type === null && (
                    <>
                        <td colSpan={2}>- - -</td>
                    </>
                )
            }
        </tr>
    )
}