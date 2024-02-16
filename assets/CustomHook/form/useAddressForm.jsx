import { t } from "i18next";
import { Countries } from "../../Config/Countries";
import { useEffect } from "react";
import { useStateRef } from "../state/useStateRef";

/**
 * @param {string} namePrefix prefixe tous les name ex: prefixlineOne (dans le cas où on a plusieurs adresses dans un même form, ça sert à les différencier)
 * @param {HTMLElement} formElt sert à enlever le labelDown des champs remplis par l'autosuggestion
 * @returns 
 */
export const useAddressForm = (setValue, setError, errors, namePrefix = '') => {
    const [formRef, formElt] = useStateRef();

    //on address suggest selection
    const handleAddressSelect = (address) => {
        setValue(namePrefix + 'lineOne', address.lineOne);
        setValue(namePrefix + 'lineTwo', '');
        setValue(namePrefix + 'postcode', address.postcode);
        setValue(namePrefix + 'city', address.city);
        setValue(namePrefix + 'country', address.country);
        setValue(namePrefix + 'countryTrans', 'France');

        if(formElt) {
            formElt.querySelectorAll('.input-wrapper').forEach(inputWrapper => {
                //on enlève le labelDown sur tous les champs qu'on remplit
                if(
                    inputWrapper.classList.contains(namePrefix + 'lineOne') 
                    || 
                    inputWrapper.classList.contains(namePrefix + 'postcode')
                    || 
                    inputWrapper.classList.contains(namePrefix + 'city')
                    || 
                    inputWrapper.classList.contains(namePrefix + 'countryTrans')
                    ) {
                    inputWrapper.classList.remove('down');
                }
            })
        }
        if(errors.country) {
            setError(namePrefix + 'country', null);
        }
    }


    //on country suggest selection
    const handleCountrySelect = country => {
        setValue(namePrefix + 'country', country);
        setValue(namePrefix + 'countryTrans', t(country, {ns: 'countries'}));
        if(errors.country) {
            setError(namePrefix + 'country', null);
        }
    }

    //on country change on supprime country pour qu'on sache que l'autosuggestion n'a pas été utilisée
    const handleCountryChange = () => {
        setValue(namePrefix + 'country', '');
    }


    //custom validations
    //state : required pour certains pays
    /**
     * 
     * @param {Object} formData 
     * @returns {boolean}
     */
    const customValidateAddress = (formData) => {
        let success = true;
        const errors = getErrors(formData);
        for(const [field, errorMessage] of Object.entries(errors)) {
            success = false;
            setError(field, {type: 'custom', message: errorMessage});
        }
        //si il y a des erreurs on focus sur le premier field en erreur
        if(!success && formElt) {
            const fieldToFocus = Object.keys(errors)[0];
            const inputToFocus = formElt.querySelector('input[name='+fieldToFocus+']');
            if(inputToFocus) {
                inputToFocus.focus();
            }
        }
        return success;
    }

    /**
     * @param {Object} formData 
     * @returns {Object} errors
     */
    const getErrors = (formData) => {
        const errors = {};
        //validation de state
        const countryFieldName = namePrefix + 'country';
        const stateFieldName = namePrefix + 'state';
        if(Countries.STATE_REQUIRED.includes(formData[countryFieldName])) {
            if(!formData[stateFieldName] || formData[stateFieldName] === '') {
                errors[stateFieldName] = t('assert.notBlank.address_state', {ns: 'constraints'});
            }
        }
        return errors;
    }

    return { handleAddressSelect, handleCountrySelect, handleCountryChange, customValidateAddress, formRef };
}