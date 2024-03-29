import React, { useEffect, useState } from 'react';
import { CloseButton } from '../../../../UI/Button/CloseButton';
import { AdminShowCardRow } from '../../../../styles/UI/Admin/Form/AdminShowCardRow';
import { priceFormater } from '../../../../functions/formaters';
import { EditButton } from '../../../../UI/Button/EditButton';
import { Modal } from '../../../../UI/Container/Modal';
import { useOpenState } from '../../../../CustomHook/state/useOpenState';
import { PackagingChoicesForm } from './PackagingChoicesForm';
import { calcPriceTTCFR } from '../../../../functions/price/vatCalculator';
import { calcMargin } from '../../../../functions/price/marginCalculator';

export const AdminPackagingCard = ({packaging, remove, update, packagingChoices, productId, selectAsBase, vatLevel}) => {

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

    //calcul des prix ttc fr
    const [consumerPriceTTCFR, setConsumerPriceTTCFR] = useState(null);
    const [businessPriceTTCFR, setBusinessPriceTTCFR] = useState(null);
    useEffect(() => {
        (async () => {
            const cpTTCFR = await calcPriceTTCFR(packaging.consumerPriceHT, vatLevel);
            setConsumerPriceTTCFR(cpTTCFR);
            const bpTTCFR = await calcPriceTTCFR(packaging.businessPriceHT, vatLevel);
            setBusinessPriceTTCFR(bpTTCFR);
        })();
    }, [packaging.consumerPriceHT, packaging.businessPriceHT, vatLevel]);

    //calcul des marges
    const [margin, setMargin] = useState({
        consumer: null,
        business: null
    });
    useEffect(() => {
        if(packaging.supplyPriceHT) {
            setMargin({
                consumer: calcMargin(packaging.supplyPriceHT, packaging.consumerPriceHT),
                business: calcMargin(packaging.supplyPriceHT, packaging.businessPriceHT)
            });
        }
    }, [packaging.consumerPriceHT, packaging.businessPriceHT, packaging.supplyPriceHT]);

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

                <AdminShowCardRow label="Prix d'achat (HT)" value={
                    packaging.supplyPriceHT ? priceFormater(packaging.supplyPriceHT): '-'
                } />
                {
                    consumerPriceTTCFR && (
                        <AdminShowCardRow label="Prix public (TTC France)" value={priceFormater(consumerPriceTTCFR)} />
                    )
                }
                {
                    businessPriceTTCFR && (
                        <AdminShowCardRow label="Prix pro (TTC France)" value={priceFormater(businessPriceTTCFR)} />
                    )
                }
                <AdminShowCardRow label="Prix public (HT)" value={priceFormater(packaging.consumerPriceHT)} />
                <AdminShowCardRow label="Prix pro (HT)" value={priceFormater(packaging.businessPriceHT)} />
                {
                    margin.consumer && (
                        <AdminShowCardRow label="Marge public" value={margin.consumer.rate + '%' + ' (' + priceFormater(margin.consumer.amount) + ')'} />
                    )
                }
                {
                    margin.business && (
                        <AdminShowCardRow label="Marge pro" value={margin.business.rate + '%' + ' (' + priceFormater(margin.business.amount) + ')'} />
                    )
                }

                <AdminShowCardRow label="Poids (g)" value={packaging.weight} />
                
                <AdminShowCardRow label="Droits d'accise" value={
                    packaging.exciseTax ? priceFormater(packaging.exciseTax): '-'
                } />
                <AdminShowCardRow label="Cotisation Sécurité Sociale (France)" value={
                    packaging.frSocialTax ? priceFormater(packaging.frSocialTax): '-'
                } />

                <AdminShowCardRow label="Stock" value={packaging.stock} />
            </div>
            <Modal isOpen={formIsOpen} close={closeForm} animated={false} additionalClass="admin-form-modal">
                <PackagingChoicesForm 
                    onSubmitSuccess={handleUpdate} 
                    close={closeForm} 
                    packaging={packaging} 
                    packagingChoices={packagingChoices} 
                    productId={productId} 
                    vatLevel={vatLevel} 
                />
            </Modal>
        </>
    )
}