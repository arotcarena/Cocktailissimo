import React from 'react';

export const SmallPicturesList = ({pictures, selectPicture, selectedPicture}) => {

    return (
        <div className="product-card-img-bottom-wrapper">
            {
                pictures.map(picture => (
                    <SmallPicture key={picture.id} picture={picture} onSelect={selectPicture} isSelected={picture.id === selectedPicture.id} />
                ))
            }
        </div>
    )
}

const SmallPicture = ({picture, isSelected, onSelect}) => {

    const handleClick = e => {
        e.preventDefault();
        onSelect(picture);
    }

    return (
        <button 
            onClick={handleClick}
            type="button" 
            className={'product-card-img-bottom' + (isSelected ? ' active': '')} 
            style={{background: 'url('+picture.path.smallIndex+') center center / cover no-repeat'}}
            >
        </button>
    )
}