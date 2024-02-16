import React from 'react';
import chronopost from '/public/img/icons/carriers/chronopost.png';

export const ChronopostIcon = ({additionalClass, ...props}) => {
    return (
        <img className={'icon i-carrier i-chronopost' + (additionalClass ? ' '+additionalClass: '')} {...props} src={chronopost} alt="Chronopost" />
    )
}