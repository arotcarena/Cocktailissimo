import React from 'react';
import { ProductIndexReview } from '../../../../../../UI/Product/ProductIndexReview';
import { PriceShow } from '../../../../../../UI/Product/PriceShow';

export const ProductSuggest = ({product}) => {

    return (
        <a className="product-suggest-item" href={product.basePackaging.target}>
            <img className="item-img" src={product.firstPicture.path} alt={product.firstPicture.alt}/>
            <div className="item-text">
                <h2 className="item-title">
                    {product.designation}
                    <span className="product-card-title-suffix">{product.basePackaging.label ? (' ' + product.basePackaging.label): ''}</span>    
                </h2>
                
                <ProductIndexReview product={product} />
                <div className="item-price">
                    <PriceShow price={product.basePackaging.price} />
                </div>
            </div>
        </a>
    )
}