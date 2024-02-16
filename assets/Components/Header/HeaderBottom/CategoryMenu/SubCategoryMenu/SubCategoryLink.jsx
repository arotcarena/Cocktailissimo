import React from 'react';
import i18n from '../../../../../entrypoints/i18n';

export const SubCategoryLink = ({subCategory, onClick}) => {

    //WITHOUT_SHOP // suppr onClick

    return (
        <li className="subcategory-item">
            <a className="subcategory-link" href={subCategory.target[i18n.language]} onClick={onClick}>
                <div className="subcategory-item-img-wrapper">
                    <img className="subcategory-item-img" src={'/img/categories/'+subCategory.picture.path} alt={subCategory.picture.alt[i18n.language]} />
                </div>
                <span className="subcategory-item-text">{subCategory.name[i18n.language]}</span>
            </a>
        </li>
    )
}