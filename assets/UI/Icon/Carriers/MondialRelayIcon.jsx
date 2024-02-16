import React from 'react';
import mondialrelay from '/public/img/icons/carriers/mondialrelay.png';

export const MondialRelayIcon = ({additionalClass, ...props}) => {
    return (
        <img className={'icon i-carrier i-mondialrelay' + (additionalClass ? ' '+additionalClass: '')} {...props} src={mondialrelay} alt="Mondial Relay" />
    )
}