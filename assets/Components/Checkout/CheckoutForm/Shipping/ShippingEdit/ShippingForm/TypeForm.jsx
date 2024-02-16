import React from "react";
import { SHIPPING_TYPE_HOME, SHIPPING_TYPE_RELAY } from ".";
import { HomeIcon } from "../../../../../../UI/Icon/HomeIcon";
import { StoreIcon } from "../../../../../../UI/Icon/StoreIcon";
import { useTranslation } from "react-i18next";

export const TypeForm = ({shippingType, setShippingType, deliveryAddress, relay, setRelay}) => {
    const {t} = useTranslation('messages');

    const handleChangeRelayClick = e => {
        e.preventDefault();
        setRelay(null);
    }

    return (
        <div className="checkout-form-cubes">
            <TypeChoice
                type={SHIPPING_TYPE_HOME}
                isSelected={shippingType === SHIPPING_TYPE_HOME}
                onSelect={setShippingType}
                >
                <HomeIcon />
                <div className="title">{t('at_home')}</div>
                <div className="text uppercase">
                    <div>{deliveryAddress.lineOne}, {deliveryAddress.postcode} {deliveryAddress.city} ({deliveryAddress.country})</div>
                </div>
            </TypeChoice>
            <TypeChoice
                type={SHIPPING_TYPE_RELAY}
                isSelected={shippingType === SHIPPING_TYPE_RELAY}
                onSelect={setShippingType}
                >
                <StoreIcon />
                <div className="title">{t('at_relay')}</div>
                {
                    relay && (
                        <div className="text uppercase">
                            <div>
                                <strong>{relay.name}</strong> {relay.address.lineOne}, {relay.address.postcode} {relay.address.city} ({relay.address.country})
                            </div>
                            <div className="center-wrapper">
                                <div role="button" onClick={handleChangeRelayClick} className="checkout-form-cube-control">
                                    <span>{t('change')}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </TypeChoice>
        </div>
    )
}


const TypeChoice = ({children, type, isSelected, onSelect}) => {

    const handleClick = e => {
        e.preventDefault();
        onSelect(type);
    }

    return (
        <button 
            type="button" 
            className={'checkout-form-cube' + (isSelected ? ' active': '')} 
            onClick={handleClick}
            >
            {children}
        </button>
    )
}