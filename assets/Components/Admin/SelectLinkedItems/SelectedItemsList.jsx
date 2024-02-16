import React from 'react';
import { CloseButton } from '../../../UI/Button/CloseButton';

export const SelectedItemsList = ({items, onRemove, loading}) => {
    if(loading) {
        return <div className="admin-form-info">Chargement...</div>
    }
    return (
        <ul className="admin-suggestedProducts-list">
            {
                items.map(item => <SelectedItem key={item.id} item={item} onRemove={onRemove} />)
            }
        </ul>
    )
} 

export const SelectedItem = ({item, onRemove}) => {
    
    const handleClick = () => {
        onRemove(item);
    }

    return (
        <li className="admin-suggestedProducts-item">
            <div className="admin-suggest-img" style={{backgroundImage: `url(${item.picturePath})`}}></div>
            <div className="admin-suggest-text">
                <div>{item.title}</div>
                <div>{item.ref}</div>
            </div>
            <CloseButton onClick={handleClick} additionalClass="admin-suggestedProducts-closer" />
        </li>
    )
}