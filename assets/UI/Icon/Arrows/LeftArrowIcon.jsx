import React from 'react';

export const LeftArrowIcon = ({additionalClass, ...props}) => {

    return (
        <svg className={'icon i-left-arrow' + (additionalClass ? ' '+additionalClass: '')} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
          <path fill="currentColor" d="M560.231-267.692 347.692-480.231l212.539-213.308 22.231 22.231-190.308 191.077 190.308 190.308-22.231 22.231Z"/>
        </svg>
    )
}