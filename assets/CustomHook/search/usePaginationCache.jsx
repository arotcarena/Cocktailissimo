import { useState } from "react";

export const usePaginationCache = (handleFetchPage, filters, onRenderChange = null) => {

    //cache
    const [cache, setCache] = useState({});
    const getPageFromCache = page => {
        if(cache[page]) {
            return cache[page];
        }
        return null;
    }; 
    const addPageToCache = (page, items) => {
        setCache(cache => ({
            ...cache, 
            [page]: items
        }));
    };
    const setCacheItem = (page, item) => {
        setCache(cache => ({
            ...cache,
            [page]: cache[page].map(cacheItem => {
                if(cacheItem.id === item.id) {
                    return item;
                }
                return cacheItem;
            })
        }));
    }

    //currentPage
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = newPage => {
        if(onRenderChange) {
            onRenderChange();
        }
        if(getPageFromCache(newPage)) {
            setCurrentPage(newPage);
        } else {
            handleFetchPage(newPage);
        }
    };

    const [currentFilters, setCurrentFilters] = useState(filters);
    const onAfterFetch = (newFilters, page, items) => {
        //pour éviter qu'on pense que les filtres sont différents à chaque fois
        currentFilters.page = newFilters.page;
        if(JSON.stringify(newFilters) != JSON.stringify(currentFilters)) {
            setCache({});
        }
        setCurrentFilters(newFilters)
        setCurrentPage(page);
        addPageToCache(page, items);
    };

    return { handlePageChange, onAfterFetch, setCacheItem, currentPage, items: getPageFromCache(currentPage) ?? [] };
}