import React from 'react';
import { RoleBadge } from '../../../../UI/Badge/RoleBadge';

export const HeaderBrand = ({company}) => {
    return (
        <div className="vendor-header-brand">
            {
                company.logo && <img className="vendor-header-brand-img" src={company.logo.path} alt={company.logo.alt} />
            }
            <div className="vendor-header-brand-text">
                <div className="vendor-header-brand-title">{company.usualName}</div>
                <RoleBadge roles={['ROLE_VENDOR']} />
            </div>
        </div>
    )
}