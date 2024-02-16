import React from 'react';
import { ExpandMoreIcon } from '../../../../../UI/Icon/ExpandMoreIcon';
import { useToggleBoolState } from '../../../../../CustomHook/state/useToggleState';
import { EntityTypeSuggested } from '../../../../../UI/Form/EntityTypeSuggested';
import { useTranslation } from 'react-i18next';

export const IngredientFilter = ({ingredientFilters, setIngredientFilters}) => {
    const {t, i18n} = useTranslation('messages');
   
    const [isExpanded, toggleExpand] = useToggleBoolState();

    return (
        <div className={'search-filter ingredient-filter' + (isExpanded ? ' expanded': '')}>
            <button type="button" className={'search-filter-label' + (isExpanded ? ' expanded': '')} onClick={toggleExpand}>
                <span>{t('ingredients')} {ingredientFilters.length > 0 && '(1)'}</span>
                <ExpandMoreIcon />
            </button>
            {
                isExpanded && (
                    <EntityTypeSuggested
                        placeholder={t('filter_by_ingredient')}
                        endpoint={'/'+i18n.language+'/api/ingredient/qSearch'}
                        values={ingredientFilters}
                        setValues={setIngredientFilters}
                        render={ingredient => (
                            <IngredientItem key={ingredient.id} ingredient={ingredient} />
                        )}
                    />
                )
            }
        </div>
    )
}


const IngredientItem = ({ingredient}) => {
    return (
        <div className="ingredient-filter-item">
            <img className="ingredient-filter-img" src={ingredient.picture.path} alt={ingredient.picture.alt} />
            <span className="ingredient-filter-title">{ingredient.name}</span>
        </div>
    )
}