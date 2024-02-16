import React, { useState } from 'react';
import { Loader } from '../../../../../../../../UI/Icon/Loader';
import { RadioField } from '../../../../../../../../UI/Form/RadioFields';
import { FormButton } from '../../../../../../../../UI/Form/FormButton';
import { RelayCard } from './RelayCard';
import { useTranslation } from 'react-i18next';

export const RelayForm = ({choices, isLoading, onSubmit}) => {
    const {t} = useTranslation('messages');
    
    const [selectedRelay, setSelectedRelay] = useState(null);
    const handleChange = e => {
        setSelectedRelay(parseInt(e.target.value));
    }

    const handleSubmit = e => {
        e.preventDefault();
        const relay = choices.find(choice => choice.id === selectedRelay);
        onSubmit(relay);
    }

    if(isLoading) {
        return (
            <div className="i-text text-loader">
                <Loader />
                <span>{t('info.loading.relays')}</span>
            </div>
        )
    }

    if(!choices || choices.length === 0) {
        
        return <div>{t('count.results', {count: 0})}</div>
    }

    return (
        <form onSubmit={handleSubmit}>
            <ul className="shippingMethod-choices-list">
                {
                    choices.map(choice => (
                        <RadioField 
                            key={choice.id}
                            name="shippingMethod-choice"
                            value={choice.id}
                            onChange={handleChange}
                            checked={choice.id === selectedRelay}
                            >
                            <RelayCard key={choice.id} relay={choice} />
                        </RadioField>
                    ))
                }
            </ul>
            <div className="submit-group">
                <FormButton additionalClass={'bordeaux'}>{t('submit.validate')}</FormButton>
            </div>
        </form>
    )
}