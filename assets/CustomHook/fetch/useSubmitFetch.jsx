import { useState } from "react"
import { ApiError, apiFetch } from "../../functions/api";

/**
 * 
 * @param {string} endpoint 
 * @param {string} method (le fonctionnement avec GET n'est pas encore écrit) 
 */
export const useSubmitFetch = (endpoint, onSubmitSuccess, onSubmitFail, method = 'POST') => {


    const [isLoading, setLoading] = useState(false);
    const [serverErrors, setServerErrors] = useState(null);

    /**
     * 
     * @param {Object} data 
     */
    const serverSubmit = async data => {
        if(isLoading) {
            return;
        }
        setServerErrors(null);
        setLoading(true);

        try {
            const result = await apiFetch(endpoint, {
                method: 'POST',
                body: JSON.stringify(data)
            });
            if(onSubmitSuccess) {
                onSubmitSuccess(result);
            }
        } catch(e) {
            if(e instanceof ApiError) {
                setServerErrors(e.errors);
            }
            if(onSubmitFail) {
                onSubmitFail();
            }
        }
        setLoading(false);
    };

    return [serverSubmit, isLoading, serverErrors];
}