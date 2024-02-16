import React from 'react';
import { useController } from 'react-hook-form';


export const ControlledRadioFields = ({control, name, children, choices, error, isRequiredField, ...props}) => {
    return (
        <div className={'form-group' + (error ? ' is-invalid': '')}>
            <label className="form-label">{children}</label>
            <div className="radio-group-wrapper">
                {
                    Object.entries(choices).map(([label, value]) => (
                        <ControlledRadioField key={value} value={value} error={error} control={control} name={name} {...props}>
                            {label}
                        </ControlledRadioField>
                    ))
                }
                {
                    isRequiredField && <div className="radio-group radio-group-asterix">*</div>
                }
            </div>
            {error && <div className="form-error">{error}</div>}
        </div>
    )
}

export const ControlledRadioField = ({children, control, name, value, defaultValue = null, error, additionalClass = ''}) => {
    const {field: {...props}} = useController({control, name});

    return (
        <div className={'radio-group' + (error ? ' is-invalid': '')}>
            <input 
                {...props}
                value={value} 
                type="radio" 
                className={'form-radio' + (additionalClass ? ' '+additionalClass: '')} 
                id={value} 
                checked={props.value == value} /* égalité non stricte car on peut avoir une value integer et une props.value string */
                />
            <label className="form-label" htmlFor={value}>
                <div className="custom-radio" role="radio" aria-labelledby="radio-label">
                    <div className="custom-radio-core"></div>
                </div>
                <span className="radio-label">{children}</span>
            </label>
        </div>
    )
}
