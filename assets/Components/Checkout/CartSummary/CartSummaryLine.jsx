import React from 'react';
import { PriceShow } from '../../../UI/Product/PriceShow';

export const CartSummaryLine = ({cartLine}) => {
    return (
        <li className="cart-summary-line">
            <a className="cart-summary-line-img-block" href={cartLine.packaging.target} target="_blank">
                <img className="cart-summary-line-img" src={cartLine.packaging.product.firstPicture.path} alt={cartLine.packaging.product.firstPicture.alt} />
            </a>
            <div className="cart-summary-line-text">
                <p className="designation">
                    <a href={cartLine.packaging.target}>{cartLine.packaging.product.designation}</a> 
                </p>      
                <div className="price">
                    <PriceShow price={cartLine.unitPrice} />
                </div>
                {
                    cartLine.quantity > 1 && (
                        <div className="cart-line-quantity-row">
                            <span className="cart-line-quantity cart-summary-line-quantity">{cartLine.quantity}</span>
                            <PriceShow price={cartLine.totalPrice} />
                        </div>
                    )
                }
            </div>
        </li>
    )
}