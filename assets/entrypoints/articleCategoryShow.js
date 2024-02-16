import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArticleIndex } from '../Components/Blog/Article/ArticleIndex';
import { configureLanguage } from '../functions/language/configureLanguage';

configureLanguage();



const articleIndex = document.getElementById('article-category-show');


const articleIndexRoot = createRoot(articleIndex);
articleIndexRoot.render(
    <ArticleIndex subCategoryId={articleIndex.dataset.subcategoryid} />
);