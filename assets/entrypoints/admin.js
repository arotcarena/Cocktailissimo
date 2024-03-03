// any CSS you import will output into a single css file (app.css in this case)
import '../styles/Admin/index.css';
import '../styles/Admin/header.css';
import '../styles/Admin/footer.css';
import '../styles/Admin/home.css';
import '../styles/Admin/form.css';
import '../styles/Admin/form_filters.css';
import '../styles/Admin/UI/suggestList.css';
import '../styles/Admin/pagination.css';
import '../styles/Admin/table.css';
import '../styles/Admin/customTable.css';
import '../styles/Admin/UI/buttons.css';
import '../styles/Admin/breadcrumb.css';
import '../styles/Admin/Product/show.css';
import '../styles/Admin/flashes.css';
import '../styles/Admin/review.css';
import '../styles/Admin/alerts.css';

// start the Stimulus application
import '../bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { PurchaseShippingStatusUpdater } from '../Components/Admin/PurchaseShippingStatusUpdater';
import { ReviewModerator } from '../Components/Admin/ReviewModerator';
import i18n from './i18n';
import { IngredientsQuantitiesInput } from '../Components/Admin/IngredientsQuantitiesInput';
import { SelectLinkedItems } from '../Components/Admin/SelectLinkedItems';
import { AdminPictureUpload } from '../Components/Admin/AdminPictureUpload';
import { AdminAnswerControl } from '../Components/Admin/AdminAnswerControl';
import { PackagingChoicesInput } from '../Components/Admin/PackagingChoicesInput';
import { SelectUniqueItem } from '../Components/Admin/SelectUniqueItem';


i18n.changeLanguage('fr');

//on auth event : suppression des items de session storage
if(document.getElementById('auth-event')) {
    sessionStorage.removeItem('checkout');
    sessionStorage.removeItem('check_st');
    sessionStorage.removeItem('light_user');
}


//select linked items
[
    document.getElementById('select-products-input'),
    document.getElementById('select-recipes-input'),
    document.getElementById('select-articles-input')
].forEach(input => {
    if(input) {
        const error = input.querySelector('.admin-form-error ul li:first-child')?.innerHTML ?? null;
        const root = createRoot(input);
        root.render(
            <SelectLinkedItems
                indexEndpoint={input.dataset?.indexendpoint}
                searchEndpoint={input.dataset?.searchendpoint} 
                name={input.dataset.name} 
                title={input.dataset.title}
                formError={error} 
            />
        )
    }
});



//select unique item
document.querySelectorAll('.select-unique-item-input').forEach(input => {
    const error = input.querySelector('.admin-form-error ul li:first-child')?.innerHTML ?? null;
    const root = createRoot(input);
    root.render(
        <SelectUniqueItem 
            type={input.dataset.type}
            itemId={input.dataset.itemid}
            title={input.dataset.title}
            name={input.dataset.name}
            formError={error}
        />
    )
})


//product form : packagingChoices input
if(document.getElementById('packaging-choices-input')) {
    const input = document.getElementById('packaging-choices-input');
    const root = createRoot(input);
    root.render(
        <PackagingChoicesInput 
            name={input.dataset.name} 
            value={input.dataset.value} 
            productId={input.dataset.productid} 
            vatLevel={input.dataset.vatlevel} // data-vatlevel est ajouté en js par le productform_controller.js
        />
    )
}


document.querySelectorAll('.purchase-shipping-status-updater').forEach(purchaseStatusUpdater => {
    const purchaseStatusUpdaterRoot = createRoot(purchaseStatusUpdater);

    purchaseStatusUpdaterRoot.render(
        <PurchaseShippingStatusUpdater
            shippingInfoId={purchaseStatusUpdater.dataset.shippinginfoid} 
            initialStatus={purchaseStatusUpdater.dataset.currentstatus} 
        />
    );
});


if(document.querySelector('.review-moderator')) {
    document.querySelectorAll('.review-moderator').forEach(reviewModerator => {
        const reviewModeratorRoot = createRoot(reviewModerator);
        reviewModeratorRoot.render(
            <ReviewModerator id={reviewModerator.dataset.id} initialStatus={reviewModerator.dataset.status} />
        );
    })
}


if(document.getElementById('ingredients-quantities-input')) {
    const input = document.getElementById('ingredients-quantities-input');
    const root = createRoot(input);
    root.render(
        <IngredientsQuantitiesInput name={input.dataset.name} value={input.dataset.value} />
    )
}

//picture upload field
if(document.querySelector('.admin-picture-upload')) {
    document.querySelectorAll('.admin-picture-upload').forEach(elt => {
        const resizeWidth = parseInt(elt.dataset.resizewidth ?? '500');
        const resizeHeight = parseInt(elt.dataset.resizeheight ?? '500');
        const root = createRoot(elt);
        root.render(
            <AdminPictureUpload 
                name={elt.dataset.name} 
                label={elt.dataset.label} 
                defaultBase64img={elt.dataset.value ?? null} 
                resizeWidth={resizeWidth} 
                resizeHeight={resizeHeight} 
            />
        )
    })
}


//admin answer
if(document.querySelector('.admin-answer-control')) {
    document.querySelectorAll('.admin-answer-control').forEach(elt => {
        const root = createRoot(elt);
        root.render(
            <AdminAnswerControl ownerClass={elt.dataset.ownerclass} ownerId={elt.dataset.ownerid} />
        )
    })
}
