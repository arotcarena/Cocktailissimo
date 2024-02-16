import React, { useEffect, useState } from 'react';
import articleCategory from '../../../../../Config/gazette.json';
import { SubCategoryFilter } from '../../../../../UI/Search/SubCategoryFilter';

export const ArticleFilters = ({subCategoryId, filters, setFilterValue}) => {
    
    //pour savoir si on affiche le filtre subCategory
    const [choiceSubCategory, setChoiceSubCategory] = useState(false);
    useEffect(() => {
        //si on est dans article_index
        if(!subCategoryId) {
            setChoiceSubCategory(true);
        }
        //si on est dans article_subCategoryShow on laisse à false
    }, []);
    
    return (
        <form className="search-filters">
            {
                choiceSubCategory && (
                    <SubCategoryFilter parentCategory={articleCategory} subCategoryIds={filters.subCategoryIds} onChange={setFilterValue} />
                )
            }
        </form>
    )
}