import { useState } from "react"

export const useTemporaryState = (timeout = 2000, initialState = false, temporaryState = true) => {
    const [state, setState] = useState(initialState);
    const setTemporaryState = () => {
        setState(temporaryState);
        setTimeout(() => {
            setState(initialState);
        }, timeout);
    };

    const resetState = () => {
        setState(initialState);
    }

    return [state, setTemporaryState, resetState];
}