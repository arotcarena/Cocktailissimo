import React from 'react';
import { ExpandMoreIcon } from '../Icon/ExpandMoreIcon';
import { useTranslation } from 'react-i18next';

export const Sorter = ({sortBy, setSortBy, choices, withPertinence = true, additionalClass}) => {
    const {t} = useTranslation('messages');

    const handleChange = e => {
        setSortBy(e.target.value);
    };

    return (
        <div className={'search-filters-control sort-control' + (additionalClass ? ' '+additionalClass: '')}>
            <label htmlFor="sortBy" className="sort-label">{t('sort')}</label>
            <select id="sortBy" className="search-filters-control-button sort-button" name="sortBy" value={sortBy} onChange={handleChange}>
                {
                    withPertinence && <option value="">{t('relevance')}</option>
                }
                {
                    Object.entries(choices).map(([label, value]) => ([
                        <option key={value} value={value}>{label}</option>
                    ]))
                }
            </select>
            <ExpandMoreIcon additionalClass="sort-select-arrow" />
        </div>
    )
}