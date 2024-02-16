import React from 'react';

export const RecipeCard = ({recipe}) => {


    return (
        <li className="product-card type-recipe">
            <a className="product-card-img-link" href={recipe.target}>
                <div className="product-card-img-wrapper">
                    <img className="product-card-img" src={recipe.picture.path} alt={recipe.picture.alt} />
                </div>
            </a>
            <div className="product-card-body">
                <h2 className="product-card-title"><a href={recipe.target}>{recipe.title}</a></h2>
                
                <ul className="product-card-list">
                    {
                        recipe.ingredients.map((ingredient, index) => (
                            <li className="product-card-list-item" key={index}>
                                <span>{ingredient}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </li>
    )
}