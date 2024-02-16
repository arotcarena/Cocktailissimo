
import React from 'react';
import { createRoot } from 'react-dom/client';
import i18n from './i18n';
import { VendorShop } from '../Components/Shop/VendorShop';
import '../styles/Search/index.css';
import '../styles/Shop/ProductShow/productShowReview.css';
import '../styles/Shop/ProductShow/questionAnswer.css';
import { VendorShopReview } from '../Components/Shop/VendorShop/VendorShopReview';
import { configureLanguage } from '../functions/language/configureLanguage';

configureLanguage();



const vendorShop = document.getElementById('vendor-shop');
const vendorId = vendorShop.dataset.vendorid;


const vendorShopRoot = createRoot(vendorShop);
vendorShopRoot.render(
    <VendorShop vendorId={vendorId} />
);


const vendorReviews = document.getElementById('vendor-shop-reviews');
const vendorReviewsRoot = createRoot(vendorReviews);
vendorReviewsRoot.render(
    <VendorShopReview 
        fetchAllEntrypoint={'/'+i18n.language+'/api/review/filterByVendorId/'+vendorId}
    />
)