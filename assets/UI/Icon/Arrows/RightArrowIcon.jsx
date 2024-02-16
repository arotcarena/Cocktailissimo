import React from 'react';

export const RightArrowIcon = ({additionalClass, ...props}) => {

    return (
        <svg className={'icon i-right-arrow' + (additionalClass ? ' '+additionalClass: '')} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path fill="currentColor" d="M543.846-480.231 353.538-671.308l22.231-22.231 212.539 213.308-212.539 212.539-22.231-22.231 190.308-190.308Z"/>
        </svg>
    )
}
