import React from 'react';

export const AdminShowCardRow = ({value, label, lang = null}) => {
    return (
        <div className={'admin-show-card-row-wrapper' + (lang ? (' '+lang+'-group'): '')}>
            <div className="admin-show-card-row">
                <div className="admin-show-card-row-label">{label}</div>
                <div className="admin-show-card-row-value">{value}</div>
            </div>
        </div>
    )
}