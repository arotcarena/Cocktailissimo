import React from 'react';

export const FormTopRecipeCard = ({recipe}) => {
    return (
        <div className="review-form-product-card">
            {
                recipe.picture && (
                    <img className="review-form-product-img" src={recipe.picture.path} alt={recipe.picture.alt} />
                )
            }
            <div className="review-form-product-text">
                <div className="review-form-product-designation">{recipe.title}</div>
            </div>
        </div>
    )
}