import React, { useEffect, useState } from 'react';
import { HeaderTop } from './HeaderTop';
import { HeaderBottom } from './HeaderBottom';
import '../../styles/header/index.css';
import categories from '../../Config/categories.json';
import { HeaderPub } from './HeaderPub';
import { useScrollYDirectionListener } from '../../CustomHook/listener/useScrollYDirectionListener';

export const Header = () => {

    const {isScrollingUp, isScrollingDown} = useScrollYDirectionListener(50, 70);

    const [headerClass, setHeaderClass] = useState('header-static');

    useEffect(() => {
        if(isScrollingUp) {
            setHeaderClass('header-fixed scroll-up');
        } else if(isScrollingDown) {
            setHeaderClass('header-fixed scroll-down');
        } else {
            setHeaderClass('header-static');
        }
    }, [isScrollingUp, isScrollingDown]);
    
    useEffect(() => {
        document.body.classList.remove('scroll-up', 'scroll-down', 'scrolling');
        if(isScrollingUp) {
            document.body.classList.add('scrolling', 'scroll-up');
        } else if(isScrollingDown) {
            document.body.classList.add('scrolling', 'scroll-down');
        }
    }, [isScrollingUp, isScrollingDown]);

    return (
        <>
            <div className={headerClass}>
                <HeaderPub />
                <HeaderTop categories={categories} />
                <HeaderBottom categories={categories} />
            </div>
        </>
    )
};
