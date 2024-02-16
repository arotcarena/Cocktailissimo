import React, { useEffect, useState } from 'react';
import { RecipeCard } from './RecipeCard';
import { useSearchIndex } from '../../../../CustomHook/search/useSearchIndex';
import { SearchFiltersControls } from '../../../../UI/Search/SearchFiltersControls';
import { RecipeFilters } from './RecipeFilters';
import { SearchResults } from '../../../../UI/Search/SearchResults';
import { scrollTop } from '../../../../functions/scroll';
import { useTranslation } from 'react-i18next';

export const RecipeIndex = ({isOpen = true, subCategoryId = null, q = '', setCount}) => {
    const {t, i18n} = useTranslation('configs');

    const subCategoryIds = subCategoryId === null ? []: [subCategoryId];

    const initialFilters = {
        subCategoryIds: subCategoryIds,
        ingredientIds: [],
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
    } = useSearchIndex('/'+ i18n.language +'/api/recipe/index', initialFilters, q, scrollTop);


    const sortChoices = {
        ['A - Z']: 'alphabet_ASC',
        ['Z - A']: 'alphabet_DESC',
        [t('sort.createdAt_DESC_f')]: 'createdAt_DESC',
        [t('sort.createdAt_ASC_f')]: 'createdAt_ASC'
    };


    // pour éviter de devoir charger les ingrédients filtres à chaque fois qu'on ouvre les filtres 
    // on crée un state qui contient les ingrédients complets et à chaque changement on met à jour filters.ingredientIds
    const [ingredientFilters, setIngredientFilters] = useState([]);
    useEffect(() => {
            setFilterValue('ingredientIds', ingredientFilters.map(i => i.id))
    }, [ingredientFilters]);
    // On surcharger la méthode handleReset avec le reset de ingredientFilters
    const resetAll = () => {
        setIngredientFilters([]);
        handleReset();
    }

    //pour envoyer au parent pour afficher sur le bouton Product 
    useEffect(() => {
        if(result && setCount) {
            setCount(result.count);
        }
    }, [result, setCount]);

    if(!isOpen) {
        return '';
    }

    return (
        <div className="product-index">
            <div className="product-index-header">
                <SearchFiltersControls 
                    countFilters={countFilters}
                    countResults={result?.count}
                    onReset={resetAll}
                    sortBy={filters.sortBy} 
                    setSortBy={setSortBy} 
                    sortChoices={sortChoices}
                    >
                    <RecipeFilters 
                        subCategoryId={subCategoryId} 
                        filters={filters} 
                        setFilterValue={setFilterValue} 
                        ingredientFilters={ingredientFilters} 
                        setIngredientFilters={setIngredientFilters} 
                    />
                </SearchFiltersControls> 
            </div>
            <SearchResults 
                isLoading={isLoading}
                result={result}
                pageChange={handlePageChange}
                >
                {
                    result && result.items.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
                }
            </SearchResults>
        </div>
    )
}






