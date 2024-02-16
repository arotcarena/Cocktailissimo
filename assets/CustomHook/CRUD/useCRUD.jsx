import { useReducer, useState } from "react";
import { ApiError, apiFetch } from "../../functions/api";


const reducer = (data, action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...data, action.payload];
        case 'UPDATE':
            return data.map(data => {
                if(data.id === action.target) {
                    return action.payload;
                }
                return data;
            });
        case 'DELETE':
            return data.filter(data => data.id !== action.target);
    }
}




/**
 * 
 * @param {string} entrypoint 
 * @param {boolean} immediateFetch (faut il faire le fetch d'initialisation immédiatement et dans le hook ?)
 * @returns 
 */
export const useCRUD = (entrypoint, immediateFetch = false) => {

    const [data, dispatch] = useReducer(reducer, []);
    const [isLoading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    
    //cet état définit si les items sont chargés ou pas encore
    const [initialized, setInitialized] = useState(false);
    //on conserve ici les ids des items qui ont fait l'objet d'un fetchOneFull, et qui sont donc déjà full
    const [fullFetched, setFullFetched] = useState([]);

    const fetchAll = async () => {
        //si les items ont déjà été chargés on ne recommence pas
        if(initialized) {
            return;
        }
        setInitialized(true);
        setLoading(true);
        try {
            const result = await apiFetch(entrypoint+'/index');
            dispatch({type: 'FETCH_ALL', payload: result});
        } catch(e) {
            setLoading(false);
            if(e instanceof ApiError) {
                setErrors(e.errors);
            } else {
                console.error(e);
            }
        }
        setLoading(false);
    }
    
    const fetchOneFull = async (id) => {
        //si l'item est déjà full fetched, inutile de recommencer
        if(fullFetched.includes(id)) {
            return;
        }
        setFullFetched(fullFetched => [...fullFetched, id]);
        setLoading(true);
        try {
            const result = await apiFetch(entrypoint+'/show');
            dispatch({type: 'UPDATE', target: id, payload: result}); // le principe est exactement le même que lors d'un update
        } catch(e) {
            setLoading(false);
            if(e instanceof ApiError) {
                setErrors(e.errors);
            } else {
                console.error(e);
            }
        }
        setLoading(false);
    }

    const create = async (data) => { 
        setLoading(true)
        try {
            const id = await apiFetch(entrypoint+'/create', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            data.id = id;
            dispatch({type: 'CREATE', payload: data});
        } catch(e) {
            setLoading(false);
            throw e;
        }
        setLoading(false);
    };

    const update = async (data, id) => {
        setLoading(true);
        try {
            await apiFetch(entrypoint+'/'+id+'/update', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            dispatch({type: 'UPDATE', target: id, payload: data});
        } catch(e) {
            setLoading(false);
            throw e;
        }
        setLoading(false);
    };

    const remove = async (id) => {
        setLoading(true);
        try {
            await apiFetch(entrypoint+'/delete', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(id)
            });
            dispatch({type: 'DELETE', target: id});
        } catch(e) {
            setLoading(false);
            throw e;
        }
        setLoading(false);
    };


    if(immediateFetch) {
        fetchAll();
    }

    return [
        data,
        { fetchAll, fetchOneFull, update, create, remove },
        isLoading,
        errors
    ];
}