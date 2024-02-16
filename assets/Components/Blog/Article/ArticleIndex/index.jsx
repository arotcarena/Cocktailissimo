import React, { useEffect } from 'react';
import { useSearchIndex } from '../../../../CustomHook/search/useSearchIndex';
import { SearchFiltersControls } from '../../../../UI/Search/SearchFiltersControls';
import { ArticleFilters } from './ArticleFilters';
import { ArticleCard } from './ArticleCard';
import { SearchResults } from '../../../../UI/Search/SearchResults';
import { scrollTop } from '../../../../functions/scroll';
import { useTranslation } from 'react-i18next';

export const ArticleIndex = ({isOpen = true, subCategoryId = null, q = '', setCount}) => {
    const {t, i18n} = useTranslation('configs');

    const subCategoryIds = subCategoryId === null ? []: [subCategoryId];

    const initialFilters = {
        subCategoryIds: subCategoryIds,
        page: 1,
        limit: 20,
        sortBy: '',
        q: q
    };

    const {
        filters, 
        setFilterValue, 
        countFilters, 
        result, 
        isLoading,
        handleReset, 
        handlePageChange,
        setSortBy
    } = useSearchIndex('/'+ i18n.language +'/api/article/index', initialFilters, q, scrollTop);


    const sortChoices = {
        ['A - Z']: 'alphabet_ASC',
        ['Z - A']: 'alphabet_DESC',
        [t('sort.createdAt_DESC')]: 'createdAt_DESC',
        [t('sort.createdAt_ASC')]: 'createdAt_ASC'
    };

    //pour envoyer au parent pour afficher sur le bouton Product 
    useEffect(() => {
        if(result && setCount) {
            setCount(result.count);
        }
    }, [result, setCount]);

    if(!isOpen) {
        return '';
    }

    return (
        <div className="product-index">
            <div className="product-index-header">
                <SearchFiltersControls 
                    countFilters={countFilters}
                    countResults={result?.count}
                    onReset={handleReset}
                    sortBy={filters.sortBy} 
                    setSortBy={setSortBy} 
                    sortChoices={sortChoices}
                    hideFilters={subCategoryId !== null}
                    >
                    <ArticleFilters subCategoryId={subCategoryId} filters={filters} setFilterValue={setFilterValue} />
                </SearchFiltersControls> 
            </div>
            <SearchResults 
                isLoading={isLoading}
                result={result}
                pageChange={handlePageChange}
                >
                {
                    result && result.items.map(article => <ArticleCard key={article.id} article={article} />)
                }
            </SearchResults>
        </div>
    )
}








