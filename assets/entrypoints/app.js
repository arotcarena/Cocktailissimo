/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application
import '../bootstrap';
import '../styles/app.css';
import '../styles/Flashes/index.css';
import '../styles/Homepage/index.css';
import '../styles/Footer/index.css';
import '../styles/Security/index.css';
import '../styles/UI/form.css';
import '../styles/Breadcrumb/index.css';
import '../styles/Static/index.css';
import '../styles/header/HeaderTop/cart.css';
import '../styles/Blog/Recipe/recipeShow.css';

/** les fichiers suivants sont ici pour éviter pb chunks */
import '../styles/Shop/ProductIndex/index.css';
import '../styles/Shop/ProductIndex/productCard.css';
import '../styles/Shop/ProductShow/index.css';
import '../styles/Shop/ProductShow/productShowSubSections.css';
import '../styles/UI/suggestList.css';
import '../styles/UI/Pagination/index.css';
import '../styles/UI/Container/modal.css';
import '../styles/UI/CustomCarousel/index.css';
import '../styles/UI/SlickCarousel/slick.css';
import '../styles/UI/SlickCarousel/slickTheme.css';
import '../styles/Shop/linkedProductsCarousel.css';


import React from 'react';
import { createRoot } from 'react-dom/client';
import { TopScrollArrow } from '../UI/TopScrollArrow';
import { apiFetch } from '../functions/api';
import i18n from './i18n';
import { Security } from '../Config/Security';
import { configureLanguage } from '../functions/language/configureLanguage';


configureLanguage();


const topScrollArrowRoot = createRoot(document.getElementById('top-scroll-arrow'));
topScrollArrowRoot.render(
    <TopScrollArrow />
)




//session storage
//on auth event : suppression des items de session storage
if(document.getElementById('auth-event')) {
    sessionStorage.removeItem('checkout');
    sessionStorage.removeItem('check_st');
    sessionStorage.removeItem('light_user');
}
//geoloc country
const countryElt = document.getElementById('c-iso');
if(countryElt) {
    sessionStorage.setItem('C_ISO', countryElt.dataset.value);
}



//récupération du user
if(!sessionStorage.getItem('light_user')) {
    apiFetch('/'+i18n.language+'/api/user/getLightUser')
    .then(user => {
        if(user) {
            sessionStorage.setItem('light_user', Security.encryptFromObject(user));
        } else {
            sessionStorage.setItem('light_user', 'false');
        }
    })
    .catch(e => console.error(e))
    ;
}



