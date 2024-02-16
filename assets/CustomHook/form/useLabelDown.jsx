import { useEffect, useState } from "react";



export const useLabelDown = (value, onBlur = null) => {
    const [isLabelDown, setLabelDown] = useState(false);

    useEffect(() => {
        if(value === '' || value === undefined || value === null) {
            setLabelDown(true);
        }
    }, []);

    const handleFocus = e => {
        if(isLabelDown) {
            setLabelDown(false);
        }
    };
    const handleBlur = e => {
        if(onBlur) {
            //on avertit hook form
            onBlur();
        }
        
        if(e.target.value === '') {
            setLabelDown(true);
        }
    };

    return [isLabelDown, handleFocus, handleBlur];
}