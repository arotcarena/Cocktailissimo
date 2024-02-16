import React from 'react';

export const RadioFields = ({name, labelValues, onChange, selectedValue = null}) => {

    const handleChange = e => {
        onChange(name, e.target.value);
    }

    return (
        <div className="checkbox-group">
            {
                Object.entries(labelValues).map(([key, value] ) => (
                    <RadioField key={value} name={name} value={value} onChange={handleChange} checked={value === selectedValue}>
                        {key}
                    </RadioField>
                ))
            }
        </div>
    )
}


export const RadioField = ({children, name, value, onChange, checked}) => {
    return (
        <div className="radio-group">
            <input className="form-radio" id={value} type="radio" name={name} value={value} checked={checked} onChange={onChange} />
            <label className="form-label" htmlFor={value}>
                <div className="custom-radio" role="radio" aria-labelledby="radio-label">
                    <div className="custom-radio-core"></div>
                </div>
                <span className="radio-label">{children}</span>
            </label>
        </div>
    )
}

