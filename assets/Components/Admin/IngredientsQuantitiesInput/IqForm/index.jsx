import React from 'react';
import * as yup from "yup"
import { useFormWithValidation } from '../../../../CustomHook/form/useFormWithValidation';
import { createToken } from '../../../../functions/token';
import { AdminTextField } from '../../../../styles/UI/Admin/Form/AdminTextField';
import { IngredientSuggestedField } from './IngredientSuggestedField';
import { useOpenState } from '../../../../CustomHook/state/useOpenState';
import { EditButton } from '../../../../UI/Button/EditButton';


const ingredientQuantitySchema = yup
  .object({
    ingredientId: yup.number().typeError('Vous devez choisir un ingrédient').required('Vous devez choisir un ingrédient'),
    enQuantity: yup.string().max(200, '200 caractères max.').required('La quantité (EN) est obligatoire'),
    frQuantity: yup.string().max(200, '200 caractères max.').required('La quantité (FR) est obligatoire'),
    esQuantity: yup.string().max(200, '200 caractères max.').required('La quantité (ES) est obligatoire'),
    itQuantity: yup.string().max(200, '200 caractères max.').required('La quantité (IT) est obligatoire'),
  })
  .required();



const prepareDefaultIngredientQuantity = ingredientQuantity => {
    if(ingredientQuantity) {
        return {
            ingredientId: ingredientQuantity.ingredient.id,
            picturePath: ingredientQuantity.ingredient.picture.path,
            ingredientName: ingredientQuantity.ingredient.name,
            enQuantity: ingredientQuantity.quantity.en,
            frQuantity: ingredientQuantity.quantity.fr,
            esQuantity: ingredientQuantity.quantity.es,
            itQuantity: ingredientQuantity.quantity.it
        };
    }
    return {
        ingredientId: '',
        picturePath: '',
        ingredientName: '',
        enQuantity: '',
        frQuantity: '',
        esQuantity: '',
        itQuantity: ''
    };
}


export const IqForm = ({close, onSubmitSuccess, ingredientQuantity}) => {

    const {handleSubmit, control, errors, setError, setValue, getValues, watch, isSubmitting} = useFormWithValidation(
        ingredientQuantitySchema, 
        prepareDefaultIngredientQuantity(ingredientQuantity)
    );
    

    const onSubmit = formData => {
        const newIngredientQuantity = {
            id: createToken(7),
            ingredient: {
                id: formData.ingredientId,
                name: formData.ingredientName,
                picture: {
                    path: formData.picturePath
                }
            },
            quantity: {
                en: formData.enQuantity,
                fr: formData.frQuantity,
                es: formData.esQuantity,
                it: formData.itQuantity,
            }
        };
        onSubmitSuccess(newIngredientQuantity);
        close();
    }


    //quand on sélectionne un ingrédient, on hydrate les valeurs du form : ingredientId, picturePath, enIngredientName etc...
    const handleSelectIngredient = ingredient => {
        setValue('ingredientId', ingredient.id);
        setValue('picturePath', ingredient.picture.path);
        setValue('ingredientName', ingredient.name);
        closeIngredientForm();
    };


    const [ingredientFormIsOpen, openIngredientForm, closeIngredientForm] = useOpenState(ingredientQuantity ? false: true); //si create, form ouvert / si update, form fermé
    const handleEditIngredient = () => {
        setValue('ingredientId', '');
        setValue('picturePath', '');
        setValue('ingredientName', '');
        openIngredientForm();
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="admin-form ingredient-quantity-form">
            <h2 className="admin-form-modal-title">Ingrédient</h2>

            {
                ingredientFormIsOpen ? (
                    <IngredientSuggestedField onSelect={handleSelectIngredient} formError={errors.ingredientId?.message} />
                ): (
                    <div className="iq-card">
                        <img src={getValues('picturePath')} alt="Photo d'un ingrédient" />
                        <span className="admin-form-modal-top-card-text">
                            {watch('frQuantity')}
                            {' '}
                            <strong>{getValues('ingredientName')}</strong>
                        </span>
                        <EditButton onClick={handleEditIngredient} />
                    </div>
                )
            }
            
            <AdminTextField control={control} name="enQuantity" error={errors.enQuantity?.message} maxLength="200">Quantité (EN) *</AdminTextField>
            <AdminTextField control={control} name="frQuantity" error={errors.frQuantity?.message} maxLength="200" placeholder="Ex: 1 cuillère de">Quantité (FR) *</AdminTextField>
            <AdminTextField control={control} name="esQuantity" error={errors.esQuantity?.message} maxLength="200">Quantité (ES) *</AdminTextField>
            <AdminTextField control={control} name="itQuantity" error={errors.itQuantity?.message} maxLength="200">Quantité (IT) *</AdminTextField>

            {
                Object.values(errors).length > 0 && <div className="form-error">Le formulaire comporte des erreurs</div>
            }

            <div className="admin-submit-group double">
                <button type="button" className="admin-button secondary-color" onClick={close}>Annuler</button>
                <button type="submit" className="admin-button">Valider</button>
            </div>
        </form>
    )
   
}

