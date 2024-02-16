import React from 'react';
import i18n from '../../../../../entrypoints/i18n';
import { ChevronRightIcon } from '../../../../../UI/Icon/ChevronRightIcon';


export const CategoryLink = ({category, setSelected}) => {
    const handleClick = e => {
        e.preventDefault();
        setSelected(category);
    }
    return (
        <button onClick={handleClick} className="mobile-menu-link">
            <span>{category.name[i18n.language]}</span>
            <ChevronRightIcon />
        </button>
    )
}

