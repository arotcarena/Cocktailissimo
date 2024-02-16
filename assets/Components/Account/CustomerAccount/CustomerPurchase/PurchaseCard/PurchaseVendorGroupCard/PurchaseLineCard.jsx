import React from 'react';
import { PriceShow } from '../../../../../../UI/Product/PriceShow';

export const PurchaseLineCard = ({purchaseLine: {designation, packagingLabel, quantity, unitPrice, totalPrice}}) => {
    return (
        <tr>
            <td className="purchase-line-designation">{designation} <span className="text-mute">{packagingLabel}</span></td>
            <td>{quantity}</td>
            <td>
                <PriceShow price={unitPrice} />
            </td>
            <td>
                <PriceShow price={totalPrice} />
            </td>
        </tr>
    )
}