import React, { useEffect, useState } from 'react';
import { SelectedItemsList } from './SelectedItemsList';
import { apiFetch } from '../../../functions/api';
import '/assets/styles/Admin/SuggestedProductsInput/index.css';
import { StandardItemSelector } from '../../../UI/Admin/StandardItem/StandardItemSelector';

export const SelectLinkedItems = ({indexEndpoint, searchEndpoint, name, title, formError}) => {

    //gestion de l'affichage des suggestedProducts
    const [selectedItems, setSelectedItems] = useState([]);
    const [listLoading, setListLoading] = useState(false);
    useEffect(() => {
        if(indexEndpoint) {
            (async () => {
                setListLoading(true);
                try {
                    const data = await apiFetch(indexEndpoint);
                    setSelectedItems(data);
                } catch(e) {
                    //
                }
                setListLoading(false);
            })();
        }
    }, []);
    const handleRemove = (item) => {
        setSelectedItems(selectedItems => selectedItems.filter(i => i.id !== item.id));
    };

    //search
    const handleSelect = (item) => {
        setSelectedItems(selectedItems => {
            //on vérifie si le produit a déjà été sélectionné
            let included = false;
            for(const linkedItem of selectedItems) {
                if(linkedItem.id === item.id) {
                    included = true;
                }
            }
            if(!included) {
                return [
                    ...selectedItems,
                    item
                ];
            }
            return selectedItems;
        });
    }

    return (
        <>
            <div className={'admin-form-group suggestedProducts-group' + (formError ? ' is-invalid': '')}>
                <label>{title}</label>
                <SelectedItemsList items={selectedItems} onRemove={handleRemove} loading={listLoading} />
                <StandardItemSelector searchEndpoint={searchEndpoint} onSelect={handleSelect} />
            </div>
            {
                formError && (
                    <div className="admin-form-error">
                        <ul>
                            <li>{formError}</li>
                        </ul>
                    </div>
                )
            }


            <select hidden={true} name={name} value={selectedItems.map(item => item.id)} onChange={() => {}} multiple="multiple">
            {
                selectedItems.map(item => <option className="suggestedProducts-hidden-option" key={item.id} value={item.id} data-ref={item.ref}>{item.ref}</option>)  //DEVENU DATA-REF avant---> data-designation : pour les tests endtoend (car on peut accéder seulement au text visible et comme il est hidden)
            }
            </select>
        </>

        
    )
}






