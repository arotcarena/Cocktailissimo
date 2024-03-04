import React from 'react';
import { CloseButton } from '../../../../UI/Button/CloseButton';
import { AdminShowCardRow } from '../../../../styles/UI/Admin/Form/AdminShowCardRow';
import { priceFormater } from '../../../../functions/formaters';
import { EditButton } from '../../../../UI/Button/EditButton';
import { Modal } from '../../../../UI/Container/Modal';
import { useOpenState } from '../../../../CustomHook/state/useOpenState';
import { PackagingChoicesForm } from './PackagingChoicesForm';

export const AdminPackagingCard = ({packaging, remove, update, packagingChoices, productId, selectAsBase}) => {

    const handleRemove = () => {
        remove(packaging);
    }

    const handleUpdate = (formData) => {
        update(packaging.publicRef, formData);
    };

    const [formIsOpen, openForm, closeForm] = useOpenState(false);

    const handleClick = e => {
        e.preventDefault();
        selectAsBase(packaging);
    }

    return (
        <>
            <div className={'admin-select-card admin-packaging-card' + (packaging.base ? ' active': '')} onClick={handleClick} title={packaging.base ? 'Conditionnement de base': 'Choisir comme conditionnement de base'}>
                <CloseButton className="admin-select-card-closer" onClick={handleRemove} />
                <EditButton className="admin-select-card-edit-button" onClick={openForm} />
                
                {
                    packaging.base && (
                        <div className="center-wrapper">
                            <div className="admin-select-card-badge">Conditionnement de base</div>
                        </div>
                    )
                }

                <AdminShowCardRow label="Réf. publique" value={packaging.publicRef} />
                <AdminShowCardRow label="Réf. privée" value={packaging.privateRef} />
                <AdminShowCardRow label="Code EAN" value={packaging.eanCode} />

                <AdminShowCardRow label="Label (EN)" value={packaging.enLabel} lang="en" />
                <AdminShowCardRow label="Label (FR)" value={packaging.frLabel} lang="fr" />
                <AdminShowCardRow label="Label (ES)" value={packaging.esLabel} lang="es" />
                <AdminShowCardRow label="Label (IT)" value={packaging.itLabel} lang="it" />

                <AdminShowCardRow label="Prix public (HT)" value={priceFormater(packaging.consumerPriceHT)} />
                <AdminShowCardRow label="Prix pro (HT)" value={priceFormater(packaging.businessPriceHT)} />
                <AdminShowCardRow label="Poids (g)" value={packaging.weight} />
                <AdminShowCardRow label="Droits d'accise" value={
                    packaging.exciseTax ? priceFormater(packaging.exciseTax): ''
                } />
                <AdminShowCardRow label="Cotisation Sécurité Sociale (France)" value={
                    packaging.frSocialTax ? priceFormater(packaging.frSocialTax): ''
                } />
                <AdminShowCardRow label="Stock" value={packaging.stock} />
            </div>
            <Modal isOpen={formIsOpen} close={closeForm} animated={false} additionalClass="admin-form-modal">
                <PackagingChoicesForm onSubmitSuccess={handleUpdate} close={closeForm} packaging={packaging} packagingChoices={packagingChoices} productId={productId} />
            </Modal>
        </>
    )
}