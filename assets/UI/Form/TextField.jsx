import React from 'react';
import { useController } from 'react-hook-form';
import { useLabelDown } from '../../CustomHook/form/useLabelDown';





export const TextField = ({children, control, name, error, additionalClass = '', type = 'text', ...props}) => {
    const {field} = useController({name, control});

    const [isLabelDown, handleFocus, handleBlur] = useLabelDown(field.value, field.onBlur);

    return (
        <div className={'form-group' + (error ? ' is-invalid': '') + (additionalClass ? ' '+additionalClass+'-group': '') + (type === 'textarea' ? ' textarea': '')}>
            <div className={'input-wrapper '+ field.name  + (isLabelDown ? ' down': '') + (type === 'textarea' ? ' textarea': '')}>
                <label className="form-label" htmlFor={field.name}>{children}</label>
                {
                    type === 'textarea'
                    ?
                    (
                        <textarea 
                            ref={field.ref} 
                            onChange={field.onChange} 
                            value={field.value} 
                            name={field.name}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            className={'form-control' + (additionalClass ? ' ' + additionalClass: '')}
                            id={field.name}  
                            {...props}
                        />
                    )
                    :
                    (
                        <input 
                            ref={field.ref} 
                            onChange={field.onChange} 
                            value={field.value} 
                            name={field.name}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            type={type}
                            className={'form-control' + (additionalClass ? ' ' + additionalClass: '')} 
                            id={field.name}  
                            {...props}
                        />
                    )
                }
            </div>
            {error && <div className="form-error">{error}</div>}
        </div>
    )
}

export const TextareaField = ({...props}) => {
    return (
        <div className="box-form">
            <TextField type="textarea" {...props} />
        </div>
    )
}

 
