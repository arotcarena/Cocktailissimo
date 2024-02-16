import React, { useEffect, useState } from 'react';

export const useScrollYListener = () => {
    const [currentScroll, setCurrentScroll] = useState(window.scrollY);
    useEffect(() => {
        const onScroll = () => {
            setCurrentScroll(window.scrollY);
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return currentScroll;
}