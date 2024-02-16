import React from 'react';
import i18n from '../../entrypoints/i18n';
import { CheckIcon } from '../Icon/CheckIcon';
import { t } from 'i18next';

export const LangFilter = ({id, lang, onChange}) => {

    const handleChange = e => {
        if(e.target.checked) {
            onChange('lang', e.target.value);
        } else {
            onChange('lang', '');
        }
    }

    const currentLang = t('current_lang', {ns: 'configs'});

    return (
        <div className="checkbox-group">
            <input className="form-checkbox" id={id} type="checkbox" name="lang" value={i18n.language} onChange={handleChange} checked={lang === i18n.language} />
            <label htmlFor={id} className="form-label">
                <div className="custom-checkbox" role="checkbox" aria-labelledby="checkbox-label">
                    <CheckIcon />
                </div>
                <span id="checkbox-label">{t('results_in_specific_language', {ns: 'messages', language: currentLang})} </span>
            </label>
        </div>
    )
}