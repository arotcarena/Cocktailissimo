import React, { useEffect, useState } from 'react';
import '/assets/styles/Admin/SuggestedProductsInput/index.css';
import { StandardItemSelector } from '../../../UI/Admin/StandardItem/StandardItemSelector';
import { SelectedItem } from '../SelectLinkedItems/SelectedItemsList';
import { useFetch } from '../../../CustomHook/fetch/useFetch';

export const SelectUniqueItem = ({type, itemId = null, name, title, formError}) => {

    //gestion de l'affichage
    const [selectedItem, setSelectedItem] = useState(null);
    const [dbItem, isLoading, error, reset] = useFetch('/admin/api/standardItem/'+type+'/'+itemId+'/show');
    useEffect(() => {
        if(dbItem) {
            setSelectedItem(dbItem);
        }
    }, [dbItem])


    return (
        <>
            <div className={'admin-form-group suggestedProducts-group' + (formError ? ' is-invalid': '')}>
                <label>{title}</label>
                {
                    isLoading && <div className="admin-form-info">Chargement...</div>
                }
                {
                    selectedItem && <SelectedItem item={selectedItem} onRemove={() => setSelectedItem(null)} />
                }
                {
                    !selectedItem && !isLoading && <StandardItemSelector searchEndpoint={'/admin/api/'+type+'/search'} onSelect={(item) => setSelectedItem(item)} />
                }
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

            {
                selectedItem && (
                    <select hidden={true} name={name} value={selectedItem.id} onChange={() => {}}>
                        <option className="suggestedProducts-hidden-option" value={selectedItem.id} data-ref={selectedItem.ref}>{selectedItem.ref}</option>
                    </select>
                )
            }
        </>

        
    )
}

