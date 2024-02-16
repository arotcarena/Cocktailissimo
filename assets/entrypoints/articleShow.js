import React from 'react';
import { createRoot } from "react-dom/client";
import { SubSections } from '../Components/Blog/Article/ArticleShow/SubSections';
import '../styles/Blog/Recipe/recipeShow.css';
import '../styles/Shop/ProductShow/questionAnswer.css';
import '../styles/Shop/ProductShow/productShowReview.css';
import { configureLanguage } from '../functions/language/configureLanguage';

configureLanguage();


const subSections = document.getElementById('article-show-sub-sections');
const article = {
    id: subSections.dataset.articleid,
    title: JSON.parse(subSections.dataset.articletitle),
    picturePath: JSON.parse(subSections.dataset.articlepicturepath),
    pictureAlt: JSON.parse(subSections.dataset.articlepicturealt),
}
const subSectionsRoot = createRoot(subSections);
subSectionsRoot.render(
    <SubSections article={article} />
)
