import { t } from 'i18next';
import React from 'react';

export const CountrySuggestItem = ({country, selected, onSelect}) => {
    const handleClick = e => {
        e.preventDefault();
        onSelect(country);
    }

    return (
        <li className={'address-suggest-item suggest-item' + (selected ? ' selected': '')} onClick={handleClick}>
            {t(country, {ns: 'countries'})} <strong>{country}</strong>
        </li>
    )
}