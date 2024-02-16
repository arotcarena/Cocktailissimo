import React from 'react';
import { ExpandMoreIcon } from '../../../../UI/Icon/ExpandMoreIcon';
import { useTranslation } from 'react-i18next';

export const QuantitySelector = ({quantity, setQuantity, stock}) => {
    const {t} = useTranslation('messages');

    const handleChange = e => {
        setQuantity(e.target.value);
    }

    if(stock > 30) {
        stock = 30;
    }
    let options = [];
    for(let i = 1; i <= stock; i++) {
        options.push(i);
    }

    if(stock <= 1) {
        return <span>{t('quantity')} : {stock}</span>
    }

    return (
        <div className="quantity-group">
            <label htmlFor="quantity">{t('quantity')} : </label>
            <select id="quantity" className="product-quantity" onChange={handleChange} value={quantity}>
                {
                    options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))
                }
            </select>
            <ExpandMoreIcon additionalClass="icon" />
        </div>
    )
}