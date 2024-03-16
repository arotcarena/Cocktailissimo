import React, { useEffect, useState } from 'react';
import { PackagingChoicesInput } from './PackagingChoicesInput';
import { Option, Select } from '../../../UI/Form/Select';
import { VatLevels } from '../../../Config/VatLevels';

export const ProductFormReactBlock = ({productId, packagingChoices, vatLevel, packagingChoicesName, vatLevelName}) => {

    const [currentVatLevel, setCurrentVatLevel] = useState(vatLevel ?? null);

    const handleChange = e => {
        setCurrentVatLevel(e.target.value);
    }

    return (
        <>
            <div className="admin-form-group">
                <div className="admin-form-label">Niveau de TVA *</div>
                <Select className="admin-form-control" name={vatLevelName} value={currentVatLevel} onChange={handleChange}>
                    {
                        Object.entries(VatLevels.ADMIN_CHOICES).map(([label, value]) => (
                            <Option key={value} value={value}>{label}</Option>
                        ))
                    }
                </Select>
            </div>
            <div className="admin-form-group" style={{marginTop: '20px'}}>
                {
                    currentVatLevel && (
                        <PackagingChoicesInput
                            name={packagingChoicesName}
                            value={packagingChoices}
                            productId={productId}
                            vatLevel={currentVatLevel}
                        />
                    )
                }
            </div>
        </>
    )
}