import React from 'react';
import { SubCategoryLink } from './SubCategoryLink';
import { useTranslation } from 'react-i18next';
import { useGetUser } from '../../../../../CustomHook/useGetUser';

export const SubCategoryMenu = ({category, subCategories, openWithoutShopFlash}) => {
    const {t, i18n} = useTranslation('messages'); 

    //WITHOUT_SHOP // a supprimer // supprimer openWithoutShopFlash en haut dans props aussi
    const {user, updateUser} = useGetUser();
    const handleClick = e => {
        console.log(category);
        if(category.name.en === 'Recipes') {
            return;
        }
        if(!user || !['consumer@email.com', 'pro@email.com', 'vendor@email.com', 'fnsandin@gmail.com'].includes(user.email)) {
            e.preventDefault();
            openWithoutShopFlash();
        }
    }
    ////////////////////////////////////////////////////////////////

    return (
        <nav className="header-bottom-subnav">
            <ul>
            {
                subCategories.map(
                    subCategory => (
                        <SubCategoryLink 
                            key={subCategory.id} 
                            subCategory={subCategory} 
                            //WITHOUT_SHOP // à suppr
                            onClick={handleClick}
                        />
                    )
                )
            }
            </ul>
            <div className="search-link">
                <a 
                    className="form-button bordeaux outline" 
                    href={category.target[i18n.language]}
                    //WITHOUT_SHOP // à suppr
                    onClick={handleClick}
                    >
                    {t('see_entire_category', {category: category.name[i18n.language]})}
                </a>
            </div>
        </nav>
    )
}