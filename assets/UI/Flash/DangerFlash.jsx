import React from 'react';
import { Flash } from './Flash';

export const DangerFlash = ({children, ...props}) => {
    return (
        <Flash type="danger" {...props}>
            {children}
        </Flash>
    )
}