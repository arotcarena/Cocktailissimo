import React from 'react';

export const WarningBadge = ({number = 1}) => {
    return (
        <div className="badge badge-right warning-badge">
            {number}
        </div>
    )
}