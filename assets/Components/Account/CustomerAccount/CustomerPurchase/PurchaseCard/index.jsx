import React, { useEffect } from 'react';
import { Loader } from '../../../../../UI/Icon/Loader';
import { ExpandMoreIcon } from '../../../../../UI/Icon/ExpandMoreIcon';
import { PriceShow } from '../../../../../UI/Product/PriceShow';
import { PurchaseDetails } from './PurchaseDetails';
import { PurchaseVendorGroupCard } from './PurchaseVendorGroupCard';
import { PurchaseTotals } from './PurchaseTotals';
import { useControlledFetch } from '../../../../../CustomHook/fetch/useControlledFetch';
import { useToggleBoolState } from '../../../../../CustomHook/state/useToggleState';
import { useTranslation } from 'react-i18next';

export const PurchaseCard = ({purchase}) => {
    const {t, i18n} = useTranslation('messages');

    //remplacer par useOpenState
    const [isExpanded, toggleExpand] = useToggleBoolState(false); 

    const [fetchFullPurchase, fullPurchase, fullPurchaseIsLoading, error] = useControlledFetch('/'+ i18n.language +'/api/purchase/'+purchase.id+'/findOneFull');
    useEffect(() => {
        if(isExpanded) {
            if(!fullPurchase) {
                fetchFullPurchase();
            }
        }
    }, [isExpanded]);

    return (
        <div className={'purchase-item' + (isExpanded ? ' active': '')} onClick={toggleExpand}>
            <div className="purchase-item-top-line">
                <div>{purchase.ref}</div>
            </div>
            <div className="purchase-item-row purchase-item-header">
                <div className="purchase-light-item">
                    <div className="strong">{t('count.commercial_items', {count: purchase.countArticles})}</div>
                </div>
                <span className="purchase-light-item">
                    <PriceShow price={purchase.totalPrice} />
                </span>
            </div>
            {
                isExpanded && (
                    <div className="purchase-item-body" onClick={e => e.stopPropagation()}>
                        <FullPurchase fullPurchase={fullPurchase} isLoading={fullPurchaseIsLoading} />
                    </div>
                )
            }
            <div className="purchase-item-bottom-line">
                <div>{purchase.createdAt}</div>
                <div className="purchase-item-bottom-strong">{purchase.status === 'status_paid' ? t('in_process'): t(purchase.status, {ns: 'configs'})}</div>
            </div>
            <button type="button" className="expand-button">
                {isExpanded ? <ExpandMoreIcon additionalClass="expanded" />: <ExpandMoreIcon />}
            </button>
        </div>
    )
}

const FullPurchase = ({fullPurchase, isLoading, close}) => {
    const {t} = useTranslation('messages');

    if(isLoading) {
        return <Loader />
    } else if(!fullPurchase) {
        return <div>{t('error.temporary_unavailable_infos')}</div>
    }

    return (
        <div className="purchase-full-wrapper">
            <div className="purchase-full-group">
                <div className="purchase-vendor-groups-list">
                    {
                        fullPurchase.purchaseVendorGroups.map((purchaseVendorGroup, index) => (
                            <PurchaseVendorGroupCard 
                                key={purchaseVendorGroup.id} 
                                purchaseVendorGroup={purchaseVendorGroup} 
                                position={(index + 1) + '/' + fullPurchase.purchaseVendorGroups.length }
                            />
                        ))
                    }
                </div>
                <PurchaseTotals purchase={fullPurchase} />
            </div>
            <PurchaseDetails purchase={fullPurchase} />
        </div>
    )
}