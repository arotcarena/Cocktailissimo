import React from 'react';

export const MinusIcon = ({additionalClass, ...props}) => {
    return (
       
      <svg className={'icon i-minus' + (additionalClass ? ' ' + additionalClass: '')} {...props} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 469.333 469.333" enableBackground="new 0 0 469.333 469.333">
        <g>
          <g>
            <path fill="currentColor" d="M458.667,224h-448C4.779,224,0,228.779,0,234.667s4.779,10.667,10.667,10.667h448c5.888,0,10.667-4.779,10.667-10.667
              S464.555,224,458.667,224z"></path>
          </g>
        </g>
      </svg>
    )
}