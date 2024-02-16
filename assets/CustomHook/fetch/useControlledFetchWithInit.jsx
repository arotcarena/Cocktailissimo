import { useEffect, useState } from "react";
import { useControlledFetch } from "./useControlledFetch";

export const useControlledFetchWithInit = (entrypoint, initialData = null, params = {}, method = 'GET', errorTimeout = null) => {
    const [dataWithInit, setDataWithInit] = useState(initialData);
   
    const [doFetch, data, isLoading, error] = useControlledFetch(entrypoint, params, method, errorTimeout);

    useEffect(() => {
        //pour éviter de le faire avant le premier doFetch
        if(data) {
            setDataWithInit(data);
        }
    }, [data]);

    return [doFetch, dataWithInit, isLoading, error];
}