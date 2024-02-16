import React, { useState } from 'react';
import { useFetchQSearch } from '../../../CustomHook/fetch/useFetchQSearch';
import { AdminItemSuggest } from '../../../Components/Admin/SelectLinkedItems/AdminItemSuggest';
import { SuggestList } from '../../SuggestList';
import { CloseButton } from '../../Button/CloseButton';

export const StandardItemSelector = ({searchEndpoint, onSelect}) => {

    const [q, setQ] = useState('');
    const handleChange = e => {
        setQ(e.target.value);
    }
    const [result, resetItems, isLoading, error] = useFetchQSearch(searchEndpoint, q, 5);

    const handleSelect = item => {
        resetItems();
        onSelect(item);
    }

    return (
        <>
            <div className="admin-suggest-wrapper">
                <input type="text" className="admin-form-control" placeholder="Rechercher" name="q" value={q} onChange={handleChange} />
                {
                    q !== '' && <CloseButton additionalClass="admin-suggestedProducts-input-closer" onClick={() => setQ('')} />
                }
                {
                    result?.items.length > 0 && (
                        <SuggestList 
                            additionalClass="admin-suggest-list" 
                            suggests={result.items} 
                            onClose={resetItems} 
                            onSelect={handleSelect}
                            render={(item, selected) => <AdminItemSuggest key={item.id} item={item} q={q} selected={selected} onSelect={handleSelect} />} 
                        />   
                    )
                }
            </div>
            {
                isLoading && <div className="admin-form-info">Chargement...</div>
            }
        </>
    )
}