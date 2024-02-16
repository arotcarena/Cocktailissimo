import React, { useRef } from 'react';
import { SearchIcon } from '../Icon/SearchIcon';
import { CloseButton } from '../Button/CloseButton';
import { useTranslation } from 'react-i18next';

export const QFilter = ({children, q, setQ, additionalClass}) => {
    const {t} = useTranslation('messages');

    const handleQChange = e => {
        setQ(e.target.value);
    }

    const handleEmpty = () => {
        setQ('');
        inputRef.current.focus();
    }

    const inputRef = useRef(null);

    return (
        <div className={'q-filter-group' + (additionalClass ? ' '+additionalClass+'-group': '')}>
            <input ref={inputRef} type="text" className={'q-filter-input' + (additionalClass ? ' '+additionalClass: '')} value={q} onChange={handleQChange} placeholder={children} />
            <SearchIcon />
            {
                q !== '' && <CloseButton type="button" onClick={handleEmpty} aria-label={t('empty_input')} title={t('empty_input')} />
            }
        </div>
    )
}