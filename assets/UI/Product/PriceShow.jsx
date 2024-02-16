import React from 'react';
import { priceFormater } from '../../functions/formaters';
import { PAY_PRICE_HT, PAY_PRICE_TTC, SHOW_PRICE_HT, SHOW_PRICE_TTC } from '../../functions/price/priceOperator';
import '../../styles/UI/Price/priceShow.css';
import { useTranslation } from 'react-i18next';


export const PriceShow = ({price}) => {
    const {t} = useTranslation('messages');

    switch(price.showType) {
        case SHOW_PRICE_HT:
            return (
                <span className={price.payType !== PAY_PRICE_HT ? 'light': ''}>{priceFormater(price.priceHT)}</span>
            );
        case SHOW_PRICE_TTC:
            return (
                <span className={price.payType !== PAY_PRICE_TTC ? 'light': ''}>{priceFormater(price.priceTTC)}</span>
            )
        default:
            if(price.payType === PAY_PRICE_TTC) {
                return (
                    <div className="price-show dual">
                        <div>
                            <span>{priceFormater(price.priceTTC)}</span><span className="price-show-suffix">{t('ttc')}</span>
                        </div>
                        <div className="light">
                            <span>{priceFormater(price.priceHT)}</span><span className="price-show-suffix">{t('ht')}</span>
                        </div>
                    </div>
                )
            }
            return (
                <div className="price-show dual">
                    <div>
                        <span>{priceFormater(price.priceHT)}</span><span className="price-show-suffix">{t('ht')}</span>
                    </div>
                    <div className="light">
                        <span>{priceFormater(price.priceTTC)}</span><span className="price-show-suffix">{t('ttc')}</span>
                    </div>
                </div>
            )
    }

}