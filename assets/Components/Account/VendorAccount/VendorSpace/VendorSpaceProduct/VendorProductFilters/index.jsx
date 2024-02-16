import React from 'react';
import { StockFilter } from './StockFilter';
import { CategoryFilter } from '../../../../../Shop/ProductIndex/ProductFilters/CategoryFilter';
import { SubCategoryFilter } from '../../../../../../UI/Search/SubCategoryFilter';
import categories from '../../../../../../Config/categories.json';
import { PriceFilter } from '../../../../../Shop/ProductIndex/ProductFilters/PriceFilter';

export const VendorProductFilters = ({filters, setFilterValue}) => {
    
    // const category = categories.find(category => category.id === parseInt(categoryId));

    return (
        <form className="search-filters">
            <CategoryFilter categoryIds={filters.categoryIds} onChange={setFilterValue} />
            {
                // <SubCategoryFilter parentCategory={category} subCategoryIds={filters.subCategoryIds} onChange={setFilterValue} />
            }
            <PriceFilter minPrice={filters.minPrice} maxPrice={filters.maxPrice} onChange={setFilterValue} />
            <StockFilter minStock={filters.minStock} maxStock={filters.maxStock} onChange={setFilterValue} />
        </form>
    )
}