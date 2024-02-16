
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ProductIndex } from '../Components/Shop/ProductIndex';
import { configureLanguage } from '../functions/language/configureLanguage';

configureLanguage();



const categoryShow = document.getElementById('category-show');


const categoryShowRoot = createRoot(categoryShow);
categoryShowRoot.render(
    <ProductIndex categoryId={categoryShow.dataset.categoryid} subCategoryId={categoryShow.dataset.subcategoryid} />
);