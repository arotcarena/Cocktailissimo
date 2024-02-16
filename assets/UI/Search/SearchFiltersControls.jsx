import React from 'react';
import '../../styles/Shop/ProductIndex/filters.css';
import { FilterIcon } from '../Icon/FilterIcon';
import { Modal } from '../Container/Modal';
import { Loader } from '../Icon/Loader';
import { useOpenState } from '../../CustomHook/state/useOpenState';
import { Sorter } from './Sorter';
import { useTranslation } from 'react-i18next';


export const SearchFiltersControls = ({children, sortBy, setSortBy, sortChoices, countFilters, countResults, onReset, hideFilters = false}) => {
    const {t} = useTranslation('messages');

    const [filterMenuIsOpen, openFilterMenu, closeFilterMenu] = useOpenState(false);

    return (
        <div className="search-filters-controls">
            <Sorter 
                sortBy={sortBy} 
                setSortBy={setSortBy}
                choices={sortChoices}
            />
            <div className="search-filters-mobile search-filters-control">
                <button type="button" className={'filters-opener search-filters-control-button' + (hideFilters ? ' disabled': '')} onClick={openFilterMenu} disabled={hideFilters}>
                    <FilterIcon />
                    <span>{t('filters')}{ countFilters > 0 && ' ('+countFilters+')' }</span>
                </button>
                <Modal isOpen={filterMenuIsOpen} close={closeFilterMenu} additionalClass="right search-filters-menu side-menu">
                    <div className="side-menu-header search-filters-side-menu-header">
                        {t('filters')}{ countFilters > 0 && ' ('+countFilters+')' }
                    </div>
                    <div className="search-filters-side-menu-body">
                        { children }
                    </div>
                    <div className="search-filters-side-menu-footer">
                        {
                            countFilters > 0 && (
                                <div className="search-filters-side-menu-footer-top">
                                    <button type="button" onClick={onReset} className="search-filters-link-button">{t('empty_all_filters')}</button>
                                </div>
                            )
                        }
                        <div className="search-filters-side-menu-footer-bottom">
                            {
                                (countResults > 0 || countResults === 0) && <span>{t('count.results', {count: countResults})}</span>
                            }
                            {
                                (!countResults && countResults !== 0) && <Loader />
                            }
                            <button type="button" onClick={closeFilterMenu} className="form-button bordeaux search-filters-side-menu-footer-button">
                                {t('apply')}
                            </button>
                        </div>
                    </div>
                </Modal>
            </div> 
            {
                !hideFilters && (
                    <div className="search-filters-desktop">
                        <div className="search-filters-desktop-title">
                            {t('filters')}{ countFilters > 0 && ' ('+countFilters+')' }
                        </div>
                        { children }
                        {
                            countFilters > 0 && (
                                <div className="search-filter">
                                    <button type="button" onClick={onReset} className="search-filters-link-button">{t('empty_all_filters')}</button>
                                </div>
                            )
                        }
                    </div>
                )
            } 
        </div>
    )
}