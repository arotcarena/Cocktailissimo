import React, { useState } from 'react';
import { RadioField } from '../../../../../../UI/Form/RadioFields';
import { ShippingMethodCard } from '../../ShippingMethodCard';
import { FormButton } from '../../../../../../UI/Form/FormButton';
import { Loader } from '../../../../../../UI/Icon/Loader';
import { useTranslation } from 'react-i18next';

export const MethodForm = ({choices, isLoading, defaultMethod, onSubmit}) => {
    const {t} = useTranslation('messages');

    const [selectedChoice, setSelectedChoice] = useState(defaultMethod?.id);
    const handleChange = e => {
        setSelectedChoice(parseInt(e.target.value));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const shippingMethod = choices.find(choice => choice.id === selectedChoice);
        onSubmit(shippingMethod);
    }

    
    if(!choices) {
        if(isLoading) {
            return (
                <div className="i-text text-loader">
                    <Loader />
                    <span>{t('info.loading.shippingMethods')} </span>
                </div>
            )
        }
        return <div>{t('temporary_unavailable_infos')}</div>
    }

    return (
        <form onSubmit={handleSubmit}>
            <ul className="shippingMethod-choices-list">
                {
                    choices.map((choice, index) => (
                        <RadioField 
                            key={index}
                            name="shippingMethod-choice"
                            value={choice.id}
                            onChange={handleChange}
                            checked={choice.id === selectedChoice}
                            >
                            <ShippingMethodCard key={choice.id} shippingMethod={choice} />
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