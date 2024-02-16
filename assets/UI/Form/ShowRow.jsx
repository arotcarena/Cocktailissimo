import React from 'react';

export const ShowRow = ({children, label}) => {
    return (
        <div className="show-row">
            <div className="show-row-label">{label}</div>
            <div className="show-row-value">{children}</div>
        </div>
    )
}