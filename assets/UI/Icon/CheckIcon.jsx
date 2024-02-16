import React from 'react';

export const CheckIcon = ({additionalClass, ...props}) => {
    return (
        <svg className={'icon check-icon' + (additionalClass ? ' '+additionalClass: '')} {...props} enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path fill="currentColor" d="m222.15 427.05c-.06 0-.13 0-.19 0-2.48-.05-4.82-1.11-6.5-2.93l-171.46-186.44c-2.94-3.2-3.21-8.02-.64-11.53 2.57-3.5 7.25-4.7 11.19-2.86l156.93 73.48c1.32.62 2.88.32 3.89-.73l239.38-250.19c3.24-3.39 8.54-3.76 12.22-.84s4.53 8.16 1.96 12.09l-238.12 364.78c-.34.53-.74 1.01-1.18 1.46l-1.05 1.05c-1.71 1.7-4.03 2.66-6.43 2.66z"></path>
            </g>    
        </svg>
    )
}