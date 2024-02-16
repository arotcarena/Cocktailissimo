import React, { useEffect, useState } from 'react';
import { IngredientFilter } from './IngredientFilter';
import recipeCategory from '../../../../../Config/recipes.json';
import { SubCategoryFilter } from '../../../../../UI/Search/SubCategoryFilter';

export const RecipeFilters = ({subCategoryId, filters, setFilterValue, ingredientFilters, setIngredientFilters}) => {
    
    //pour savoir si on affiche le filtre subCategory
    const [choiceSubCategory, setChoiceSubCategory] = useState(false);
    useEffect(() => {
        //si on est dans recipe_index
        if(!subCategoryId) {
            setChoiceSubCategory(true);
        }
        //si on est dans recipe_subCategoryShow on laisse à false
    }, []);
    
    return (
        <form className="search-filters">
            {
                choiceSubCategory && (
                    <SubCategoryFilter parentCategory={recipeCategory} subCategoryIds={filters.subCategoryIds} onChange={setFilterValue} />
                )
            }
            <IngredientFilter 
                onChange={setFilterValue} 
                ingredientFilters={ingredientFilters} 
                setIngredientFilters={setIngredientFilters} 
            />
        </form>
    )
}