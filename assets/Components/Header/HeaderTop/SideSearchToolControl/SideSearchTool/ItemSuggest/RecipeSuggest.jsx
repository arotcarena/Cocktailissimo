import React from 'react';

export const RecipeSuggest = ({recipe}) => {

    return (
        <a className="product-suggest-item" href={recipe.target}>
            <img className="item-img" src={recipe.picture.path} alt={recipe.picture.alt}/>
            <div className="item-text">
                <h2 className="item-title">{recipe.title}</h2>
                <ul className="product-card-list">
                    {
                        recipe.ingredients.map((ingredient, index) => <li className="product-card-list-item" key={index}>{ingredient}</li>)
                    }
                </ul>
            </div>
        </a>
    )
}