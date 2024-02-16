import React, { useState } from 'react';
import { CloseButton } from '../../../../UI/Button/CloseButton';
import { SuggestList } from '../../../../UI/SuggestList';
import { useFetchQSearch } from '../../../../CustomHook/fetch/useFetchQSearch';
import i18n from '../../../../entrypoints/i18n';
import { AdminItemSuggest } from '../../SelectLinkedItems/AdminItemSuggest';

export const IngredientSuggestedField = ({onSelect, formError}) => {

    const [q, setQ] = useState('');

    const handleChange = e => {
        setQ(e.target.value);
    }

    const [ingredients, resetIngredients, isLoading, error] = useFetchQSearch('/'+i18n.language+'/api/ingredient/qSearch', q, 5);


    return (
        <div className="admin-form-group">
            <div className={'form-group suggest-form-group' + (formError ? ' is-invalid': '')}>
                <label htmlFor="q">Ingrédient</label>
                <input type="text" id="q" className="admin-form-control" placeholder="Rechercher" name="q" value={q} onChange={handleChange} autoFocus={true} />
                {
                    q !== '' && <CloseButton additionalClass="admin-suggestedProducts-input-closer" onClick={() => setQ('')} />
                }
                {
                    ingredients?.length > 0 && (
                        <SuggestList 
                                    additionalClass="admin-suggest-list" 
                                    suggests={ingredients} 
                                    onClose={resetIngredients} 
                                    onSelect={onSelect}
                                    render={(ingredient, selected) => (
                                        <IngredientSuggestItem key={ingredient.id} ingredient={ingredient} q={q} selected={selected} onSelect={onSelect} />
                                    )} 
                        />   
                    )
                }
            </div>
            <div className="suggest-form-info">
                {
                    formError && <div className="form-error">{formError}</div>
                }
                {
                    isLoading && <div className="admin-form-info">Chargement...</div>
                }
            </div>
        </div>
    )
}

const IngredientSuggestItem = ({ingredient, q, onSelect, selected}) => {

    const name = ingredient.name.toUpperCase().split(q.toUpperCase()).join('<strong>'+q.toUpperCase()+'</strong>');

    const handleClick = e => {
        e.preventDefault();
        onSelect(ingredient);
    }

    return (
        <a className={'admin-suggest-item' + (selected ? ' selected': '')} href="#" onClick={handleClick} role="option" aria-selected={selected}>
            <div className="admin-suggest-img" style={{backgroundImage: `url(${ingredient.picture.path})`}}>
            </div>
            <div className="admin-suggest-text">
                <div dangerouslySetInnerHTML={{__html: name}}></div>
            </div>
        </a>
    )
}