import React, { memo } from 'react';
import { CategoryMenu } from './CategoryMenu';
import '../../../styles/Header/HeaderBottom/index.css';

export const HeaderBottom = memo(({categories, activeCategory, activeSubCategory}) => {

    return (
        <div className="header-bottom">
            <CategoryMenu categories={categories} />
        </div>
    )
});

