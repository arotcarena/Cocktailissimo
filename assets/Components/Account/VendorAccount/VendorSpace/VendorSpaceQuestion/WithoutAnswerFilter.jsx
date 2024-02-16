import React from 'react';
import { CheckIcon } from '../../../../../UI/Icon/CheckIcon';
import { useTranslation } from 'react-i18next';

export const WithoutAnswerFilter = ({id, value, onChange}) => {
    const {t} = useTranslation('messages');

    const handleChange = e => {
        if(e.target.checked) {
            onChange('withoutAnswer', true);
        } else {
            onChange('withoutAnswer', false);
        }
    }

    return (
        <div className="checkbox-group">
            <input className="form-checkbox" id={id} type="checkbox" name="withoutAnswer" onChange={handleChange} checked={value} />
            <label htmlFor={id} className="form-label">
                <div className="custom-checkbox" role="checkbox" aria-labelledby="checkbox-label">
                    <CheckIcon />
                </div>
                <span id="checkbox-label">{t('only_questions_without_answer')}</span>
            </label>
        </div>
    )
}