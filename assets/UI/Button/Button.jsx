import React from 'react';
import { Loader } from '../Icon/Loader';

export const Button = ({children, onClick, additionalClass, loading, type, ...props}) => {
    const handleClick = e => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
    }
    const handleKeyDown = e => {
        if(e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            onClick();
        }
    }
    return (
        <button className={'button' + (additionalClass ? ' ' + additionalClass: '')} onClick={handleClick} onKeyDown={handleKeyDown} type={type ?? 'button'} {...props}>
        {
            loading ? <Loader />: children
        }
        </button>
    )
}

