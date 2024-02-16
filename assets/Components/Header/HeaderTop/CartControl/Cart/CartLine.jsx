import React, { memo, useEffect, useRef, useState } from 'react';
import { MinusIcon } from '../../../../../UI/Icon/Quantity/MinusIcon';
import { PlusIcon } from '../../../../../UI/Icon/Quantity/PlusIcon';
import { RemoveConfirm } from '../../../../../UI/Utils/RemoveConfirm';
import { PriceShow } from '../../../../../UI/Product/PriceShow';
import { TrashButton } from '../../../../../UI/Button/TrashButton';
import { useTranslation } from 'react-i18next';

export const CartLine = memo(({cartLine, error, remove, setQuantity}) => {
    const {t} = useTranslation('messages');

    const handleAdd = e => {
        e.preventDefault();
        setQuantity(cartLine.packaging.id, cartLine.quantity + 1);
        //obligatoire pour affichage temporaire de l'erreur
        renderError();
    }
    const handleLess = e => {
        e.preventDefault();
        setQuantity(cartLine.packaging.id, cartLine.quantity - 1);
        //obligatoire pour affichage temporaire de l'erreur
        renderError();
    }

    //obligatoire pour l'affichage temporaire de l'erreur
    const [errorMessage, setErrorMessage] = useState(null);
    useEffect(() => {
        renderError();
    }, [error]);

    const renderError = () => {
        setErrorMessage(error);
        setTimeout(() => {
            setErrorMessage(null);
        }, 2000);
    }
    
    //pour mettre un espace sous la ligne au moment du cart removing
    const cartLineRef = useRef(null);
    //confirmation on cart item remove
    const [removing, setRemoving] = useState(false);
    const handleRemoveClick = () => {
        setRemoving(true);
        cartLineRef.current.classList.add('removing');
    }
    const handleConfirmRemove = () => {
        remove(cartLine.packaging.id);
    }
    const handleCancelRemove = () => {
        setRemoving(false);
        cartLineRef.current.classList.remove('removing');
    }
    
    return (
            <li className={'cart-line-wrapper' + (removing ? ' remove-confirm': '')} ref={cartLineRef}>
                <div className="cart-line">
                    <a className="cart-line-img-link" href={cartLine.packaging.target}>
                        <img className="cart-line-img" src={cartLine.packaging.product.firstPicture.path} alt={cartLine.packaging.product.firstPicture.alt} />
                    </a>
                    <div className="cart-line-body">
                        <h3 className="cart-line-title"><a href={cartLine.packaging.target}>{cartLine.packaging.product.designation}</a></h3>
                        <div className="cart-line-sub-text">{cartLine.packaging.label}</div>
                        <div className="cart-line-text cart-line-price">
                            <PriceShow price={cartLine.unitPrice} />
                        </div>
                        <div className="cart-line-text row">
                            <div className="cart-line-row-item cart-line-quantity-row">
                                <button disabled={removing} className="cart-line-minus" onClick={handleLess} aria-label={t('quantity_minus')} title={t('quantity_minus')}>
                                    <MinusIcon />
                                </button>
                                <span className="cart-line-quantity">{cartLine.quantity}</span>
                                <button disabled={removing} className="cart-line-plus" onClick={handleAdd} aria-label={t('quantity_plus')} title={t('quantity_plus')}>
                                    <PlusIcon />
                                </button>
                            </div>
                            <div className="cart-line-row-item"><PriceShow price={cartLine.totalPrice} /></div>
                        </div>
                        {
                            errorMessage && (
                                <div className="form-error">{errorMessage}</div>
                            )
                        }
                    </div>
                    <TrashButton additionalClass="icon-button cart-line-remover" onClick={handleRemoveClick} />
                </div>
                {
                    removing && <RemoveConfirm onConfirm={handleConfirmRemove} close={handleCancelRemove} /> 
                }
                
            </li>
    )
});