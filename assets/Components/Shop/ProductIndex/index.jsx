import React, { useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { SearchFiltersControls } from '../../../UI/Search/SearchFiltersControls';
import i18n from '../../../entrypoints/i18n';
import { ProductFilters } from './ProductFilters';
import { SearchResults } from '../../../UI/Search/SearchResults';
import { useSearchIndex } from '../../../CustomHook/search/useSearchIndex';
import { scrollTop } from '../../../functions/scroll';
import { t } from 'i18next';



export const ProductIndex = ({isOpen = true, categoryId = null, subCategoryId = null, q = '', setCount}) => {

    const categoryIds = categoryId === null ? []: [categoryId];
    const subCategoryIds = subCategoryId === null ? []: [subCategoryId];

    const initialFilters = {
        categoryIds: categoryIds,
        subCategoryIds: subCategoryIds,
        minPrice: null,
        maxPrice: null,
        minStock: 1,
        page: 1,
        limit: 20,
        sortBy: '',
        q: q
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
    } = useSearchIndex('/'+ i18n.language +'/api/product/index', initialFilters, q, scrollTop);

    const sortChoices = {
        ['A - Z']: 'alphabet_ASC',
        ['Z - A']: 'alphabet_DESC',
        [t('sort.price_ASC', {ns: 'configs'})]: 'price_ASC',
        [t('sort.price_DESC', {ns: 'configs'})]: 'price_DESC',
        [t('sort.note_DESC', {ns: 'configs'})]: 'note_DESC'
    };

    //pour envoyer au parent pour afficher sur le bouton Product 
    useEffect(() => {
        if(result && setCount) {
            setCount(result.count);
        }
    }, [result]);

    if(!isOpen) {
        return '';
    }

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
                        <ProductFilters categoryId={categoryId} subCategoryId={subCategoryId} filters={filters} setFilterValue={setFilterValue} />
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








