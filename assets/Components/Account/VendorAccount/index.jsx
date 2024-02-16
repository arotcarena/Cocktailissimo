import React, { useRef, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useFetch } from '../../../CustomHook/fetch/useFetch';
import { VendorSpaceProduct, useVendorSpaceProduct } from './VendorSpace/VendorSpaceProduct';
import { VendorSpaceQuestion, useVendorSpaceQuestion } from './VendorSpace/VendorSpaceQuestion';
import { VendorAccountHeader } from './VendorAccountHeader';
import { useRoutesTrans } from '../../../CustomHook/routes/useRoutesTrans';
import { DetailsPersonal } from './VendorDetails/DetailsPersonal';
import { DetailsCompany } from './VendorDetails/DetailsCompany';
import { DetailsSenderAddress } from './VendorDetails/DetailsSenderAddress';
import { DetailsPayment } from './VendorDetails/Payment';
import { VendorSpaceShop } from './VendorSpace/VendorSpaceShop';
import { VendorSpaceReview } from './VendorSpace/VendorSpaceReview';
import { VendorSpacePurchase } from './VendorSpace/VendorSpacePurchase';
import { useCRUD } from '../../../CustomHook/CRUD/useCRUD';
import { useControlledFetch } from '../../../CustomHook/fetch/useControlledFetch';
import { LogoutButton } from '../../../UI/Button/LogoutButton';
import { CustomerAddress } from '../CustomerAccount/CustomerAddress';
import { CustomerPurchase } from '../CustomerAccount/CustomerPurchase';
import i18n from '../../../entrypoints/i18n';

/**
 * 
 * @param {Object} user ({id: ..., company: {usualName: ...}}) 
 * @returns 
 */
export const VendorAccount = ({dbVendor}) => {
    //on met la gestion des états des sous-composants ici pour éviter de recharger à chaque changement d'onglet

    const [vendor, setVendor] = useState(dbVendor);

    //DETAILS
        //payment
        const [stripeAccount, stripeAccountIsLoading, e] = useFetch('/'+i18n.language+'/api/stripeConnect/getAccount');
    //BUYERSPACE
        //address
        const addressCrud = useCRUD('/'+ i18n.language +'/api/address');
        //purchase
        const purchaseManager = useControlledFetch('/'+ i18n.language +'/api/purchase/findPaginatedLight');
    //VENDORSPACE
        //product
        const vendorProductProps = useVendorSpaceProduct();
        //question
            //  on renderChange
            const vendorQuestionControlsRef = useRef(null);
            const scrollToControls = () => {
                setTimeout(() => {
                    const y = controlsRef.current.getBoundingClientRect().y;
                    window.scrollBy(0, y - (window.innerHeight / 4));
                }, 0);
            };
            const vendorQuestionProps = useVendorSpaceQuestion(vendor.id, scrollToControls);


    const [nav, basePath] = useRoutesTrans('vendorAccount');

    if(nav) {
        return (
            <div className="vendorDashboard">
                <BrowserRouter basename={basePath}>
                    
                    <VendorAccountHeader vendor={vendor} nav={nav} />

                    <div className="account-body">
                        <Routes>
                            <Route path="/" element={<Navigate to={nav.details.personal.path}/>} />

                            {/* details */}
                            <Route path={nav.details.index.path} element={<Navigate to={nav.details.personal.path}/>} />
                                <Route path={nav.details.personal.path} element={(
                                    <DetailsPersonal vendor={vendor} setVendor={setVendor} />
                                )} />
                                <Route path={nav.details.company.path} element={(
                                    <DetailsCompany vendor={vendor} setVendor={setVendor} />
                                )} />
                                <Route path={nav.details.senderAddress.path} element={(
                                    <DetailsSenderAddress senderAddress={vendor.company.senderAddress} />
                                )} />
                                <Route path={nav.details.payment.path} element={(
                                    <DetailsPayment vendor={vendor} stripeAccount={stripeAccount} stripeAccountIsLoading={stripeAccountIsLoading} />
                                )} />

                            {/* buyerSpace */}
                            <Route path={nav.buyerSpace.index.path} element={<Navigate to={nav.buyerSpace.deliveryAddress.path}/>} />
                                <Route path={nav.buyerSpace.deliveryAddress.path} element={(
                                    <CustomerAddress addressCrud={addressCrud} />
                                )} />
                                <Route path={nav.buyerSpace.purchase.path} element={(
                                    <CustomerPurchase manager={purchaseManager} />
                                )} />

                            {/* vendorSpace */}
                            <Route path={nav.vendorSpace.index.path} element={<Navigate to={nav.vendorSpace.shop.path}/>} />
                                <Route path={nav.vendorSpace.shop.path} element={(
                                    <VendorSpaceShop vendor={vendor} />
                                )} />
                                <Route path={nav.vendorSpace.product.path} element={(
                                    <VendorSpaceProduct {...vendorProductProps} />
                                )} />
                                <Route path={nav.vendorSpace.review.path} element={(
                                    <VendorSpaceReview vendor={vendor} />
                                )} />
                                <Route path={nav.vendorSpace.purchase.path} element={(
                                    <VendorSpacePurchase />
                                )} />
                                <Route path={nav.vendorSpace.question.path} element={(
                                    <VendorSpaceQuestion {...vendorQuestionProps} ref={vendorQuestionControlsRef} />
                                )} />
                            
                        </Routes>
                    </div>
                </BrowserRouter>
                
                
                <div className="account-footer">
                    <LogoutButton className="account-link logout-link" />
                </div>
            </div>
        )
    }
}