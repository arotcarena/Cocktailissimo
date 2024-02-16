import React from 'react';

export const StandardItemCard = ({item}) => {
    return (
        <div class="admin-product-list-item suggestedProducts">
            <img class="admin-product-list-item-img" src={item.picturePath} alt="Photo" />
            <div class="admin-product-list-item-text">
                <strong class="suggestedProduct">{item.title}</strong>
                {item.ref}
            </div>
        </div>
    )
}