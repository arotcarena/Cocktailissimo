import React from 'react';
import { ExpandMoreIcon } from '../../../../UI/Icon/ExpandMoreIcon';
import { useToggleBoolState } from '../../../../CustomHook/state/useToggleState';
import { RadioFields } from '../../../../UI/Form/RadioFields';
import { useTranslation } from 'react-i18next';


const labelValues = {
    ['< 25 €']: 'null_2500',
    ['25 € - 50 €']: '2500_5000',
    ['50 € - 100 €']: '5000_10000',
    ['100 € - 200 €']: '10000_20000',
    ['> 200 €']: '20000_null',
}
const calcPriceStep = (minPrice, maxPrice) => {
    const min = minPrice ?? 'null';
    const max = maxPrice ?? 'null';

    return min + '_' + max;
}

export const PriceFilter = ({minPrice, maxPrice, onChange}) => {
    const {t} = useTranslation('messages');
    
    const handleChange = (name, value) => {
        const parts = value.split('_');
        onChange('minPrice', parts[0]);
        onChange('maxPrice', parts[1]);
    }
    
    const [isExpanded, toggleExpand] = useToggleBoolState(false);

    return (
        <div className={'search-filter' + (isExpanded ? ' expanded': '')}>
            <button type="button" className={'search-filter-label' + (isExpanded ? ' expanded': '')} onClick={toggleExpand}>
                <span>{t('price')}{minPrice && maxPrice && ' (1)'}</span>
                <ExpandMoreIcon />
            </button>
            {
                isExpanded && (
                    <RadioFields
                        name="priceFilter"
                        onChange={handleChange}
                        labelValues={labelValues}
                        selectedValue={calcPriceStep(minPrice, maxPrice)}
                    />
                )
            }
        </div>
    )
}