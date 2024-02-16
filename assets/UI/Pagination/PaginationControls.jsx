import React from 'react';
import { LeftDoubleArrowIcon } from '../Icon/Arrows/LeftDoubleArrowIcon';
import { LeftArrowIcon } from '../Icon/Arrows/LeftArrowIcon';
import { RightArrowIcon } from '../Icon/Arrows/RightArrowIcon';
import { RightDoubleArrowIcon } from '../Icon/Arrows/RightDoubleArrowIcon';
import { useTranslation } from 'react-i18next';

export const PaginationControls = ({isLoading, currentPage, maxPage, pageChange}) => {
    const {t} = useTranslation('messages');

    const handleLeftEndClick = e => {
        e.preventDefault();
        if(isLoading) {
            return;
        }
        pageChange(1);
    }
    const handleLeftClick = e => {
        e.preventDefault();
        if(isLoading) {
            return;
        }
        pageChange(parseInt(currentPage) - 1)
    }
    const handleRightClick = e => {
        e.preventDefault();
        if(isLoading) {
            return;
        }
        pageChange(parseInt(currentPage) + 1);
    }
    const handleRightEndClick = e => {
        e.preventDefault();
        if(isLoading) {
            return;
        }
        pageChange(maxPage);
    }
    const handleNumberClick = number => {
        if(isLoading) {
            return;
        }
        pageChange(number);
    }


    let leftNumbers = [];
    for (let index = 2; index >= 1; index--) {
        const number = parseInt(currentPage) - index;
        if(number >= 1) {
            leftNumbers.push(number);
        }
    }
    let rightNumbers = [];
    for (let index = 1; index <= 2; index++) {
        const number = parseInt(currentPage) + index;
        if(number <= maxPage) {
            rightNumbers.push(number);
        }
    }


    const leftArrowsDisabled = parseInt(currentPage) <= 1;
    const rightArrowsDisabled = parseInt(currentPage) >= parseInt(maxPage);


    return (
        <div className="pagination-controls-wrapper">
            <div className={'pagination-controls' + (isLoading ? ' loading': '')}>
                <button 
                    className={'pagination-link pagination-arrow' + (leftArrowsDisabled ? ' disabled': '')} 
                    onClick={handleLeftEndClick} 
                    disabled={isLoading || leftArrowsDisabled}
                    title={t('pagination.first')}
                    aria-label={t('pagination.first')}
                    >
                    <LeftDoubleArrowIcon />
                </button>
                <button 
                    className={'pagination-link pagination-arrow' + (leftArrowsDisabled ? ' disabled': '')} 
                    onClick={handleLeftClick} disabled={isLoading || leftArrowsDisabled}
                    title={t('pagination.prev')}
                    aria-label={t('pagination.prev')}
                    >
                    <LeftArrowIcon />
                </button>
                {
                    leftNumbers.map(number => <PaginationNumber key={number} number={number} currentPage={currentPage} onClick={handleNumberClick} disabled={isLoading} />)
                }
                <span className="pagination-link pagination-number active">
                    {currentPage}
                </span>
                {
                    rightNumbers.map(number => <PaginationNumber key={number} number={number} currentPage={currentPage} onClick={handleNumberClick} disabled={isLoading} />)
                }
                <button 
                    className={'pagination-link pagination-arrow' + (rightArrowsDisabled ? ' disabled': '')} 
                    onClick={handleRightClick} disabled={isLoading || rightArrowsDisabled}
                    title={t('pagination.next')}
                    aria-label={t('pagination.next')}
                    >
                    <RightArrowIcon />
                </button>
                <button 
                    className={'pagination-link pagination-arrow' + (rightArrowsDisabled ? ' disabled': '')} 
                    onClick={handleRightEndClick} disabled={isLoading || rightArrowsDisabled}
                    title={t('pagination.last')}
                    aria-label={t('pagination.last')}
                    >
                    <RightDoubleArrowIcon />
                </button>
            </div>
        </div>
    )
}


const PaginationNumber = ({number, currentPage, onClick, disabled}) => {
    const handleClick = e => {
        e.preventDefault();
        onClick(number);
    }

    const isNear = (parseInt(currentPage) - number === 1) || number - parseInt(currentPage) === 1;

    return (
        <button className={'pagination-link pagination-number' + (isNear ? ' near': '')} onClick={handleClick} disabled={disabled}>
            {number}
        </button>
    )
}