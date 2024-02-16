import React from 'react';
import { TextField } from '../../../../UI/Form/TextField';

export const AdminTextField = ({...props}) => {
    return (
        <div className="admin-form-group">
            <TextField additionalClass="admin-form-control" {...props} />
        </div>
    )
}