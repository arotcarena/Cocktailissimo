import React, { useRef, useState } from 'react';
import { useFetchQSearch } from '../../../../../CustomHook/fetch/useFetchQSearch';
import '../../../../../styles/header/HeaderTop/inlineSearchTool.css';
import { SearchIcon } from '../../../../../UI/Icon/SearchIcon';
import { CloseButton } from '../../../../../UI/Button/CloseButton';
import { useTranslation } from 'react-i18next';
import { Loader } from '../../../../../UI/Icon/Loader';
import { RecipeCard } from '../../../../Blog/Recipe/RecipeIndex/RecipeCard';
import { ProductCard } from '../../../../Shop/ProductIndex/ProductCard';
import { ArticleCard } from '../../../../Blog/Article/ArticleIndex/ArticleCard';

export const InlineSearchTool = ({close}) => {
    const {t, i18n} = useTranslation('messages');

    const inputRef = useRef(null);

    //handle q change
    const [q, setQ] = useState('');
    const handleChange = e => {
        setQ(e.currentTarget.value);
    }
    
    //fetch products & count
    const [result, resetProducts, loading, error] = useFetchQSearch('/'+ i18n.language +'/api/search', q, 6);

    const closeExpand = e => {
        resetProducts();
        setQ('');
        inputRef.current.focus();
    }
    
    const handleClose = () => {
        wrapperRef.current.classList.add('closing');
        const onAnimationEnd = () => {
            wrapperRef.current.removeEventListener('animationend', onAnimationEnd);
            wrapperRef.current.classList.remove('closing');
            close();
        }
        wrapperRef.current.addEventListener('animationend', onAnimationEnd);
    };
    const wrapperRef = useRef(null);

    const handleEmpty = () => {
        setQ('');
        resetProducts();
        inputRef.current.focus()
    }

    return (
        <div className="inline-search-tool-wrapper" ref={wrapperRef} onClick={closeExpand}>
            <div className="inline-search-tool" onClick={e => e.stopPropagation()}>
                <div className="search-tool-header">
                    <form className="q-group" action={t('url.search.index', {ns: 'urls'})} method="GET">
                        <input ref={inputRef} name="q" className="q-input" type="text" placeholder={t('search_placeholder')} value={q} onChange={handleChange} autoFocus={true} />
                        <SearchIcon additionalClass="q-icon" />
                        {
                            q !== '' && (
                                <CloseButton 
                                    type="button" 
                                    additionalClass="empty-control" 
                                    onClick={handleEmpty} 
                                    aria-label={t('empty_input')} 
                                    title={t('empty_input')} 
                                />
                            )
                        }
                    </form>
                    <CloseButton onClick={handleClose} />
                </div>
                {
                    (result?.items.length > 0 || loading) && (
                        <div className="inline-search-tool-expand">
                            {
                                loading && <Loader />
                            }
                            <ul className="product-suggest-list">
                                {
                                    result?.items.length > 0 && (
                                        result.items.map(item => (
                                            <>
                                                {
                                                    item.type === 'product' && <ProductCard key={'p'+item.id} product={item} />
                                                }
                                                {
                                                    item.type === 'recipe' && <RecipeCard key={'r'+item.id} recipe={item} />
                                                }
                                                {
                                                    item.type === 'article' && <ArticleCard key={'a'+item.id} article={item} />
                                                }
                                            </>
                                        ))
                                    )
                                }
                            </ul>
                            <div className="search-link">
                                <a className="form-button bordeaux outline" href={t('url.search.index', {ns: 'urls'}) + '?q='+q}>{t('see_all_results')}{result?.count ? ' ('+result.count+')': ''}</a>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}