import React from 'react';
import { createRoot } from "react-dom/client";
import { ShowImg } from '../Components/Shop/ProductShow/ShowImg';
import '../styles/Shop/ProductShow/productShowReview.css';
import '../styles/Shop/ProductShow/questionAnswer.css';
import { SubSections } from '../Components/Shop/ProductShow/SubSections';
import { Logistic } from '../Components/Shop/ProductShow/Logistic';
import { configureLanguage } from '../functions/language/configureLanguage';

configureLanguage();


//affichage des pictures
const productShowImgWrapper = document.getElementById('product-show-img-wrapper');

let pictures = [];

for (let index = 0; index <= 3; index++) {
    const picture = productShowImgWrapper.querySelector('#picture'+index);
    if(picture) {
        pictures.push({
            id: picture.dataset.id,
            src: JSON.parse(picture.dataset.src),
            srcSmall: JSON.parse(picture.dataset.srcsmall),
            alt: JSON.parse(picture.dataset.alt)
        });
    }
}

const productShowImgWrapperRoot = createRoot(productShowImgWrapper);
productShowImgWrapperRoot.render(
    <ShowImg pictures={pictures} />
);






//gestion packaging, quantity, stock, price
const logistic = document.getElementById('product-show-logistic');
const logisticRoot = createRoot(logistic);

const packagingChoices = JSON.parse(logistic.dataset.packagingchoices);
const initialPackaging = JSON.parse(logistic.dataset.currentpackaging);

logisticRoot.render(
    <Logistic packagingChoices={packagingChoices} initialPackaging={initialPackaging} />
)


//subsections
const subSections = document.getElementById('product-show-sub-sections');
const product = {
    id: subSections.dataset.productid,
    designation: JSON.parse(subSections.dataset.productdesignation),
    firstPicture: {
        path: JSON.parse(subSections.dataset.productpicturepath),
        alt: JSON.parse(subSections.dataset.productpicturealt)
    },
    basePackaging: initialPackaging
}

const subSectionsRoot = createRoot(subSections);
subSectionsRoot.render(
    <SubSections product={product} />
)
