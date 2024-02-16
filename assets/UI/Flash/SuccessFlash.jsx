import React from 'react';
import { Flash } from './Flash';

export const SuccessFlash = ({children, ...props}) => {
    return (
        <Flash type="success" {...props}>
            {children}
        </Flash>
    )
}