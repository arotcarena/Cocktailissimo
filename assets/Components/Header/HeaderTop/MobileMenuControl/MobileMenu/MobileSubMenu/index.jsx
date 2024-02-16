import React from 'react';
import { SubCategoryLink } from './SubCategoryLink';
import { ChevronLeftIcon } from '../../../../../../UI/Icon/ChevronLeftIcon';
import { useTranslation } from 'react-i18next';
import { Flash } from '../../../../../../UI/Flash/Flash';
import { useOpenState } from '../../../../../../CustomHook/state/useOpenState';
import { useGetUser } from '../../../../../../CustomHook/useGetUser';

export const MobileSubMenu = ({category, setSelected}) => {
    const {t, i18n} = useTranslation('messages');

    const handleReturn = e => {
        e.preventDefault();
        setSelected(null);
    }

    //WITHOUT_SHOP // à suppr 
    const [withoutShopFlashIsOpen, openWithoutShopFlash, closeWithoutShopFlash] = useOpenState(false);
    const {user, updateUser} = useGetUser();
    const handleClick = e => {
        if(category.name.en === 'Recipes') {
            return;
        }
        if(!user || !['consumer@email.com', 'pro@email.com', 'vendor@email.com'].includes(user.email)) {
            e.preventDefault();
            openWithoutShopFlash();
        }
    }
    ////////////////////////////////////////////////////////////////

    return (
        <nav className="mobile-menu-nav right">
            {
                category && (
                    <button className="mobile-menu-nav-header mobile-menu-link" onClick={handleReturn}>
                        <ChevronLeftIcon />
                        <span className="mobile-menu-nav-title">{ category.name[i18n.language] }</span>
                    </button>
                )
            }
            <ul className="mobile-menu-sublist">
            {
                //WITHOUT_SHOP // à suppr
                <Flash
                    button={
                        <a href={t('url.recipe.index', {ns: 'urls'})}>{t('our_recipes')}</a>
                    }
                    isOpen={withoutShopFlashIsOpen}
                    close={closeWithoutShopFlash}
                    >
                    {t('info.shop_will_be_open_soon')}
                </Flash>
                ///////////////////////////////
            }
            {
                category && (
                    category.subCategories.map(
                        subCategory => (
                            <SubCategoryLink 
                                key={subCategory.id} 
                                subCategory={subCategory}  
                                //WITHOUT_SHOP // ligne ci-dessous à suppr
                                onClick={handleClick}
                            />
                        )
                    )
                )
            }
            </ul>
            {
                category && (
                    <a 
                        className="form-button bordeaux outline" 
                        href={category.target[i18n.language]}
                        //WITHOUT_SHOP // ligne ci-dessous à suppr
                        onClick={handleClick}
                        >
                        {t('see_entire_category', {category: category.name[i18n.language]})}
                    </a>
                )
            }
        </nav>
    )
}


