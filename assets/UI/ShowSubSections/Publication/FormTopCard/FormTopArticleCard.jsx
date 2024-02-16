import React from 'react';

export const FormTopArticleCard = ({article}) => {
    return (
        <div className="review-form-product-card">
            <img className="review-form-product-img" src={article.picture.path} alt={article.picture.alt} />
            <div className="review-form-product-text">
                <div className="review-form-product-designation">{article.title}</div>
                <div className="review-form-product-designation article-createdAt">{article.createdAt}</div>
            </div>
        </div>
    )
}