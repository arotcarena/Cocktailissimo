import React from 'react';

export const PackagingButton = ({packaging, onSelect, isSelected}) => {
    const handleClick = e => {
        e.preventDefault();
        if(isSelected) {
            return;
        }
        onSelect(packaging);
    };

    return (
        <button type="button" onClick={handleClick} className={'packaging-card' + (isSelected ? ' active': '')}>
            {packaging.label ?? t('unit', {ns: 'messages'})}
        </button>
    )
}