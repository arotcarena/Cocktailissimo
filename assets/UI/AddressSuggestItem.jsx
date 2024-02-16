import { t } from 'i18next';
import React from 'react';

export const AddressSuggestItem = ({address, selected, onSelect}) => {

    const handleClick = e => {
        e.preventDefault();
        onSelect(address);
    }

    return (
        <li className={'address-suggest-item suggest-item' + (selected ? ' selected': '')} onClick={handleClick}>
            {address.lineOne}, {address.postcode} {address.city} - {t(address.country, {ns: 'countries'})} <strong>{address.country}</strong>
        </li>
    )
}