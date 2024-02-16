import { useEffect, useState } from "react";
import { apiFetch } from "../../functions/api";

export const useInfiniteCarousel = (endpoint, limit = 5) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [allIsLoaded, setAllIsLoaded] = useState(false);
    
    const loadData = async (offset) => {
        setLoading(true);
        try {
            const fetchResult = await apiFetch(endpoint + '?limit=' + limit + '&offset=' + offset);
            setData(data => [...data, ...fetchResult]);
            if(fetchResult.length > 0) {
                setHasArrowNext(true);
            }
            if(fetchResult.length < limit) {
                setAllIsLoaded(true);
            }
        } catch(e) {
            console.error(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadData(0);
    }, []);
    
    const [hasArrowPrev, setHasArrowPrev] = useState(false);
    const [hasArrowNext, setHasArrowNext] = useState(false);


    const onAfterChange = (index, slidesToScroll) => {
        const totalSlides = index + slidesToScroll;
        if(totalSlides >= data.length) {
            if(!allIsLoaded) {
                loadData(data.length - 1);
            }
            if(hasArrowNext) {
                setHasArrowNext(false);
            }
        } else if(!hasArrowNext) {
            setHasArrowNext(true);
        }

        if(index > 0 && !hasArrowPrev) {
            setHasArrowPrev(true);
        } else if(index <= 0 && hasArrowPrev) {
            setHasArrowPrev(false);
        }
    }

    return [onAfterChange, data, isLoading, hasArrowPrev, hasArrowNext];
}