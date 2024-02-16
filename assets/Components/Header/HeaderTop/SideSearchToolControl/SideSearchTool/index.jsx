import React, { useRef, useState } from 'react';
import { useFetchQSearch } from '../../../../../CustomHook/fetch/useFetchQSearch';
import { ProductSuggest } from './ItemSuggest/ProductSuggest';
import '../../../../../styles/header/HeaderTop/sideSearchTool.css';
import { SearchIcon } from '../../../../../UI/Icon/SearchIcon';
import { Loader } from '../../../../../UI/Icon/Loader';
import { useButtonLoading } from '../../../../../CustomHook/form/useButtonLoading';
import { useTranslation } from 'react-i18next';
import { RecipeSuggest } from './ItemSuggest/RecipeSuggest';
import { CloseButton } from '../../../../../UI/Button/CloseButton';
import { ArticleSuggest } from './ItemSuggest/ArticleSuggest';

export const SideSearchTool = () => {
    const {t, i18n} = useTranslation('messages');
    
    //loading du bouton "voir tous les résultats"
    const [buttonLoading, handleButtonClick] = useButtonLoading();

    //handle q change
    const [q, setQ] = useState('');
    const handleChange = e => {
        setQ(e.currentTarget.value);
    }
    
    //fetch products & count
    const [result, resetProducts, loading, error] = useFetchQSearch('/'+ i18n.language +'/api/search', q, 10);

    const handleEmpty = () => {
        setQ('');
        resetProducts();
        inputRef.current.focus();
    }
    const inputRef = useRef(null);
 
    return (
        <div className="side-search-tool">
            <form className="q-group" action={t('url.search.index', {ns: 'urls'})} method="GET">
                <input ref={inputRef} name="q" className="q-input" type="text" placeholder={t('search_placeholder')} value={q} onChange={handleChange} autoFocus={true} />
                <SearchIcon additionalClass="q-icon" />
                {
                    q !== '' && (
                        <CloseButton type="button" onClick={handleEmpty} aria-label={t('empty_input')} title={t('empty_input')} />
                    )
                }
            </form>
            <div className={'product-suggest-list' + (loading ? ' loading': '')}>
                {
                    loading && <Loader />
                }
                {
                    result && (
                        result.items.map(item => (
                            <>
                                {
                                    item.type === 'product' && <ProductSuggest key={'p'+item.id} product={item} />
                                }
                                {
                                    item.type === 'recipe' && <RecipeSuggest key={'r'+item.id} recipe={item} />
                                }
                                {
                                    item.type === 'article' && <ArticleSuggest key={'a'+item.id} article={item} />
                                }
                            </>
                        ))
                    )
                }
            </div>
            <div className="search-link">
                <a className={'side-menu-footer-button' + (buttonLoading ? ' disabled': '')} onClick={handleButtonClick} href={t('url.search.index', {ns: 'urls'}) + '?q='+q} disabled={buttonLoading}>
                    {
                        buttonLoading
                        ?
                        <Loader additionalClass="form-button-loader" />
                        :
                        <span>{t('see_all_results')}{result?.count ? ' ('+result.count+')': ''}</span>
                    }
                </a>
            </div>
        </div>
    )

}