import React from 'react';

export const ArticleCard = ({article}) => {
    

    return (
        <li className="product-card type-article">
            <a className="product-card-img-link" href={article.target}>
                <div className="product-card-img-wrapper">
                    <img className="product-card-img" src={article.picture.path} alt={article.picture.alt} />
                </div>
            </a>
            <div className="product-card-body">
                <h2 className="product-card-title article-card-title">
                    <a href={article.target}>
                        <span>{article.title}</span>
                        {
                            article.subtitle && <span className="product-card-subtitle"> - {article.subtitle}</span>
                        }
                    </a>
                </h2>
            </div>
        </li>
    )
}