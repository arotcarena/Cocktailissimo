import React, { useState } from 'react';
import * as yup from "yup"
import { useFormWithValidation } from '../../../../CustomHook/form/useFormWithValidation';
import { AdminTextField } from '../../../../styles/UI/Admin/Form/AdminTextField';
import { apiFetch } from '../../../../functions/api';
import { PriceCalculator } from './PriceCalculator';


const packagingSchema = yup
  .object({
    publicRef: yup.string().max(200, '200 caractères max.').required('Le réf. publique est obligatoire'),
    privateRef: yup.string().max(200, '200 caractères max.'),
    enLabel: yup.string().max(200, '200 caractères max.'),
    frLabel: yup.string().max(200, '200 caractères max.'),
    esLabel: yup.string().max(200, '200 caractères max.'),
    itLabel: yup.string().max(200, '200 caractères max.'),
    consumerPriceHT: yup.number().typeError('Cette valeur doit être un nombre').positive('Cette valeur doit être supérieure à 0').required('Le prix public (HT) est obligatoire'),
    businessPriceHT: yup.number().typeError('Cette valeur doit être un nombre').positive('Cette valeur doit être supérieure à 0').required('Le prix pro (HT) est obligatoire'),
    stock: yup.number().typeError('Cette valeur doit être un nombre').min(0, 'Cette valeur ne peut être négative').required('Le stock est obligatoire'),
    eanCode: yup.string().max(200, '200 caractères max.').required('Le code EAN est obligatoire'),
    weight: yup.number().typeError('Cette valeur doit être un nombre').positive('Cette valeur doit être supérieure à zéro').required('Le poids (g) est obligatoire'),
  })
  .required();


const defaultPackaging = {
    publicRef: '',
    privateRef: '',
    enLabel: '',
    frLabel: '',
    esLabel: '',
    itLabel: '',
    supplyPrice: '',
    consumerPriceHT: '',
    businessPriceHT: '',
    stock: '',
    eanCode: '',
    weight: '',
    exciseTax: '',
    frSocialTax: ''
};

const prepareDefaultPackaging = packaging => {
    if(!packaging) {
        return defaultPackaging;
    }
    return {
        ...packaging,
        supplyPriceHT: packaging.supplyPriceHT / 100,
        consumerPriceHT: packaging.consumerPriceHT / 100,
        businessPriceHT: packaging.businessPriceHT / 100,
        exciseTax: packaging.exciseTax ? packaging.exciseTax / 100: '',
        frSocialTax: packaging.frSocialTax ? packaging.frSocialTax / 100: ''
    };
}

export const PackagingChoicesForm = ({onSubmitSuccess, close, packagingChoices, productId, vatLevel, packaging = null}) => {
    const {handleSubmit, control, errors, setError, setValue, watch, isSubmitting} = useFormWithValidation(packagingSchema, prepareDefaultPackaging(packaging));

    const [isLoading, setLoading] = useState(false);

    const onSubmit = async formData => {
        if(isLoading) {
            return;
        }
        setLoading(true);
        //validation Unique publicRef côté front (en cas de update, on vérifie qu'on a modifié la publicRef)
        if(!packagingChoices.find(p => {
            if(packaging && packaging.publicRef === formData.publicRef) {
                return false;
            }
            return p.publicRef === formData.publicRef;
        })) {
            //validation Unique publicRef côté serveur
            try {
                await apiFetch('/admin/api/packaging/validation/uniquePublicRef/'+ (productId ?? '0') +'/'+ formData.publicRef); //dans create productId est undefined --> on envoie 0
                //priceTransformer
                formData.supplyPriceHT = Math.round(formData.supplyPriceHT * 100);
                formData.consumerPriceHT = Math.round(formData.consumerPriceHT * 100);
                formData.businessPriceHT = Math.round(formData.businessPriceHT * 100);
                formData.exciseTax = Math.round(formData.exciseTax * 100);
                formData.frSocialTax = Math.round(formData.frSocialTax * 100);
                onSubmitSuccess(formData);
                close();
            } catch(e) {
                //
            }
        }
        setError('publicRef', {type: 'custom', message: 'La réf. publique "' + formData.publicRef + '" est déjà utilisée'});
        setLoading(false);
    }

    return (
        <form className="admin-form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="admin-form-modal-title">Conditionnement</h2>
            <AdminTextField control={control} name="publicRef" error={errors.publicRef?.message} maxLength="200">Réf. publique *</AdminTextField>
            <AdminTextField control={control} name="privateRef" error={errors.privateRef?.message} maxLength="200">Réf. privée</AdminTextField>

            <AdminTextField control={control} name="eanCode" error={errors.eanCode?.message} maxLength="200">Code EAN *</AdminTextField>

            <div className="admin-form-modal-apparted">
                <div className="admin-form-modal-apparted-title">Label : (ex: 20cl - si c'est à l'unité ne rien mettre)</div>
                <AdminTextField control={control} name="enLabel" error={errors.enLabel?.message} maxLength="200">EN</AdminTextField>
                <AdminTextField control={control} name="frLabel" error={errors.frLabel?.message} maxLength="200">FR</AdminTextField>
                <AdminTextField control={control} name="esLabel" error={errors.esLabel?.message} maxLength="200">ES</AdminTextField>
                <AdminTextField control={control} name="itLabel" error={errors.itLabel?.message} maxLength="200">IT</AdminTextField>
            </div>

            <AdminTextField type="number" control={control} name="supplyPriceHT" error={errors.supplyPriceHT?.message} maxLength="200">Prix d'achat (HT)</AdminTextField>

            <PriceCalculator 
                setValue={setValue} 
                vatLevel={vatLevel} 
                supplyPriceHT={watch('supplyPriceHT')}
                consumerPriceHT={watch('consumerPriceHT')}
                businessPriceHT={watch('businessPriceHT')}
                consumerPriceError={errors.consumerPriceHT?.message}
                businessPriceError={errors.businessPriceHT?.message}
            /> 

            <AdminTextField type="number" control={control} name="exciseTax" error={errors.exciseTax?.message} maxLength="200">Droits d'accise (EUR)</AdminTextField>
            
            <AdminTextField type="number" control={control} name="frSocialTax" error={errors.frSocialTax?.message} maxLength="200">Cotisation Sécurité Sociale (France) (EUR)</AdminTextField>
            
            <AdminTextField type="number" control={control} name="weight" error={errors.weight?.message} maxLength="200">Poids (g) *</AdminTextField>


            <AdminTextField type="number" control={control} name="stock" error={errors.stock?.message} maxLength="200">Stock *</AdminTextField>

            {
                Object.values(errors).length > 0 && <div className="form-error">Le formulaire comporte des erreurs</div>
            }

            <div className="admin-submit-group double">
                {
                    isLoading ? (
                        <div className="admin-form-info">Chargement...</div>
                    ): (
                        <>
                            <button type="button" className="admin-button secondary-color" onClick={close}>Annuler</button>
                            <button type="submit" className="admin-button">Valider</button>
                        </>
                    )
                }
            </div>
        </form>
    )
}