import React from 'react';
import i18n from '../../../entrypoints/i18n';

export const GazetteItem = ({subCategory}) => {
    return (
        <li className="home-gazette-item">
            <a className="home-gazette-item-link" href={subCategory.target[i18n.language]}>
                <div className="home-gazette-img-wrapper">
                    <img className="home-gazette-img" src={'/img/categories/'+subCategory.picture.path} alt={subCategory.picture.alt[i18n.language]} />
                </div>
                <div className="home-gazette-item-title-wrapper title-underlined-wrapper">
                    <h3 className="home-gazette-item-title title-underlined">{subCategory.name[i18n.language]}</h3>
                </div>
            </a>
        </li>
    )
}