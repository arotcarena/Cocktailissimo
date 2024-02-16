import React from 'react';
import colissimo from '/public/img/icons/carriers/colissimo.jpg';

export const ColissimoIcon = ({additionalClass, ...props}) => {
    return (
        <img className={'icon i-carrier i-colissimo' + (additionalClass ? ' '+additionalClass: '')} {...props} src={colissimo} alt="Colissimo" />
    )
}