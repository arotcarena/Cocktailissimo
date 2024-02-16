import React from 'react';
import { createRoot } from 'react-dom/client';
import { Gazette } from '../Components/Homepage/Gazette';
import { PostLinkedProducts } from '../Components/Homepage/PostLinkedProducts';
import '../styles/Homepage/Social/index.css';
import { configureLanguage } from '../functions/language/configureLanguage';
import { HomepageCarousel } from '../Components/Homepage/HomepageCarousel';

configureLanguage();

const gazetteRoot = createRoot(document.getElementById('home-gazette'));
gazetteRoot.render(
    <Gazette />
);

const recipeRoot = createRoot(document.getElementById('homepage-carousel'));
recipeRoot.render(
    <HomepageCarousel />
);


const postLinkedProductsElts = document.querySelectorAll('.post-linked-products');
postLinkedProductsElts.forEach(elt => {
    const root = createRoot(elt);
    root.render(
        <PostLinkedProducts postId={JSON.parse(elt.dataset.postid)} />
    )
})