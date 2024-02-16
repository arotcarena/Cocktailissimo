import React, { useEffect, useRef, useState } from 'react';
import { useFormWithValidation } from '../../CustomHook/form/useFormWithValidation';
import { TextField, TextareaField } from '../../UI/Form/TextField';
import { useTranslation } from 'react-i18next';
import { apiPreparedFetch } from '../../functions/api';
import { SiteConfig } from '../../Config/SiteConfig';
import { TextFieldWithSuggest } from '../../UI/Form/TextFieldWithSuggest';
import * as yup from "yup";
import { useMapSearch } from '../../CustomHook/fetch/useMapSearch';
import { AddressSuggestItem } from '../../UI/AddressSuggestItem';
import { ControlledRadioFields } from '../../UI/Form/ControlledRadioFields';
import { CheckIcon } from '../../UI/Icon/CheckIcon';
import { FormButton } from '../../UI/Form/FormButton';
import { Option, SelectControlled } from '../../UI/Form/Select';
import 'react-phone-number-input/style.css';
import { CountrySuggestItem } from '../../UI/CountrySuggestItem';
import { useCountrySearch } from '../../CustomHook/fetch/useCountrySearch';
import categories from '../../Config/categories.json';
import { CheckboxField } from '../../UI/Form/CheckboxFields';
import { useToggleBoolState } from '../../CustomHook/state/useToggleState';
import { useAddressForm } from '../../CustomHook/form/useAddressForm';
import { PhoneField } from '../../UI/Form/PhoneField';
import { usePhoneField } from '../../CustomHook/form/usePhoneField';
import { t } from 'i18next';


const schema = yup.object({
    civility: yup.string().required(t('assert.notBlank.civility', {ns: 'constraints'})).test('custom-validation', t('assert.choice', {ns: 'constraints'}), (value) => {
        return [SiteConfig.CIVILITY_F, SiteConfig.CIVILITY_M].includes(value);
    }),
    firstName: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.firstName', {ns: 'constraints'})),
    lastName: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.lastName', {ns: 'constraints'})),
    email: yup.string().email(t('assert.email', {ns: 'constraints'})).max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.email', {ns: 'constraints'})),

    companyName: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required('Le nom de l\'entreprise est obligatoire'),
    identificationNumber: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required('Le numéro siret est obligatoire'),
    vatNumber: yup.string().max(200, t('assert.invalid', {ns: 'constraints'})),

    socialAddress_lineOne: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.social_address', {ns: 'constraints'})),
    socialAddress_postcode: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.postcode', {ns: 'constraints'})),
    socialAddress_city: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.city', {ns: 'constraints'})),
    socialAddress_country: yup.string().length(2, t('assert.choice_country', {ns: 'constraints'})).required(t('assert.choice_country', {ns: 'constraints'})),
    socialAddress_state: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})),
    
    senderAddress_lineOne: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.sender_address', {ns: 'constraints'})),
    senderAddress_postcode: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.postcode', {ns: 'constraints'})),
    senderAddress_city: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.city', {ns: 'constraints'})),
    senderAddress_country: yup.string().length(2, t('assert.choice_country', {ns: 'constraints'})).required(t('assert.choice_country', {ns: 'constraints'})),
    senderAddress_state: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})),

    website: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})),
    facebook: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})),
    instagram: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})),

    whyBecomeVendor: yup.string().max(2000, t('assert.length.max', {ns: 'constraints', max: 2000})).required(t('assert.notBlank.answer', {ns: 'constraints'})),

    category: yup.string().required(t('assert.notBlank.category', {ns: 'constraints'})),
    subCategory: yup.string().required(t('assert.notBlank.subCategory', {ns: 'constraints'})),

    agreeTerms: yup.bool().isTrue(t('assert.checkbox.true', {ns: 'constraints'}))
  }).required();



const defaultFormData = {
    civility: null,
    firstName: '',
    lastName: '',
    email: '',

    companyName: '',
    identificationNumber: '',
    vatNumber: '',

    socialAddress_lineOne: '',
    socialAddress_lineTwo: '',
    socialAddress_postcode: '',
    socialAddress_city: '',
    socialAddress_country: '',
    socialAddress_countryTrans: '',
    socialAddress_state: '',

    senderAddress_lineOne: '',
    senderAddress_lineTwo: '',
    senderAddress_postcode: '',
    senderAddress_city: '',
    senderAddress_country: '',
    senderAddress_countryTrans: '',
    senderAddress_state: '',

    website: '',
    facebook: '',
    instagram: '',

    whyBecomeVendor: '',

    category: '',
    subCategory: '',

    agreeTerms: false
}



