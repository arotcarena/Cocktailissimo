import React from 'react';

export const HomeIcon = ({additionalClass, ...props}) => {
    return (
        <svg className={'icon i-home' + (additionalClass ? ' ' + additionalClass: '')} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path fill="currentColor" d="M240-200h156v-234h168v234h156v-360L480-742 240-560v360Zm-28 28v-402l268-203 268 203v402H536v-234H424v234H212Zm268-299Z"/>
        </svg>
    )
}


