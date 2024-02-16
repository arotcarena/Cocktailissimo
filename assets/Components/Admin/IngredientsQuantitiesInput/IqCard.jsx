import React from 'react';
import { useOpenState } from '../../../CustomHook/state/useOpenState.jsx';
import { Modal } from '../../../UI/Container/Modal.jsx';
import { IqForm } from './IqForm/index.jsx';
import { EditButton } from '../../../UI/Button/EditButton.jsx';
import { CloseButton } from '../../../UI/Button/CloseButton.jsx';

export const IqCard = ({ingredientQuantity, remove, update}) => {
    
    const handleRemove = () => {
        remove(ingredientQuantity);
    }

    const handleUpdate = newIngredientQuantity => {
        update(ingredientQuantity.id, newIngredientQuantity);
    }

    const [formIsOpen, openForm, closeForm] = useOpenState(false);

    return (
        <li className="iq-card">
            <img src={ingredientQuantity.ingredient.picture.path} alt="Photo d'un ingrédient" />
            <span className="en-group">
                {ingredientQuantity.quantity.en} <strong>{ingredientQuantity.ingredient.name}</strong>
            </span>
            <span className="fr-group">
                {ingredientQuantity.quantity.fr} <strong>{ingredientQuantity.ingredient.name}</strong>
            </span>
            <span className="es-group">
                {ingredientQuantity.quantity.es} <strong>{ingredientQuantity.ingredient.name}</strong>
            </span>
            <span className="it-group">
                {ingredientQuantity.quantity.it} <strong>{ingredientQuantity.ingredient.name}</strong>
            </span>
            <CloseButton onClick={handleRemove} />
            <EditButton onClick={openForm} />

            <Modal isOpen={formIsOpen} close={closeForm} additionalClass="admin-form-modal" animated={false}>
                    <IqForm ingredientQuantity={ingredientQuantity} onSubmitSuccess={handleUpdate} close={closeForm} />
            </Modal>
        </li>
    )
}