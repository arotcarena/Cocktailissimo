import React from 'react';

export const CartIcon = ({additionalClass, ...props}) => {
    return (
        <svg className={'icon i-cart' + (additionalClass ? ' ' + additionalClass: '')} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <path fill="currentColor" d="m46.77 22.29a1 1 0 0 0 -1-.87h-5.51v-2a8.26 8.26 0 0 0 -16.52 0v2h-5.52a1 1 0 0 0 -1 .87l-3.71 28.14a1 1 0 0 0 .26.81c.42.45.88.91 1.38 1.36a1 1 0 0 0 .67.26h32.36a1 1 0 0 0 .67-.26c.49-.45 1-.91 1.38-1.36a1 1 0 0 0 .26-.81zm-21-2.89a6.26 6.26 0 0 1 12.52 0v2h-12.55zm22 31.46h-31.56l-.66-.64 3.54-26.8h25.81l3.54 26.8z"></path>
        </svg>
    )
}


