import { useEffect, useState } from "react";
import { useFetchWithDelay } from "../fetch/useFetchWithDelay";
import { usePaginationCache } from "./usePaginationCache";

export const useSearchIndex = (endpoint, initialFilters, q = '', onRenderChange = null) => {

    const [filters, setFilters] = useState({
        ...initialFilters,
        q: q
    });

    const setFilterValue = (key, value) => {
        setFilters(filters => ({
            ...filters,
            page: initialFilters.page,
            [key]: value
        }));
    }
    const handleFetchPage = (newPage) => {
        setFilters(filters => ({
            ...filters,
            page: newPage
        }));
    };

    useEffect(() => {
        setFilterValue('q', q);
    }, [q]);

    const handleReset = () => {
        setFilters(filters => ({
            ...initialFilters,
            q: filters.q
        }));
    }

    const [countFilters, setCountFilters] = useState(0);
    useEffect(() => {
        let count = 0;
        for(const [key, value] of Object.entries(filters)) {
            if(
                key !== 'page'
                &&
                key !== 'q' 
                && 
                key !== 'sortBy'
                &&
                JSON.stringify(value) !== JSON.stringify(initialFilters[key])
                && 
                key !== 'maxPrice' // pour éviter de compter deux fois le filtre prix
            ) 
            {  
                count++;
            }
        }
        setCountFilters(count);
    }, [filters]);


    const [result, isLoading, error] = useFetchWithDelay(endpoint, filters, 'GET', 300);
    const [isInitialLoading, setInitialLoading] = useState(true);
    useEffect(() => {
        if(isLoading) {
            //ex: scroll tout en haut quand le rendu change
            //on ne le fait pas au premier chargement
            if(!isInitialLoading && onRenderChange) {
                onRenderChange();
            }
            setInitialLoading(false);
        }
    }, [isLoading]);
    
    //Pagination cache
    const {handlePageChange, onAfterFetch, currentPage, items, removeItemFromCache} = usePaginationCache(handleFetchPage, filters, onRenderChange);
    useEffect(() => {
        if(result) {
            onAfterFetch(filters, result.currentPage, result.items);
        }
    }, [result]);

    const setSortBy = newSort => {
        setFilterValue('sortBy', newSort);
    };

    const deleteItem = id => {
        removeItemFromCache(currentPage, id);
    };

    return {
        filters, 
        setFilterValue, 
        countFilters, 
        result: {
            items: items,
            count: result?.count,
            maxPage: result?.maxPage,
            perPage: result?.perPage,
            currentPage: currentPage
        }, 
        deleteItem,
        isLoading,
        handleReset, 
        handlePageChange,
        setSortBy
    };
}