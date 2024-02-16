import React from 'react';

export const UpArrowIcon = ({additionalClass, ...props}) => {

    return (
        <svg className={'icon i-up-arrow' + (additionalClass ? ' '+additionalClass: '')} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path fill="currentColor" d="M480-567.846 289.923-377.769 267.692-400 480-612.308 692.308-400l-22.231 22.231L480-567.846Z"/>
        </svg>
    )
}
