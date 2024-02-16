import React, { useRef, useState } from 'react';
import { useFetchQSearch } from '../../CustomHook/fetch/useFetchQSearch';
import { Loader } from '../Icon/Loader';
import { SuggestList } from '../SuggestList';
import { CloseButton } from '../Button/CloseButton';
import { TrashButton } from '../Button/TrashButton';
import { t } from 'i18next';



export const EntityTypeSuggested = ({endpoint, values = [], setValues, render, placeholder}) => {

    const [q, setQ] = useState('');
    const handleQChange = e => {
        setQ(e.target.value);
    };
    const handleEmpty = () => {
        setQ('');
        resetSuggestedItems();
        inputRef.current.focus();
    }

    const [suggestedItems, resetSuggestedItems, suggestIsLoading, _] = useFetchQSearch(endpoint, q, 10);
    const [error, setError] = useState(null);
    const [timer, setTimer] = useState(null);

    const handleSelect = item => {

        if(values.find(value => value.id === item.id)) {
            setError(t('error.already_selected', {ns: 'messages'}));
            if(timer) {
                clearTimeout(timer);
            }
            setTimer(
                setTimeout(() => {
                    setError(null);
                }, 2000)
            );
            handleEmpty();
            return;
        }

        setValues(items => ([
            ...items,
            item
        ]));
        handleEmpty();
    }
    const removeItem = item => {
        setValues(items => (
            items.filter(i => i.id !== item.id)
        ));
    }

    const inputRef = useRef(null);

    return (
        <div className="entity-type-suggested">
            {
                values && (
                    <ul>
                        {
                            values.map(item => (
                                <Item key={item.id} item={item} removeItem={removeItem} render={render} />
                            ))
                        }
                    </ul>
                )
            }
            <div className="form-group">
                <input 
                    ref={inputRef}
                    className="entity-suggested-input" 
                    type="text" 
                    name="q" 
                    value={q} 
                    onChange={handleQChange} 
                    placeholder={placeholder ?? ''} 
                    autoFocus={true} 
                />
                {
                    suggestIsLoading && <Loader />
                }
                {
                    !suggestIsLoading && q.length > 0 && <CloseButton onClick={handleEmpty} />
                }
                {
                    error && <div className="form-error">{error}</div>
                }
                {
                    suggestedItems && (
                        <SuggestList 
                            suggests={suggestedItems}
                            onSelect={handleSelect}
                            onClose={resetSuggestedItems}
                            render={(item, isSelected) => (
                                <SuggestItem key={item.id} item={item} isSelected={isSelected} onSelect={handleSelect} render={render} />
                            )}
                        />
                    )
                }
            </div>
        </div>
    )

}

const SuggestItem = ({item, isSelected, onSelect, render}) => {

    const handleClick = e => {
        e.preventDefault();
        onSelect(item);
    }

    return (
        <li onClick={handleClick} className={'suggest-item' + (isSelected ? ' selected': '')}>
            {render(item)}
        </li>
    )
}


const Item = ({item, removeItem, render}) => {

    const handleClick = () => {
        removeItem(item)
    }

    return (
        <li className="show-item">
            <TrashButton onClick={handleClick} />
            {render(item)}
        </li>
    )
}
