import { useEffect, useState } from "react";

export const useOpenState = (startingState = false) => {
    const [isOpen, setOpen] = useState(startingState);
    const open = () => {
        setOpen(true);
    };
    const close = () => {
        setOpen(false);
    };
    useEffect(() => {
        return () => setOpen(startingState);
    }, []);
    return [isOpen, open, close];
}

