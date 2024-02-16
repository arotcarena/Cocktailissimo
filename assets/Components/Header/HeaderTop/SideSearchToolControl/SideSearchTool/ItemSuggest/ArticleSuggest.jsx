import React from 'react';

export const ArticleSuggest = ({article}) => {

    return (
        <a className="product-suggest-item" href={article.target}>
            <img className="item-img" src={article.picture.path} alt={article.picture.alt}/>
            <div className="item-text">
                <h2 className="item-title">{article.title}</h2>
                <div className="item-subtitle">{article.subtitle}</div>
            </div>
        </a>
    )
}