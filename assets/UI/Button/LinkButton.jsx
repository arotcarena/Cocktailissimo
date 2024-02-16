import React, { useState } from 'react';
import { Loader } from '../Icon/Loader';

export const LinkButton = ({children, href, additionalClass, onClick, ...props}) => {
    
    const [isLoading, setLoading] = useState(false);
    const handleClick = e => {
        if(isLoading) {
            e.preventDefault();
            return;
        }
        setLoading(true);
        onClick();
    }
    
    return (
        <a href={href} onClick={handleClick} disabled={isLoading} className={'form-button' + (additionalClass ? ' '+additionalClass: '') + (isLoading ? ' disabled': '')} {...props}>
            {
                isLoading ? <Loader /> : <span>{children}</span>
            }
        </a>
    )
}