export const BecomeVendorForm = () => {
    const {t, i18n} = useTranslation('messages');

    const { register, handleSubmit, errors, isSubmitting, control, setValue, setError, watch, reset } = useFormWithValidation(schema, defaultFormData);
    
    const [isLoading, setLoading] = useState(false);
    const [serverError, setServerError] = useState(false);

    const onSubmit = async formData => {
        if(isLoading) {
            return;
        }
        //validations custom des adresses (state : required pour certains pays)
        if(!customValidateSocialAddress(formData)) {
            return;
        }
        if(!addressesAreSame && !customValidateSenderAddress(formData)) {
            return;
        }
        //validation custom du phone
        if(!customValidatePhone()) {
            return;
        }

        setServerError(null);
        setLoading(true);
        // on enlève les champs qui n'existent pas dans VendorContactType côté serveur, et on ajoute le champ phone qui est géré hors de react hook form
        const sendData = {...formData, phone: phone};
        delete sendData.socialAddress_countryTrans;
        delete sendData.senderAddress_countryTrans;
        delete sendData.agreeTerms;
        // si la senderAddress est la même que socialAddress
        if(addressesAreSame) {
            sendData.senderAddress_lineOne = sendData.socialAddress_lineOne;
            sendData.senderAddress_lineTwo = sendData.socialAddress_lineTwo;
            sendData.senderAddress_postcode = sendData.socialAddress_postcode;
            sendData.senderAddress_city = sendData.socialAddress_city;
            sendData.senderAddress_country = sendData.socialAddress_country;
            sendData.senderAddress_state = sendData.socialAddress_state;
        }
        try {
            const target = await apiPreparedFetch('/'+i18n.language+'/api/contact/vendorContact', sendData, 'GET');
            window.location.href = target;
        } catch(e) {
            setServerError(t('error.temporary_failure'));
            setLoading(false);
        }
    };

    //auto suggestion des adresses
    //peu importe ou on met les ref du moment que l'élément englobe le form en question
    const { 
        handleAddressSelect: handleSocialAddressSelect, 
        handleCountrySelect: handleSocialAddressCountrySelect, 
        handleCountryChange: handleSocialAddressCountryChange ,
        customValidateAddress: customValidateSocialAddress,
        formRef: socialAddressFormRef
    } = useAddressForm(setValue, setError, errors, 'socialAddress_');

    const { 
        handleAddressSelect: handleSenderAddressSelect, 
        handleCountrySelect: handleSenderAddressCountrySelect, 
        handleCountryChange: handleSenderAddressCountryChange,
        customValidateAddress: customValidateSenderAddress,
        formRef: senderAddressFormRef
    } = useAddressForm(setValue, setError, errors, 'senderAddress_');
    

    //catégories
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    useEffect(() => {
        setSelectedCategoryId(watch('category'));
    }, [watch('category')]);


    //phone
    const phoneFieldRef = useRef(null);
    const { phone, handlePhoneChange, phoneError, customValidatePhone } = usePhoneField('', phoneFieldRef.current);

    //same addresses 
    const [addressesAreSame, toggleSameAddresses] = useToggleBoolState(false);
    useEffect(() => {
        if(addressesAreSame) {
            //on remplit les champs obligatoires de la la senderAddress avec n'importe quoi juste pour éviter une erreur de validation
            setValue('senderAddress_lineOne', 'street');
            setValue('senderAddress_postcode', '01000');
            setValue('senderAddress_city', 'city');
            setValue('senderAddress_country', 'FR');
        } else {
            //on vide la senderAddress
            setValue('senderAddress_lineOne', '');
            setValue('senderAddress_lineTwo', '');
            setValue('senderAddress_postcode', '');
            setValue('senderAddress_city', '');
            setValue('senderAddress_country', '');
            setValue('senderAddress_countryTrans', '');
            setValue('senderAddress_state', '');
        }
    }, [addressesAreSame]);

    return ( 
        <div ref={socialAddressFormRef} className="contact-form-wrapper">
            <div className="contact-form-header">
                <h1 className="contact-form-title">{t('ask.become_vendor')}</h1>
                <p className="contact-form-header-text">{t('talk_us_about_you')}</p>
            </div>

            
            <form ref={senderAddressFormRef} onSubmit={handleSubmit(onSubmit)} className="contact-form">
                
                {
                    serverError && <div className="form-main-error">{serverError}</div>
                }
                
                <h3 className="contact-form-subtitle">{t('your_details')}</h3>
                <ControlledRadioFields
                            control={control} 
                            name="civility" 
                            error={errors.civility?.message}
                            choices={{
                                [t(SiteConfig.CIVILITY_M, {ns: 'configs'})]: SiteConfig.CIVILITY_M,
                                [t(SiteConfig.CIVILITY_F, {ns: 'configs'})]: SiteConfig.CIVILITY_F,
                            }}
                            isRequiredField={true}
                />

                <div className="form-row">
                    <TextField control={control} name="firstName" error={errors.firstName?.message} additionalClass="capitalize" maxLength={200}>{t('firstName')} *</TextField>
                    
                    <TextField control={control} name="lastName" error={errors.lastName?.message} additionalClass="capitalize" maxLength={200}>{t('lastName')} *</TextField>
                </div>

                <div className="form-row">
                    <TextField control={control} name="email" error={errors.email?.message} maxLength={200}>{t('email_address')} *</TextField>

                    <PhoneField 
                        ref={phoneFieldRef}
                        phone={phone}
                        onChange={handlePhoneChange}
                        error={phoneError}
                        >
                        {t('phone')}
                    </PhoneField>
                </div>

                
                
                
                <h3 className="contact-form-subtitle">{t('your_company')}</h3>

                <div className="form-row">
                    <TextField control={control} name="companyName" error={errors.companyName?.message} maxLength={200}>{t('company_name')} *</TextField>

                    <TextField control={control} name="identificationNumber" error={errors.identificationNumber?.message} maxLength={200}>{t('identification_number')} *</TextField>
                </div>
                <TextField control={control} name="vatNumber" error={errors.vatNumber?.message} maxLength={200}>{t('eu_vat_number')}</TextField>

                
                
                
                <h3 className="contact-form-subtitle">{t('social_address')}</h3>

                <TextFieldWithSuggest 
                    control={control} 
                    customHookFetcher={useMapSearch} 
                    name="socialAddress_lineOne" 
                    onSelect={handleSocialAddressSelect} 
                    error={errors.socialAddress_lineOne?.message} 
                    maxLength={200} 
                    render={(address, isSelected, onSelect) => (
                        <AddressSuggestItem key={address.id} address={address} selected={isSelected} onSelect={onSelect} />
                    )}
                    >
                    {t('address_line_one')} *
                </TextFieldWithSuggest>

                <TextField control={control} name="socialAddress_lineTwo" error={errors.socialAddress_lineTwo?.message} maxLength={200}>{t('address_line_two')}</TextField>

                <div className="form-row city-row">
                    <TextField control={control} name="socialAddress_postcode" error={errors.socialAddress_postcode?.message} maxLength={200}>{t('postcode')} *</TextField>

                    <TextField control={control} name="socialAddress_city" error={errors.socialAddress_city?.message} maxLength={200}>{t('city')} *</TextField>
                </div>

                <TextFieldWithSuggest 
                    control={control} 
                    name="socialAddress_countryTrans" 
                    customHookFetcher={useCountrySearch} 
                    onSelect={handleSocialAddressCountrySelect} 
                    error={errors.socialAddress_country?.message} 
                    maxLength={200}
                    onChange={handleSocialAddressCountryChange}
                    render={(country, isSelected, onSelect) => (
                        <CountrySuggestItem key={country} country={country} selected={isSelected} onSelect={onSelect} />
                    )}
                    >
                    {t('country')} *
                </TextFieldWithSuggest>

                <TextField control={control} name="socialAddress_state" error={errors.socialAddress_state?.message} maxLength={200}>{t('address_state')}</TextField>



                <h3 className="contact-form-subtitle">{t('sender_address')}</h3>


                
                <div className="checkbox-group interline">
                    <CheckboxField name="same-addresses" value="same" onChange={toggleSameAddresses} checked={addressesAreSame}>
                        {t('use_social_address_as_sender_address')}
                    </CheckboxField>
                </div>


                {
                    !addressesAreSame && (
                        <>
                            <TextFieldWithSuggest 
                                control={control} 
                                customHookFetcher={useMapSearch} 
                                name="senderAddress_lineOne" 
                                onSelect={handleSenderAddressSelect} 
                                error={errors.senderAddress_lineOne?.message} 
                                maxLength={200} 
                                render={(address, isSelected, onSelect) => (
                                    <AddressSuggestItem key={address.id} address={address} selected={isSelected} onSelect={onSelect} />
                                )}
                                >
                                {t('address_line_one')} *
                            </TextFieldWithSuggest>

                            <TextField control={control} name="senderAddress_lineTwo" error={errors.senderAddress_lineTwo?.message} maxLength={200}>{t('address_line_two')}</TextField>

                            <div className="form-row city-row">
                                <TextField control={control} name="senderAddress_postcode" error={errors.senderAddress_postcode?.message} maxLength={200}>{t('postcode')} *</TextField>

                                <TextField control={control} name="senderAddress_city" error={errors.senderAddress_city?.message} maxLength={200}>{t('city')} *</TextField>
                            </div>

                            <TextFieldWithSuggest 
                                control={control} 
                                name="senderAddress_countryTrans" 
                                customHookFetcher={useCountrySearch} 
                                onSelect={handleSenderAddressCountrySelect} 
                                error={errors.senderAddress_country?.message} 
                                maxLength={200}
                                onChange={handleSenderAddressCountryChange}
                                render={(country, isSelected, onSelect) => (
                                    <CountrySuggestItem key={country} country={country} selected={isSelected} onSelect={onSelect} />
                                )}
                                >
                                {t('country')} *
                            </TextFieldWithSuggest>

                            <TextField control={control} name="senderAddress_state" error={errors.senderAddress_state?.message} maxLength={200}>{t('address_state')}</TextField>
                        </>
                    ) 
                }




                <h3 className="contact-form-subtitle">{t('select.category')}</h3>
                
                <SelectControlled control={control} name="category" error={errors.category?.message} label={t('category')}>
                    <Option value=""></Option>
                    {
                        categories.map(category => (
                            <Option key={category.id} value={category.id}>
                                {category.name[i18n.language]}
                            </Option>
                        ))
                    }
                </SelectControlled>

                {
                    selectedCategoryId && (
                        <SelectControlled control={control} name="subCategory" error={errors.subCategory?.message} label={t('subCategory')}>
                            <Option value=""></Option>
                            {
                                categories.find(category => category.id == selectedCategoryId).subCategories.map(subCategory => (
                                    <Option key={subCategory.id} value={subCategory.id}>
                                        {subCategory.name[i18n.language]}
                                    </Option>
                                ))
                            }
                        </SelectControlled>
                    )
                }

                
                <h3 className="contact-form-subtitle">{t('web_presence')}</h3>
                
                <TextField control={control} name="website" error={errors.website?.message} maxLength={200}>{t('website')}</TextField>

                <div className="form-row">
                    <TextField control={control} name="facebook" error={errors.facebook?.message} maxLength={200}>Facebook</TextField>

                    <TextField control={control} name="instagram" error={errors.instagram?.message} maxLength={200}>Instagram</TextField>
                </div>


                <h3 className="contact-form-subtitle">{t('your_motivations')}</h3>

                <TextareaField control={control} name="whyBecomeVendor" error={errors.whyBecomeVendor?.message} maxLength={2000}>
                    {t('ask.why_become_vendor')} *
                </TextareaField>


                
                <div className={'checkbox-group' + (errors.agreeTerms ? ' is-invalid': '')}>
                    <input {...register('agreeTerms')} className="form-checkbox" id="checkboxRememberMe" type="checkbox" />
                    <div className="checkbox-label-wrapper">
                        <label htmlFor="checkboxRememberMe" className="form-label">
                            <div className="custom-checkbox" role="checkbox" aria-labelledby="checkbox-label">
                                <CheckIcon />
                            </div>
                            <span id="checkbox-label">{t((watch('civility') === SiteConfig.CIVILITY_F) ? 'agree_contacts_f': watch('civility') === SiteConfig.CIVILITY_M ? 'agree_contacts_m': 'agree_contacts')} *</span>
                        </label>
                    </div>
                    {
                        errors.agreeTerms && <div className="form-error">{errors.agreeTerms.message}</div>
                    }
                </div>
            
                <div className="submit-group">
                    <FormButton loading={isLoading || isSubmitting} additionalClass="security-button bordeaux">{t('submit.send')}</FormButton>
                </div>
            </form>
        </div>
    )

}