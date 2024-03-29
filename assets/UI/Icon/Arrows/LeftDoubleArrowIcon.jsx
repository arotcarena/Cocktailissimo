import React from 'react';

export const LeftDoubleArrowIcon = ({additionalClass, ...props}) => {

    return (
        <svg className={'icon i-left-double-arrow' + (additionalClass ? ' '+additionalClass: '')} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path fill="currentColor" d="M456.077-267.923 243.769-480.231l212.308-212.308 22 21.231L287-480.231l191.077 190.308-22 22Zm239.154 0L482.923-480.231l212.308-212.308 21.231 21.231-190.308 191.077 190.308 190.308-21.231 22Z"/>
        </svg>
    )
}