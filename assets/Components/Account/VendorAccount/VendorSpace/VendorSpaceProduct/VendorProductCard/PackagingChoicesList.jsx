import React from 'react';

export const PackagingChoicesList = ({packagingChoices, selectedPackaging, selectPackaging}) => {

    return (
        <div className="vendorDashboard-product-card-packaging-row">
            {
                packagingChoices.map(packaging => (
                    <PackagingButton key={packaging.id} packaging={packaging} onSelect={selectPackaging} isSelected={selectedPackaging.id === packaging.id} />
                ))
            }
        </div>
    )
}


const PackagingButton = ({packaging, isSelected, onSelect}) => {

    const handleClick = e => {
        e.preventDefault();
        onSelect(packaging);
    }

    return (
        <button type="button" className={'product-card-packaging-button' + (isSelected ? ' active': '')} onClick={handleClick}>
            { packaging.label }
        </button>
    )
}