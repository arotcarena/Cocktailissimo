import React from 'react';
import { RadioFields } from '../../../../../../UI/Form/RadioFields';
import { ExpandMoreIcon } from '../../../../../../UI/Icon/ExpandMoreIcon';
import { useToggleBoolState } from '../../../../../../CustomHook/state/useToggleState';
import { useTranslation } from 'react-i18next';


const labelValues = {
    ['0']: 'null_1',
    ['1 - 5']: '1_5',
    ['5 - 10']: '5_10',
    ['10 - 20']: '10_20',
    ['20 - 50']: '20_50',
    ['50 - 200']: '50_200',
    ['200 - 500']: '200_1000',
    ['> 500']: '20000_null',
}
const calcPriceStep = (minStock, maxStock) => {
    const min = minStock ?? 'null';
    const max = maxStock ?? 'null';

    return min + '_' + max;
}

export const StockFilter = ({minStock, maxStock, onChange}) => {
    const {t} = useTranslation('messages');
    
    const handleChange = (name, value) => {
        const parts = value.split('_');
        onChange('minStock', parts[0]);
        onChange('maxStock', parts[1]);
    }
    
    const [isExpanded, toggleExpand] = useToggleBoolState();

    return (
        <div className={'search-filter' + (isExpanded ? ' expanded': '')}>
            <button type="button" className={'search-filter-label' + (isExpanded ? ' expanded': '')} onClick={toggleExpand}>
                <span>{t('stock')} {minStock && maxStock && '(1)'}</span>
                <ExpandMoreIcon />
            </button>
            {
                isExpanded && (
                    <RadioFields
                        name="stockFilter"
                        onChange={handleChange}
                        labelValues={labelValues}
                        selectedValue={calcPriceStep(minStock, maxStock)}
                    />
                )
            }
        </div>
    )
}