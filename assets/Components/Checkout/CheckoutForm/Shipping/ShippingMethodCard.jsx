import React from 'react';
import { priceFormater } from '../../../../functions/formaters';
import { ChronopostIcon } from '../../../../UI/Icon/Carriers/ChronopostIcon';
import { ColissimoIcon } from '../../../../UI/Icon/Carriers/ColissimoIcon';
import { ColispriveIcon } from '../../../../UI/Icon/Carriers/ColispriveIcon';
import { DhlIcon } from '../../../../UI/Icon/Carriers/DhlIcon';
import { DpdIcon } from '../../../../UI/Icon/Carriers/DpdIcon';
import { FedexIcon } from '../../../../UI/Icon/Carriers/FedexIcon';
import { UpsIcon } from '../../../../UI/Icon/Carriers/UpsIcon';
import { MondialRelayIcon } from '../../../../UI/Icon/Carriers/MondialRelayIcon';
import { PriceShow } from '../../../../UI/Product/PriceShow';

export const ShippingMethodCard = ({shippingMethod: {carrier, name, price, leadTimeHours}}) => {
    return (
        <div className="shippingMethod-card">
            <div className="carrier-icon-wrapper">
                <CarrierIcon carrier={carrier} />
            </div>
            <div className="text">
                <div className="text-line txt-ellipsis">{name}</div>
                {
                    leadTimeHours && <div className="text-line txt-ellipsis mute">Livré en {leadTimeHours}h</div>
                }
            </div>
            <div className="right ws-nowrap">
                <PriceShow price={price} />
            </div>
        </div>
    )
}


export const CarrierIcon = ({carrier}) => {
    switch(carrier) {
        case 'chronopost':
            return <ChronopostIcon />
        case 'colissimo':
            return <ColissimoIcon />
        case 'colisprive':
            return <ColispriveIcon />
        case 'dhl':
            return <DhlIcon />
        case 'dpd':
            return <DpdIcon />
        case 'fedex':
            return <FedexIcon />
        case 'ups':
            return <UpsIcon />
        case 'mondial_relay':
            return <MondialRelayIcon />
        default:
            return (
                <div className="carrier-default-icon uppercase">{carrier}</div>
            );
    }
}

