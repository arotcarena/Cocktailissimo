import React from 'react';
import { createRoot } from "react-dom/client";
import { SubSections } from '../Components/Blog/Recipe/RecipeShow/SubSections';
import '../styles/Blog/Recipe/recipeShow.css';
import '../styles/Shop/ProductShow/questionAnswer.css';
import '../styles/Shop/ProductShow/productShowReview.css';
import { configureLanguage } from '../functions/language/configureLanguage';

configureLanguage();


const subSections = document.getElementById('recipe-show-sub-sections');

const recipe = {
    id: subSections.dataset.recipeid,
    title: JSON.parse(subSections.dataset.recipetitle),
    picturePath: JSON.parse(subSections.dataset.recipepicturepath),
    pictureAlt: JSON.parse(subSections.dataset.recipepicturealt),
}
const subSectionsRoot = createRoot(subSections);
subSectionsRoot.render(
    <SubSections recipe={recipe} />
)
