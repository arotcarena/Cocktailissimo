import React from 'react';
import '../../../../styles/UI/SlickCarousel/slickTheme.css';
import '../../../../styles/UI/SlickCarousel/slick.css';
import '../../../../styles/Shop/ProductShow/productShowImg.css';
import { ShowCarousel } from './ShowCarousel';
import { ShowImgSelector } from './ShowImgSelector';
import { useWindowResizeListener } from '../../../../CustomHook/listener/useWindowResizeListener';

export const ShowImg = ({pictures}) => {

    const [width, height] = useWindowResizeListener();

    if(!pictures || pictures.length === 0) {
        return;
    }

    if(width < 600) {
        return (
            <ShowCarousel pictures={pictures} />
        )
    }

    return (
        <ShowImgSelector pictures={pictures} />
    )
}

