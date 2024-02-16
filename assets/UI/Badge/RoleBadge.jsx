import { t } from 'i18next';
import React from 'react';

const resolveLabel = roles => {
    let label = null;
    if(roles.includes('ROLE_ADMIN')) {
        label = 'admin';
    } else if(roles.includes('ROLE_VENDOR')) {
        label = t('vendor', {ns: 'messages'});
    } else if(roles.includes('ROLE_PRO')) {
        label = t('pro', {ns: 'messages'});
    }
    return label;
}

export const RoleBadge = ({roles, additionalClass, align = 'left'}) => {

    const label = resolveLabel(roles);

    if(label) {
        return (
            <div className={align + '-wrapper' + (additionalClass ? ' '+additionalClass: '')}>
                <div className="text-badge bg-bordeaux-flash">{label}</div>
            </div>
        )
    }
}


export const FlyRoleBadge = ({roles, additionalClass}) => {

    const label = resolveLabel(roles);

    if(label) {
        return (
            <div className={'text-badge bg-bordeaux-flash' + (additionalClass ? ' '+additionalClass: '')}>{label}</div>
        )
    }
}