import React from 'react';

export const Icon = ({d, additionalClass, ...props}) => {
    return (
        <svg className={'icon' + (additionalClass ? ' ' + additionalClass: '')} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
            <path fill="currentColor" stroke="currentColor" d={d} />
        </svg>
    )
}





