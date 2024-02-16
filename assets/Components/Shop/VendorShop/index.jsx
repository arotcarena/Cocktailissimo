import React from 'react';
import i18n from '../../../entrypoints/i18n';
import { SearchFiltersControls } from '../../../UI/Search/SearchFiltersControls';
import { SearchResults } from '../../../UI/Search/SearchResults';
import { ProductFilters } from '../ProductIndex/ProductFilters';
import { ProductCard } from '../ProductIndex/ProductCard';
import { useSearchIndex } from '../../../CustomHook/search/useSearchIndex';
import { scrollTop } from '../../../functions/scroll';
import { t } from 'i18next';



export const VendorShop = ({vendorId}) => {

    const initialFilters = {
        vendorId: vendorId,
        categoryIds: [],
        subCategoryIds: [],
        minPrice: null,
        maxPrice: null,
        minStock: 1,
        page: 1,
        limit: 20,
        sortBy: '',
    };

    const {
        filters, 
        setFilterValue, 
        countFilters, 
        result, 
        isLoading,
        handleReset, 
        handlePageChange,
        setSortBy
    } = useSearchIndex('/'+ i18n.language +'/api/product/index', initialFilters, '', scrollTop);

    const sortChoices = {
        ['A - Z']: 'alphabet_ASC',
        ['Z - A']: 'alphabet_DESC',
        [t('sort.price_ASC', {ns: 'configs'})]: 'price_ASC',
        [t('sort.price_DESC', {ns: 'configs'})]: 'price_DESC',
        [t('sort.note_DESC', {ns: 'configs'})]: 'note_DESC'
    };


    return (
        <div className="product-index">
            <div className="product-index-header">
                <SearchFiltersControls 
                    countFilters={countFilters}
                    countResults={result?.count}
                    onReset={handleReset}
                    sortBy={filters.sortBy} 
                    setSortBy={setSortBy} 
                    sortChoices={sortChoices}
                    >
                        <ProductFilters filters={filters} setFilterValue={setFilterValue} />
                </SearchFiltersControls> 
            </div>
            <SearchResults 
                isLoading={isLoading}
                result={result}
                pageChange={handlePageChange}
                >
                {
                    result && result.items.map(product => <ProductCard key={product.id} product={product} />)
                }
            </SearchResults>
        </div>
    )
}







