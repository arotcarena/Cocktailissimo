import React from 'react';
import { Loader } from '../Icon/Loader';

export const FormButton = ({children, additionalClass, disabled = false, loading, ...props}) => {

    return (
        <button type="submit" className={'form-button' + (additionalClass ? ' '+additionalClass: '') + (loading || disabled ? ' disabled': '') } disabled={disabled || loading} {...props}>
        {
            loading 
            ? 
            <Loader />
            :
            <span>{children}</span>
        }
        </button>
    )
}
