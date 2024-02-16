import React, { useState } from 'react';
import { useOpenState } from '../../../CustomHook/state/useOpenState';
import { ApiError, apiPreparedFetch } from '../../../functions/api';

export const AdminAnswerControl = ({ownerClass, ownerId}) => {

    const [formIsOpen, openForm, closeForm] = useOpenState(false);

    const [isLoading, setLoading] = useState(false)
    const [errors, setErrors] = useState(null);

    const [value, setValue] = useState('');
    const handleChange = e => {
        e.preventDefault();
        setValue(e.target.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if(isLoading) {
            return;
        }
        setLoading(true);
        setErrors(null);
        try {
            await apiPreparedFetch('/admin/api/answer/create/'+ownerClass+'/'+ownerId, {content: value}, 'POST');
            location.reload();
        } catch(e) {
            if(e instanceof ApiError) {
                setErrors(e.errors);
            } else {
                setErrors(['Erreur serveur']);
            }
            setLoading(false);
        }
    }

    return (
        <>
            {
                formIsOpen && (
                    <form onSubmit={handleSubmit}>
                        <div className={'admin-form-group' + (errors ? ' is-invalid': '')}>
                            <label htmlFor={ownerId} className="admin-form-label">Réponse</label>
                            <textarea id={ownerId} type="text" className="admin-form-control" value={value} onChange={handleChange} autoFocus={true} />
                            {
                                errors?.content && (
                                    <div className="admin-form-error">
                                        <ul>
                                            <li>{errors.content}</li>
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                        {
                            isLoading ? (
                                <div className="admin-form-info">Chargement...</div>
                            ): (
                                <div className="admin-submit-group double">
                                    <button type="submit" onClick={closeForm} className="admin-button secondary-color admin-small-button" disabled={isLoading}>Annuler</button>
                                    <button type="submit" className="admin-button admin-small-button">Valider</button>
                                </div>
                            )
                        }
                    </form>
                )
            }
            {
                !formIsOpen && (
                    <button type="button" onClick={openForm} className="admin-button admin-small-button">Répondre</button>
                )
            }
        </>
    )
}