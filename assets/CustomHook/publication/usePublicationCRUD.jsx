import { useEffect, useState } from "react";
import { usePaginationCache } from "../search/usePaginationCache"
import { ApiError, apiFetch, apiPreparedFetch, prepareFetch } from "../../functions/api";
import i18n from "../../entrypoints/i18n";



export const usePublicationCRUD = (
        fetchAllEntrypoint, 
        fetchOneFullEntrypoint, 
        deleteItemEntrypoint, 
        createItemEntrypoint = null, 
        createAnswerEntrypoint,
        filters, 
        setFilters, 
        onRenderChange = null
    ) => {

    const [fullFetched, setFullFetched] = useState([]);

    const [result, setResult] = useState(null);

    const [isLoading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    const handleFetchPage = (newPage) => {
        setFilters(filters => ({
            ...filters,
            page: newPage
        }));
    }
    
    const { handlePageChange, onAfterFetch, setCacheItem, currentPage, items } = usePaginationCache(handleFetchPage, filters, onRenderChange);

    useEffect(() => {
        fetchAll();
    }, [filters]);

    const fetchAll = async () => {
        setLoading(true);

        const [url, options] = prepareFetch(fetchAllEntrypoint, filters, 'GET');

        try {
            const result = await apiFetch(url, options);
            setResult(result);
            onAfterFetch(filters, result.currentPage, result.items);
        } catch(e) {
            if(e instanceof ApiError) {
                setErrors(e.errors);
            } else {
                console.error(e);
            }
        }
        setLoading(false);
    };

    const fetchOneFull = async (id, force = false) => {
        if(!force && fullFetched.includes(id)) {
            return;
        }
        setFullFetched(fullFetched => [...fullFetched, id]);

        const [url, options] = prepareFetch(fetchOneFullEntrypoint, {id: id}, 'GET'); 
        try {
            const fullQuestionAnswer = await apiFetch(url, options);
            setCacheItem(currentPage, fullQuestionAnswer); //dans le cache, on remplace l'item partiel par l'item complet qu'on vient de fetch
        } catch(e) {
            if(e instanceof ApiError) {
                setErrors(e.errors);
            } else {
                console.error(e);
            }
        }
    };

    //si au premier chargement (donc sans filtres) il n'y a aucun résultat, alors on affiche pas les filtres
    const [hasControls, setHasControls] = useState(false);
    const [isInitialized, setInitialized] = useState(false);
    useEffect(() => {
        if(result && !isInitialized) {
            setInitialized(true);
            if(result.items.length > 0) {
                setHasControls(true);
            }
        }
    }, [result]);


    //create item
    const createItem = async (formData) => {
        await apiPreparedFetch(createItemEntrypoint, formData, 'POST');
        //met la page à 1 et déclenche le fetchAll (nécessaire à cause de la pagination)
        handleFetchPage(1);
        //
        if(onRenderChange) {
            onRenderChange();
        }
    }

    //create answer 
    const createAnswer = async (itemId, formData) => {
        await apiPreparedFetch(createAnswerEntrypoint + '/' + itemId, formData, 'POST');
        await fetchOneFull(itemId, true);
    }

    //delete item
    const deleteItem = async id => {
        await apiFetch(deleteItemEntrypoint + '/' + id);
        //obligé de fetchAll à cause de la pagination
        fetchAll();
    };

    //delete answer
    const deleteAnswer = async (itemId, answerId) => {
        console.log(itemId, answerId);
        await apiFetch('/'+i18n.language+'/api/answer/delete' + '/' + answerId);
        //pour mettre à jour l'état local, on fetch uniquement l'item concerné
        fetchOneFull(itemId, true);
    } 


    return {
        result: {
            items: items,
            count: result?.count,
            maxPage: result?.maxPage,
            perPage: result?.perPage,
            currentPage: currentPage
        },
        fetchAll,
        fetchOneFull,
        createItem,
        createAnswer,
        deleteItem,
        deleteAnswer,
        isLoading, 
        errors, 
        handlePageChange,
        hasControls
    };

}