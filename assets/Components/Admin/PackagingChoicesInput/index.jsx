import React, { useEffect, useState } from 'react';
import { PlusButton } from '../../../UI/Button/PlusButton';
import { useOpenState } from '../../../CustomHook/state/useOpenState';
import { Modal } from '../../../UI/Container/Modal';
import { PackagingChoicesForm } from './PackagingChoicesForm';
import { AdminPackagingCard } from './AdminPackagingCard';

export const PackagingChoicesInput = ({name, value, productId, vatLevel}) => {

    //à l'ouverture, si une value est passée on la prend en compte
    useEffect(() => {
        if(value) {
            setPackagingChoicesString(value);
            setPackagingChoices(JSON.parse(value));
        }
    }, [value]);

    //état local convertit en string pour submit
    const [packagingChoicesString, setPackagingChoicesString] = useState('');
    //état local
    const [packagingChoices, setPackagingChoices] = useState([]);
    //quand état local change, on met à jour la string
    useEffect(() => {
        if(packagingChoices.length < 1) {
            setPackagingChoicesString(''); // pour que coté serveur on puisse valider Assert\NotBlank
        } else {
            //si un seul packagingChoices, on le met comme packaging de base d'office
            if(packagingChoices.length === 1) {
                packagingChoices[0].base = true;
            }
            setPackagingChoicesString(JSON.stringify(packagingChoices));
        }
    }, [packagingChoices]);

    

    
    const removePackaging = packaging => {
        setPackagingChoices(packagingChoices => packagingChoices.filter(p => p.publicRef !== packaging.publicRef));
        //si le packaging supprimé était le packaging de base, il faut en désigner un (n'importe lequel) d'office
        if(packaging.base) {
            setPackagingChoices(packagingChoices => {
                packagingChoices[0].base = true;
                return packagingChoices;
            })
        }
    }

    const addPackaging = newPackaging => {
        setPackagingChoices(packagingChoices => ([
            ...packagingChoices,
            newPackaging
        ]));
    };

    const updatePackaging = (publicRef, packaging) => {
        setPackagingChoices(packagingChoices => (
            packagingChoices.map(p => p.publicRef === publicRef ? packaging: p)
        ));
    }

    const handleSelectAsBase = (packaging) => {
        setPackagingChoices(packagingChoices => packagingChoices.map(pc => {
            if(pc.publicRef === packaging.publicRef) {
                pc.base = true;
            } else {
                pc.base = false;
            }
            return pc;
        }));
    };


    const [formIsOpen, openForm, closeForm] = useOpenState(false);

    return (
        <div className="admin-form-group">
            <label>Conditionnements *</label>
            <div className="admin-select-list">
                {
                    packagingChoices.map(packaging => (
                        <AdminPackagingCard 
                            key={packaging.publicRef} 
                            packaging={packaging} 
                            remove={removePackaging} 
                            update={updatePackaging} 
                            packagingChoices={packagingChoices}
                            productId={productId}
                            selectAsBase={handleSelectAsBase}
                        />
                    ))
                }
            </div>
            <div>
                <PlusButton className="admin-add-button" onClick={openForm} />
            </div>
            <Modal isOpen={formIsOpen} close={closeForm} animated={false} additionalClass="admin-form-modal">
                <PackagingChoicesForm 
                    onSubmitSuccess={addPackaging} 
                    close={closeForm} 
                    packagingChoices={packagingChoices} 
                    productId={productId}
                    vatLevel={vatLevel}
                />
            </Modal>
            <input type="hidden" name={name} value={packagingChoicesString} />
        </div>
    )
}