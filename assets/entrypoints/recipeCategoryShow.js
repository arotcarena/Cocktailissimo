import React from 'react';
import { createRoot } from 'react-dom/client';
import { RecipeIndex } from '../Components/Blog/Recipe/RecipeIndex';
import { configureLanguage } from '../functions/language/configureLanguage';

configureLanguage();



const recipeCategoryShow = document.getElementById('recipe-category-show');



const recipeCategoryShowRoot = createRoot(recipeCategoryShow);
recipeCategoryShowRoot.render(
    <RecipeIndex subCategoryId={recipeCategoryShow.dataset.subcategoryid} />
);