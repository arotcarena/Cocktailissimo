import React, { useState } from 'react';
import { PictureUploadField } from '../../../UI/Form/PictureUploadField';

export const AdminPictureUpload = ({name, label, defaultBase64img, resizeWidth, resizeHeight}) => {

    const [errors, setErrors] = useState([]);

    return (
        <PictureUploadField 
            name={name} 
            errors={errors} 
            setErrors={setErrors} 
            resizeWidth={resizeWidth} 
            resizeHeight={resizeHeight}
            defaultBase64img={defaultBase64img}
            >
            {label}
        </PictureUploadField>
    )
} 