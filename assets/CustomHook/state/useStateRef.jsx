import { useEffect, useRef, useState } from "react"

export const useStateRef = () => {
    const ref = useRef(null);
    const [state, setState] = useState(null);

    useEffect(() => {
        if(ref.current) {
            setState(ref.current);
        }
    }, [ref.current]);

    return [ref, state];
}