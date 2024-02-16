import React, { useEffect, useState } from 'react';
import { SearchFiltersControls } from '../../../../../UI/Search/SearchFiltersControls';
import { SearchResults } from '../../../../../UI/Search/SearchResults';
import { useSearchIndex } from '../../../../../CustomHook/search/useSearchIndex';
import i18n from '../../../../../entrypoints/i18n';
import { scrollTop } from '../../../../../functions/scroll';
import { VendorProductFilters } from './VendorProductFilters';
import { VendorProductCard } from './VendorProductCard';
import { QFilter } from '../../../../../UI/Search/QFilter';
import { useTranslation } from 'react-i18next';





export const useVendorSpaceProduct = () => {

    const initialFilters = {
        categoryIds: [],
        subCategoryIds: [],
        minPrice: null,
        maxPrice: null,
        minStock: null,
        maxStock: null,
        page: 1,
        limit: 20,
        sortBy: '',
        q: ''
    }

    const {
        filters, 
        setFilterValue, 
        countFilters, 
        result, 
        isLoading, 
        handleReset, 
        handlePageChange, 
        setSortBy
    } = useSearchIndex('/'+ i18n.language +'/api/vendorDashboard/product/index', initialFilters, '', scrollTop); 

    const [q, setQ] = useState('');
    useEffect(() => {
        setFilterValue('q', q);
    }, [q]);


    return {filters, setFilterValue, countFilters, result, isLoading, handleReset, handlePageChange, setSortBy, q, setQ}
}




export const VendorSpaceProduct = ({filters, setFilterValue, countFilters, result, isLoading, handleReset, handlePageChange, setSortBy, q, setQ}) => {
    const {t} = useTranslation('configs');

    const sortChoices = {
        ['A - Z']: 'alphabet_ASC',
        ['Z - A']: 'alphabet_DESC',
        [t('sort.stock_ASC')]: 'stock_ASC',
        [t('sort.stock_DESC')]: 'stock_DESC',
        [t('sort.price_ASC')]: 'price_ASC',
        [t('sort.price_DESC')]: 'price_DESC',
        [t('sort.note_DESC')]: 'note_DESC'
    };

    return (
        <div className="product-index vendorDashboard-product-index">
            <div className="product-index-header">
                <QFilter q={q} setQ={setQ} additionalClass="search-index-input">{t('search_a_product', {ns: 'messages'})}</QFilter>
                <SearchFiltersControls 
                    countFilters={countFilters}
                    countResults={result?.count}
                    onReset={handleReset}
                    sortBy={filters.sortBy} 
                    setSortBy={setSortBy} 
                    sortChoices={sortChoices}
                    >
                        <VendorProductFilters filters={filters} setFilterValue={setFilterValue} />
                </SearchFiltersControls> 
            </div>
            <SearchResults 
                isLoading={isLoading}
                result={result}
                pageChange={handlePageChange}
                >
                {
                    result && result.items.map(product => <VendorProductCard key={product.id} product={product} />)
                }
            </SearchResults>
        </div>
    )
}