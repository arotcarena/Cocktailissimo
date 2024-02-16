import React from 'react';

export const SubCategoryCard = ({subCategory}) => {

    return (
        <li className="product-card type-recipe">
            <a className="product-card-img-link" href={subCategory.target}>
                <div className="product-card-img-wrapper">
                    <img className="product-card-img" src={subCategory.smallPicture.path} alt={subCategory.smallPicture.alt} />
                </div>
            </a>
            <div className="product-card-body">
                <h2 className="product-card-title"><a href={subCategory.target}>{subCategory.name}</a></h2>
            </div>
        </li>
    )
}
