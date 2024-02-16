import React from 'react';
import { StarFullIcon } from '../../../../../../../UI/Icon/Stars/StarFullIcon';
import { StarEmptyIcon } from '../../../../../../../UI/Icon/Stars/StarEmptyIcon';
import { t } from 'i18next';


const labels = {
    1: t('rate.verybad', {ns: 'configs'}),
    2: t('rate.bad', {ns: 'configs'}),
    3: t('rate.medium', {ns: 'configs'}),
    4: t('rate.good', {ns: 'configs'}),
    5: t('rate.verygood', {ns: 'configs'})
};

export const RateField = ({rate, setValue, error, clearErrors}) => {

    const handleSelect = (newRate) => {
        setValue('rate', newRate);
        if([1, 2, 3, 4, 5].includes(newRate)) {
            //on est obligé car sinon l'erreur n'est pas enlevée onTouched mais seulement onSubmit
            //cela est du au fait que rate est un champ qui n'est pas lié à un vrai input
            clearErrors('rate');
        }
    }

    return (
        <div className="review-form-starsField">
            <div className={'review-form-starsField-label' + (error ? ' is-invalid': '')}>{t('note', {ns: 'messages'})} *</div>
            <div className={'review-form-stars' + (rate ? ' color-'+rate.toString(): '')}>
                <Star value={1} isFull={rate >= 1} onSelect={handleSelect} />
                <Star value={2} isFull={rate >= 2} onSelect={handleSelect} />
                <Star value={3} isFull={rate >= 3} onSelect={handleSelect} />
                <Star value={4} isFull={rate >= 4} onSelect={handleSelect} />
                <Star value={5} isFull={rate >= 5} onSelect={handleSelect} />
                <span className="review-form-stars-label">
                    {labels[rate]}
                </span>
            </div>
            {
                error && <div className="form-error">{error}</div>
            }
        </div>
    )
}

const Star = ({value, isFull, onSelect}) => {
    const handleClick = e => {
        e.preventDefault();
        onSelect(value);
    }
    return (
        <button 
            type="button" 
            onClick={handleClick} 
            aria-label={t('choose_review_note', {ns: 'messages', note: value})}
            title={t('choose_review_note', {ns: 'messages', note: value})}
            >
            {
                isFull ? <StarFullIcon /> : <StarEmptyIcon />
            }
        </button>
    )
}