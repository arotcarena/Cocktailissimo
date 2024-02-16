import { useEffect, useState } from "react"
import { useScrollYListener } from "./useScrollYListener";

export const useScrollYDirectionListener = (start = 70, sensibility = 50) => {
    const currentScroll = useScrollYListener();

    const [isScrollingDown, setScrollingDown] = useState(false);
    const [isScrollingUp, setScrollingUp] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
         //on vérifie si on est au dela du scroll start
         if(currentScroll < start) {
            setScrollingUp(false);
            setScrollingDown(false);
            return;
        }
        //on vérifie si on est en scroll down ou up
        if(currentScroll > (lastScroll + sensibility)) {
            setScrollingUp(false);
            setScrollingDown(true);
            setLastScroll(currentScroll);
        } else if(currentScroll < (lastScroll - sensibility)) {
            setScrollingDown(false);
            setScrollingUp(true);
            setLastScroll(currentScroll);
        } 

    }, [currentScroll]);

    return {isScrollingDown, isScrollingUp};
}