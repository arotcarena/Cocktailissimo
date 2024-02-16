import React, { useEffect, useState } from 'react';
import { CategoryFilter } from './CategoryFilter';
import { PriceFilter } from './PriceFilter';
import categories from '../../../../Config/categories.json';
import { SubCategoryFilter } from '../../../../UI/Search/SubCategoryFilter';

export const ProductFilters = ({categoryId, subCategoryId, filters, setFilterValue}) => {
    
    //pour savoir si on affiche les filtres category et subCategory
    const [choiceCategory, setChoiceCategory] = useState(false);
    const [choiceSubCategory, setChoiceSubCategory] = useState(false);
    useEffect(() => {
        //si on est dans search_index
        if(!categoryId) {
            setChoiceCategory(true);
        } 
        //si on est dans category_show
        if(categoryId && !subCategoryId) {
            setChoiceSubCategory(true);
        }
        //si on est dans subCategory_show on laisse les deux à false
    }, []);
    
    
    const category = categories.find(category => category.id === parseInt(categoryId));

    return (
        <form className="search-filters">
            {
                choiceCategory && (
                    <CategoryFilter categoryIds={filters.categoryIds} onChange={setFilterValue} />
                )
            }
            {
                choiceSubCategory && (
                    <SubCategoryFilter parentCategory={category} subCategoryIds={filters.subCategoryIds} onChange={setFilterValue} />
                )
            }
            <PriceFilter minPrice={filters.minPrice} maxPrice={filters.maxPrice} onChange={setFilterValue} />
        </form>
    )
}