import { useEffect, useState } from 'react';
import { apiFetch, prepareFetch } from '../../functions/api';

export const useFetchWithDelay = (entrypoint, params = {}, method = 'GET', delay = 300) => {

    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [timer, setTimer] = useState(null);


    useEffect(() => {
        if(timer) {
            clearTimeout(timer);
            setTimer(null);
        }
        setLoading(true);
        const currentTimer = setTimeout(async () => {
            
            const [url, options] = prepareFetch(entrypoint, params, method);
            
            try {
                const data = await apiFetch(url, options);
                setData(data);
            } catch(e) {
                setError(e);
            }
            setLoading(false);
            setTimer(null);
        }, delay);
        setTimer(currentTimer);

    }, [entrypoint, method, params]);


    const reset = () => {
        setData(null);
        setLoading(false);
    }

    return [data, isLoading, error, reset];
}
