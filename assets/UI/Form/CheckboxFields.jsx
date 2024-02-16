import React from 'react';
import { CheckIcon } from '../Icon/CheckIcon';

export const CheckboxFields = ({name, labelValues, onChange, selectedValues}) => {

    const handleChange = e => {
        if(!e.target.checked) {
            onChange(name, selectedValues.filter(sv => sv !== e.target.value));
        } else {
            onChange(name, [...selectedValues, e.target.value]);
        }
    }

    return (
        <div className="checkbox-group">
            {
                Object.entries(labelValues).map(([key, value]) => (
                    <CheckboxField key={value} name={name} value={value} onChange={handleChange} checked={selectedValues.includes(value)}>
                        {key}
                    </CheckboxField>
                ))
            }
        </div>
    )
}



export const CheckboxField = ({children, name, value, onChange, checked}) => {
    return (
            <div className="checkbox-unit">
                <input className="form-checkbox" id={value} type="checkbox" name={name} value={value} checked={checked} onChange={onChange} />
                <label htmlFor={value} className="form-label">
                    <div className="custom-checkbox" role="checkbox" aria-labelledby="checkbox-label">
                        <CheckIcon />
                    </div>
                    <span id="checkbox-label">{children}</span>
                </label>
            </div>
    )
}