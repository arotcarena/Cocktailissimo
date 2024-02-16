import { useEffect } from "react"

export const useBlockScroll = () => {
    useEffect(() => {
        document.body.classList.add('no-overflow');
        return () => document.body.classList.remove('no-overflow');
    }, []);
}