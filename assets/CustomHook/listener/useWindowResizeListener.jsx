import { useEffect, useState } from "react";

export const useWindowResizeListener = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const onResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    })

    return [width, height];
}