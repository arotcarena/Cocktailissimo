import React from 'react';
import { Loader } from '../../../UI/Icon/Loader';
import { LockIcon } from '../../../UI/Icon/LockIcon';
import { Info } from '../../../UI/Container/Info';
import { PriceShow } from '../../../UI/Product/PriceShow';
import { CartSummaryVendorGroup } from './CartSummaryVendorGroup';
import { EmptyShowRow } from '../../../UI/Show/EmptyShowRow';
import { useTranslation } from 'react-i18next';

export const CartSummary = ({checkoutData: {countArticles, vendorGroups, articlesPrice, shippingCost, totalPrice}, isLoading}) => {
    const {t} = useTranslation('messages');

    return (
        <div className="cart-summary">
            <h2>
                <span>{t('my_purchase')}</span>
                {
                    countArticles !== null && <span>({countArticles})</span>
                }
            </h2>
            {
                isLoading && <div className="info-group no-ml"><Loader /></div>
            }
            {
                vendorGroups && (
                    <div className="cart-summary-body">
                        <ul>
                            {
                                vendorGroups.map((vendorGroup, index) => <CartSummaryVendorGroup key={index} vendorGroup={vendorGroup} />)
                            }
                        </ul>
                        <div className="cart-summary-footer">
                            <div className="cart-total-line">
                                <span>{t('items_total_price')}</span>
                                <span className="totalPrice">
                                    <PriceShow price={articlesPrice} />
                                </span>
                            </div>
                            <div className="cart-total-line">
                                <span>{t('delivery')}</span>
                                <span className="shippingCost">
                                    {
                                        shippingCost ? <PriceShow price={shippingCost} />: <EmptyShowRow />
                                    }
                                </span>
                            </div>
                            <div className="cart-summary-separator"></div>
                            <div className="cart-total-line main">
                                <span>{t('total')}</span>
                                <span className="totalPrice">
                                    <PriceShow price={totalPrice ?? articlesPrice} />
                                </span>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="cart-summary-info-wrapper">
                <div className="cart-summary-info i-text">
                    <LockIcon />
                    <span>{t('secure_payment')}</span>
                    <Info label={t('know_more')}>
                        <div>
                            <div>{t('secure_payment_explanation')}</div>
                        </div>
                    </Info>
                </div>
            </div>
        </div>
    )

}


