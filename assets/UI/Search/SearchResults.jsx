import React from 'react';
import { Loader } from '../Icon/Loader';
import { PaginationControls } from '../Pagination/PaginationControls';
import { useTranslation } from 'react-i18next';

export const SearchResults = ({children, isLoading, result, pageChange}) => {
    const {t} = useTranslation('messages');

    let start = null;
    let end = null;

    if(result) {
        start = ((result.currentPage * result.perPage) - result.perPage) + 1;
        end = result.maxPage > result.currentPage ? ((start + result.perPage) - 1): result.count;
    }

    return (
        <div className={'product-index-results' + (isLoading ? ' loading': '')}>
            {
                isLoading && <Loader additionalClass="main-loader" />
            }
            {
                result && (
                    <>
                        <p className="product-index-count">
                            <span>
                                {
                                    (result.count || result.count === 0) && (
                                        result.maxPage > 1 ? (
                                            t('count.pagination_results', {start: start, end: end, count: result.count})
                                        ): (
                                            t('count.results', {count: result.count})
                                        )
                                    )
                                }
                            </span>
                        </p>
                        <ul className="product-list">
                        {
                            children
                        }
                        </ul>
                        { 
                            result.maxPage > 1 && (
                                <PaginationControls currentPage={result.currentPage} maxPage={result.maxPage} pageChange={pageChange} />
                            ) 
                        }
                    </>
                )
            }
        </div>
    )
}