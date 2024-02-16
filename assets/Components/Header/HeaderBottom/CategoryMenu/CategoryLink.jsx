import React, { memo, useRef, useState } from 'react';
import { SubCategoryMenu } from './SubCategoryMenu/SubCategoryMenu';
import i18n from '../../../../entrypoints/i18n';
import { CloseButton } from '../../../../UI/Button/CloseButton';
import { useOpenState } from '../../../../CustomHook/state/useOpenState';
import { Flash } from '../../../../UI/Flash/Flash';
import { t } from 'i18next';

export const CategoryLink = memo(({category, setSelected, selected}) => {

    const [openingTimer, setOpeningTimer] = useState(null);

    const openExpand = () => {
        if(openingTimer) {
            clearTimeout(openingTimer);
        }
        setOpeningTimer(null);
        document.body.classList.add('expand-menu-open');
        setSelected(category);
    }

    const closeExpand = () => {
        if(openingTimer) {
            clearTimeout(openingTimer);
        }
        setOpeningTimer(null);
        buttonRef.current.classList.add('closing');
        if(expandRef.current) {
            expandRef.current.addEventListener('animationend', e => {
                document.body.classList.remove('expand-menu-open');
                buttonRef.current.classList.remove('closing');
                setSelected(null);
            });
        }
    }

    const handleMouseOver = e => {
        if(e.target.classList.contains('header-bottom-link')) {
            setOpeningTimer(
                setTimeout(() => {
                    openExpand();
                }, 400)
            );
        } else {
            openExpand();
        }
    };
    const handleMouseLeave = () => {
        setOpeningTimer(
            setTimeout(() => {
                closeExpand();
            }, 300)
        );
    };
    const handleKeyDown = e => {
        if(e.key === 'Enter') {
            if(!selected) {
                e.preventDefault();
                e.stopPropagation();
                openExpand();
            }
        }
    };
    const handleClick = () => {
        if(selected) {
            closeExpand();
        } else {
            openExpand();
        }
    }

    const buttonRef = useRef(null);
    const expandRef = useRef(null);
    

    //WITHOUT_SHOP // à suppr 
    const [withoutShopFlashIsOpen, openWithoutShopFlash, closeWithoutShopFlash] = useOpenState(false);
    

    return (
        <>
            {
                //WITHOUT_SHOP // à suppr /////////////////////////////////////////////////
                <Flash
                    button={
                        <a href={t('url.recipe.index', {ns: 'urls'})}>{t('our_recipes', {ns: 'messages'})}</a>
                    }
                    isOpen={withoutShopFlashIsOpen}
                    close={closeWithoutShopFlash}
                    >
                    {t('info.shop_will_be_open_soon', {ns: 'messages'})}
                </Flash>
                //////////////////////////////////////////////////////////////////////////////
            }
            <div role="button" tabIndex="0" className={'header-bottom-link' + ' lang-' + i18n.language + (selected ? ' selected': '')} 
                onMouseOver={handleMouseOver} onClick={handleClick} onKeyDown={handleKeyDown} onMouseLeave={handleMouseLeave}
                ref={buttonRef} 
            >
            { category.name[i18n.language] }
            {
                (selected && category.subCategories.length > 0) && (
                    <div className="header-bottom-expand" ref={expandRef}>
                        <CloseButton additionalClass="header-bottom-expand-closer" onClick={closeExpand} />
                        <SubCategoryMenu 
                            category={category} 
                            subCategories={category.subCategories} 
                            //WITHOUT_SHOP // à suppr
                            openWithoutShopFlash={openWithoutShopFlash} 
                        />
                    </div>
                )
            }
            </div>
        </>
    )
});