import React from 'react';

export const RightArrowBarIcon = ({additionalClass, ...props}) => {

    return (
        <svg className={'icon i-right-arrow-bar' + (additionalClass ? ' '+additionalClass: '')} {...props} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g clipRule="evenodd" fillRule="evenodd">
                <path fill="currentColor" d="m4 16c0-.5523.44772-1 1-1h22c.5523 0 1 .4477 1 1s-.4477 1-1 1h-22c-.55228 0-1-.4477-1-1z"></path>
                <path fill="currentColor" d="m17.2929 6.29289c.3905-.39052 1.0237-.39052 1.4142 0l9 9.00001c.3905.3905.3905 1.0237 0 1.4142l-9 9c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l8.2929-8.2929-8.2929-8.29289c-.3905-.39053-.3905-1.02369 0-1.41422z"></path>
            </g>
        </svg>
    )
}








