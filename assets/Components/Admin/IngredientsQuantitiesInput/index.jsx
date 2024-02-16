import React, { useEffect, useState } from 'react';
import { useOpenState } from '../../../CustomHook/state/useOpenState';
import '../../../styles/Admin/IngredientsQuantitiesInput/index.css';
import { Modal } from '../../../UI/Container/Modal';
import { PlusButton } from '../../../UI/Button/PlusButton';
import { IqCard } from './IqCard.jsx';
import { IqForm } from './IqForm/index.jsx';

export const IngredientsQuantitiesInput = ({name, value}) => {

    const [formIsOpen, openForm, closeForm] = useOpenState(false);

    //état local
    const [ingredientsQuantities, setIngredientsQuantities] = useState([]);
    useEffect(() => {
        if(value) {
            setIngredientsQuantities(
                JSON.parse(value)
            );
        }
    }, []);

    //état local stringifié pour submit
    const [ingredientsQuantitiesString, setIngredientsQuantitiesString] = useState('');
    useEffect(() => {
        if(ingredientsQuantities.length < 1) {
            setIngredientsQuantitiesString('');
        } else {
            setIngredientsQuantitiesString(
                JSON.stringify(ingredientsQuantities)
            );
        }
    }, [ingredientsQuantities]);
    

    const addIngredientQuantity = ingredientQuantity => {
        setIngredientsQuantities(ingredientsQuantities => ([
            ...ingredientsQuantities,
            ingredientQuantity
        ]));
    };

    const removeIngredientQuantity = ingredientQuantity => {
        setIngredientsQuantities(ingredientsQuantities => (
            ingredientsQuantities.filter(i => i.id !== ingredientQuantity.id)
        ));
    }

    const updateIngredientQuantity = (id, ingredientQuantity) => {
        setIngredientsQuantities(ingredientsQuantities => (
            ingredientsQuantities.map(i => i.id === id ? ingredientQuantity: i)
        ))
    };



    return (
        <div className="admin-form-group">
            <label>Ingrédients *</label>
            <div className="admin-select-list">
                {
                    ingredientsQuantities.map(ingredientQuantity => (
                        <IqCard 
                            key={ingredientQuantity.id} 
                            ingredientQuantity={ingredientQuantity} 
                            remove={removeIngredientQuantity}
                            update={updateIngredientQuantity}
                        />
                    ))
                }
            </div>
            <div>
                <PlusButton className="admin-add-button" onClick={openForm} />
            </div>
            <Modal isOpen={formIsOpen} close={closeForm} animated={false} additionalClass="admin-form-modal">
                <IqForm 
                    onSubmitSuccess={addIngredientQuantity} 
                    close={closeForm} 
                />
            </Modal>
            <input type="hidden" name={name} value={ingredientsQuantitiesString} />
        </div>
    )
}


