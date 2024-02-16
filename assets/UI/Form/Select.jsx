import React from 'react';
import { useController } from 'react-hook-form';
import { ExpandMoreIcon } from '../Icon/ExpandMoreIcon';

export const Select = ({children, name, value, onChange, errors, ...props})  => {
    return (
        <div className={'form-group select-group' + (errors ? ' is-invalid': '')}>
            <select className="form-select" name={name} value={value} onChange={onChange} {...props}>
                {children}
            </select>
        </div>
    )
}

export const Option = ({children, value}) => {
    return (
        <option className="form-option" value={value}>
            {children}
        </option>
    )
}


export const SelectControlled = ({children, control, name, error, additionalClass, onChange = null, label = null, ...props})  => {

    const {field} = useController({name, control});

    const handleChange = e => {
        if(onChange) {
            onChange(e.target.value);
        }
        field.onChange(e);
    }

    return (
        <div className="form-group select-group">
            {
                label && <label className="form-label" htmlFor={name}>{label}</label>
            }
            <div className="form-select-wrapper">
                <select 
                    id={name}
                    className={'form-select' + (additionalClass ? ' '+additionalClass: '')} 
                    ref={field.ref} 
                    onChange={handleChange} 
                    value={field.value} 
                    name={field.name}
                    onBlur={field.onBlur}
                    onFocus={field.onFocus}
                    {...props}
                >
                    {children}
                </select>
                <ExpandMoreIcon className="form-select-arrow" />
            </div>
            {
                error && <div className="form-error">{error}</div>
            }
        </div>
    )
}

