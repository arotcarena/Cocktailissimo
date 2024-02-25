import React, { useEffect, useState } from "react";
import { apiPreparedFetch } from "../../../../../../../../functions/api";
import { SiteConfig } from "../../../../../../../../Config/SiteConfig";
import { RelayForm } from "./RelayForm";
import { sortRelayList } from "../../../../../../../../functions/shipping/relayListSorter";
import { SecurityConfig } from "../../../../../../../../Config/SecurityConfig";


export const RelayChoice = ({setRelay, deliveryAddress, vendorGroup}) => {
    const [relays, setRelays] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const retrieveRelaysList = async () => {
        if(isLoading) {
            return;
        }
        setLoading(true);
        
        try {
            const relayList = await apiPreparedFetch('https://servicepoints.sendcloud.sc/api/v2/service-points/', {
                access_token: SecurityConfig.SENDCLOUD_PUBLIC_KEY, //sur localhost : grâce à cette authentication on peut ne pas utiliser le relais api curl
                address: deliveryAddress.postcode + ' ' + deliveryAddress.lineOne,
                country: deliveryAddress.country,
                radius: 15000, // 15km
                weight: vendorGroup.weight / 1000 // on convertit vendorGroup.weight (g) en kg
            }, 'GET');
            setRelays(sortRelayList(relayList)); //sortRelayList filtre et trie les résultats
        } catch(e) {
            console.error(e);
        }
        setLoading(false);
    }

    useEffect(() => {
        retrieveRelaysList();
    }, []);


    return (
        <RelayForm
            choices={relays}
            isLoading={isLoading}
            onSubmit={setRelay}
        />
    )

}