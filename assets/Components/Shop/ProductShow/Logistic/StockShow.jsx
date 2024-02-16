import React from 'react';
import { ChartDownIcon } from '../../../../UI/Icon/ChartDownIcon';
import { CheckIcon } from '../../../../UI/Icon/CheckIcon';
import { DangerIcon } from '../../../../UI/Icon/DangerIcon';
import { useTranslation } from 'react-i18next';

export const StockShow = ({stock}) => {
    const {t} = useTranslation('messages');

    if(stock > 5) {
        return (
            <div className="stock">
                <CheckIcon />
                <span>{t('in_stock')}</span>
            </div>
        )
    }

    if(stock < 1) {
        return (
            <div className="stock danger">
                <DangerIcon />
                <span>{t('no_stock')}</span>
            </div>
        )
    }

    return (
        <div className="stock down">
            <ChartDownIcon />
            <span>{t('count.stock', {count: stock})}</span>
        </div>
    )
}