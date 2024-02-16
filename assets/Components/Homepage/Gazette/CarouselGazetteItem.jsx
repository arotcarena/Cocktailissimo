import React from 'react';
import i18n from '../../../entrypoints/i18n';

export const CarouselGazetteItem = ({subCategory, currentTarget}) => {
    return (
        <div className="home-gazette-carousel-item">
            <a className="home-gazette-carousel-link" href={currentTarget}>
                <div className="home-gazette-carousel-img-wrapper">
                    <img className="home-gazette-carousel-img" src={'/img/categories/'+subCategory.picture.path} alt={subCategory.picture.alt[i18n.language]} />
                </div>
            </a>
        </div>
    )
}