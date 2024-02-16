import React from 'react';
import i18n from '../../../../../../entrypoints/i18n';


export const SubCategoryLink = ({subCategory, onClick}) => {

    //WITHOUT_SHOP // suppr onClick

    return (
        <li className="mobile-menu-subitem">
            <a className="mobile-menu-sublink" href={subCategory.target[i18n.language]} onClick={onClick}>
                <div className="mobile-menu-subitem-img-wrapper">
                    <img className="mobile-menu-subitem-img" src={'/img/categories/' + subCategory.picture.path} alt={subCategory.picture.alt[i18n.language]} />
                </div>
                <span>{subCategory.name[i18n.language]}</span>
            </a>
        </li>
    )
}