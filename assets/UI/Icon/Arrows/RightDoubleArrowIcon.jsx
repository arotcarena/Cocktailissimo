import React from 'react';

export const RightDoubleArrowIcon = ({additionalClass, ...props}) => {

    return (
        <svg className={'icon i-right-double-arrow' + (additionalClass ? ' '+additionalClass: '')} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path fill="currentColor" d="M434.077-480.231 243.769-671.308l22-21.231 212.308 212.308-212.308 212.308-22-22 190.308-190.308Zm239.154 0L482.923-671.308l21.231-21.231 212.308 212.308-212.308 212.308-21.231-22 190.308-190.308Z"/>
        </svg>
    )
}
