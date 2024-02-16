import React, { forwardRef, useEffect, useState } from 'react';
import { HeaderLogo } from '../../../../../UI/Logo/HeaderLogo';
import { MobileSubMenu } from './MobileSubMenu';
import { MobileMenuFooter } from './MobileMenuFooter';
import { CategoryLink } from './CategoryLink';
import '../../../../../styles/header/HeaderTop/sideMenu.css';
import '../../../../../styles/header/HeaderTop/MobileMenu/index.css';


export const MobileMenu = forwardRef(({categories, user}, modalRef) => {

    //sélection des catégories
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        //au cas ou on était en scroll en bas des categories, il faut remonter pour arriver en haut de la liste des subcategories
        modalRef.current.scroll(0, 0);
    }, [selectedCategory]);

    return (
        <>
            <div className="mobile-menu-header">
                <HeaderLogo />
            </div>
            <div className="mobile-menu-main">
                <div className={'side-menu-body' + (selectedCategory ? ' is-expanded': '')}>
                    <nav className="mobile-menu-nav left">
                        {
                            categories.map(
                                category => (
                                    <CategoryLink key={category.id} setSelected={setSelectedCategory} category={category} />
                                )
                            )
                        }
                    </nav>
                    <MobileSubMenu category={selectedCategory} setSelected={setSelectedCategory} />
                </div>
                <MobileMenuFooter user={user} />
            </div>
        </>
    )
});



