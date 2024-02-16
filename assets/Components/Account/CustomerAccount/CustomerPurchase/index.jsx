import React, { useEffect } from 'react';
import { Loader } from '../../../../UI/Icon/Loader';
import { PurchaseCard } from './PurchaseCard';
import '../../../../styles/Account/purchase.css';
import { PaginationControls } from '../../../../UI/Pagination/PaginationControls';
import { MainLoader } from '../../../../UI/Icon/MainLoader';
import { useTranslation } from 'react-i18next';

export const CustomerPurchase = ({manager: [purchaseFetch, data, purchaseIsLoading, purchaseErrors]}) => {
    const {t} = useTranslation('messages');

    useEffect(() => {
        if(!data) {
            purchaseFetch({page: '1'});
        }
    }, []);

    const handlePageChange = newPage => {
        purchaseFetch({page: newPage});
    }

    if(purchaseIsLoading && !data) {
        return <MainLoader />
    } else if(!data) {
        return <div className="account-purchase">{t('error.temporary_unavailable_infos')}</div>
    } else if(data.count === 0) {
        return <div className="account-purchase">{t('count.purchases', {count: 0})}</div>
    }
    return (
        <div className="account-purchase">
            <div className="purchase-count">{t('count.purchases', {count: data.count})}</div>
            <ul className={'purchase-list' + (purchaseIsLoading ? ' loading': '')}>
                {
                    data.purchases.map(purchase => <PurchaseCard key={purchase.id} purchase={purchase} />)
                }
                { purchaseIsLoading && <Loader additionalClass="main-loader" />}
            </ul>
            <PaginationControls currentPage={data.currentPage} maxPage={data.maxPage} pageChange={handlePageChange} isLoading={purchaseIsLoading} lang="fr" />
        </div>
    )
}