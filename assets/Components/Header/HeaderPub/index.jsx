import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const HeaderPub = () => {
    const {t} = useTranslation('messages');
    
    // const pubRef = useRef(null);
    // const pubWrapperRef = useRef(null);
    // const [posX, setPosX] = useState(0);
    // useEffect(() => {
    //     if(pubWrapperRef.current) {
    //         const width = pubRef.current.offsetWidth;
    //         if((width + 40) > window.innerWidth) {
    //             //si le texte dépasse de l'écran on le fait avancer et on l'aligne à gauche
    //             pubWrapperRef.current.style.justifyContent = 'flex-start';
    //             //pour faire arriver le texte de la droite au début
    //             setPosX(window.innerWidth + 20);
    //             const interval = setInterval(() => {
    //                 setPosX(prevPos => {
    //                     if(prevPos < (0 - width)) {
    //                         return window.innerWidth;
    //                     }
    //                     return prevPos - 1;
    //                 });
    //             }, 8);
    //             return () => clearInterval(interval);
    //         }
    //     }
    // }, [pubWrapperRef.current]);

    // useEffect(() => {
    //     pubRef.current.style.left = posX + 'px';
    // }, [posX]);

    return (
        // <div ref={pubWrapperRef} className="header-pub">
        //     <p ref={pubRef}>{t('header_pub')}</p>
        // </div>

        <div className="header-pub">
            <p className="header-pub-small">{t('header_pub_small')}</p>
            <p className="header-pub-large">{t('header_pub')}</p>
        </div>
    )
}