import React, { useEffect, useState } from 'react';

import { ProductIndex } from '../../Shop/ProductIndex';
import { RecipeIndex } from '../../Blog/Recipe/RecipeIndex';
import { ArticleIndex } from '../../Blog/Article/ArticleIndex';
import { Loader } from '../../../UI/Icon/Loader';
import { QFilter } from '../../../UI/Search/QFilter';
import { useTranslation } from 'react-i18next';
import { getUrlParam, setUrlParam } from '../../../functions/url';
import { useGetUser } from '../../../CustomHook/useGetUser';



const TYPE_PRODUCT = 'type_product';
const TYPE_RECIPE = 'type_recipe';
const TYPE_ARTICLE = 'type_article';

export const SearchIndex = () => {
    const {t} = useTranslation('messages');

    
    //WITHOUT_SHOP //supprimer ça ////////////////////
    const {user, updateUser} = useGetUser();
    const [shopIsOpen, setShopIsOpen] = useState(false);
    useEffect(() => {
        if(user && ['consumer@email.com', 'pro@email.com', 'vendor@email.com'].includes(user.email)) {
            setShopIsOpen(true);
            setType(TYPE_PRODUCT);
        }
    }, [user]);
    /////////////////////////////////////////////////////

    const [type, setType] = useState(TYPE_RECIPE); // WITHOUT_SHOP //remettre type product par défaut
    const [q, setQ] = useState(null);

    //on récupère le param q de l'url s'il est présent
    useEffect(() => {
        const urlQ = getUrlParam('q');
        setQ(urlQ ?? '');
    }, []);
    //à chaque changement de q, on le met dans l'url
    useEffect(() => {
        setUrlParam('q', q);
    }, [q]);


    //pour afficher les count pour chaque type
    const [countProducts, setCountProducts] = useState(null);
    const [countRecipes, setCountRecipes] = useState(null);
    const [countArticles, setCountArticles] = useState(null);

    //en attendant d'avoir récupéré le param q dans l'url
    if(q === null) {
        return <Loader />;
    }


    return (
        <> 
            <div className="search-index-header">
                <QFilter q={q} setQ={setQ} additionalClass="search-index-input">{t('search_placeholder')}</QFilter>
                <div className="search-index-controls">
                    {
                        //WITHOUT_SHOP //supprimer la condition
                       shopIsOpen && (
                            <button 
                                type="button" 
                                onClick={e => setType(TYPE_PRODUCT)} 
                                className={'search-index-controls-button' + (type === TYPE_PRODUCT ? ' active': '')}
                            >
                                {t('products')} <span>{countProducts ? ('('+countProducts+')'): ''}</span>
                            </button>
                        )
                    }
                    <button 
                        type="button" 
                        onClick={e => setType(TYPE_RECIPE)} 
                        className={'search-index-controls-button' + (type ===TYPE_RECIPE ? ' active': '')}
                    >
                        {t('recipes')} <span>{countRecipes ? ('('+countRecipes+')'): ''}</span>
                    </button>
                    <button 
                        type="button" 
                        onClick={e => setType(TYPE_ARTICLE)} 
                        className={'search-index-controls-button' + (type === TYPE_ARTICLE ? ' active': '')}
                    >
                        {t('articles')} <span>{countArticles ? ('('+countArticles+')'): ''}</span>
                    </button>
                </div>
            </div>

            {
                //WITHOUT_SHOP // supprimer la condition
                shopIsOpen && <ProductIndex isOpen={type === TYPE_PRODUCT} q={q} setCount={setCountProducts} />
            }

            <RecipeIndex isOpen={type === TYPE_RECIPE} q={q} setCount={setCountRecipes} />

            <ArticleIndex isOpen={type === TYPE_ARTICLE} q={q} setCount={setCountArticles} />
        </>
    )
}






