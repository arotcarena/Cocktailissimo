import React from 'react';
import { PriceShow } from '../../../Product/PriceShow';

export const FormTopProductCard = ({product}) => {

    return (
        <div className="review-form-product-card">
            {
                product.firstPicture && (
                    <img className="review-form-product-img" src={product.firstPicture.path} alt={product.firstPicture.alt} />
                )
            }
            <div className="review-form-product-text">
                <div className="review-form-product-designation">{product.designation}</div>
                <div className="review-form-product-sub-designation">{product.basePackaging.label}</div>
                <div className="review-form-product-price">
                    <PriceShow price={product.basePackaging.price} />
                </div>
            </div>
        </div>
    )
}