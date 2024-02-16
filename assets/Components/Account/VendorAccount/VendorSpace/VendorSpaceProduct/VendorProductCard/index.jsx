import React, { useState } from 'react';
import { Counters } from './Counters';
import { StockUpdater } from './StockUpdater';
import { PackagingChoicesList } from './PackagingChoicesList';
import { SmallPicturesList } from './SmallPicturesList';
import { priceFormater } from '../../../../../../functions/formaters';
import { VendorProductReview } from './VendorProductReview';
import { useTranslation } from 'react-i18next';



export const VendorProductCard = ({product}) => {
    const {t} = useTranslation('messages');

    const [mainStock, setMainStock] = useState(product.mainStock);
    const [packagingChoices, setPackagingChoices] = useState(product.packagingChoices);

    const [selectedPicture, selectPicture] = useState(product.pictures[0]);
    const [selectedPackaging, selectPackaging] = useState(packagingChoices[0]);
    

    const updateStocks = (packagingId, stock, mainStock) => {
        setPackagingChoices(packagingChoices => packagingChoices.map(packaging => {
            if(packaging.id === packagingId) {
                packaging.stock = stock;
            }
            return packaging;
        }));
        setMainStock(mainStock);
    }


    return (
        <li className="vendorDashboard-product-card">
            <div className="vendorDashboard-product-card-img-wrapper">
                <div className="product-card-img-top-wrapper">
                    <div role="button" className="product-card-img-top" style={{background: 'url('+selectedPicture.path.index+') center center / cover no-repeat'}}>
                        <Counters product={product} />
                        <div className="vendorDashboard-product-card-counter-badge date-badge">{product.createdAt}</div>
                    </div>
                </div>
                <SmallPicturesList pictures={product.pictures} selectPicture={selectPicture} selectedPicture={selectedPicture} />
            </div>
            <div className="vendorDashboard-product-card-body">
                <h2 className="vendorDashboard-product-card-title">
                    <a href={product.target}>{product.designation}</a>
                    <span className="vendorDashboard-product-card-title-mute">
                        {selectedPackaging.publicRef}{selectedPackaging.privateRef ? ' / '+selectedPackaging.privateRef: ''}
                    </span>
                </h2>
                
                <div className="vendorDashboard-product-card-sub-text">
                    {product.category} / {product.subCategory}
                </div>
                
                <VendorProductReview product={product} />

                <PackagingChoicesList packagingChoices={packagingChoices} selectPackaging={selectPackaging} selectedPackaging={selectedPackaging} />

                <div className="vendorDashboard-product-card-price">
                    <div className="price-first">
                        <div className="price-label">{t('public_price_label')}</div>
                        <div className="price-value">{priceFormater(selectedPackaging.consumerPriceHT)} {t('ht')}</div>
                    </div>
                    <div className="price-last">
                        <div className="price-label">{t('business_price_label')}</div>
                        <div className="price-value">{priceFormater(selectedPackaging.businessPriceHT)} {t('ht')}</div>
                    </div> 
                </div>
                <div className="vendorDashboard-product-card-body-row stock-row">
                    <StockUpdater product={product} selectedPackaging={selectedPackaging} updateStocks={updateStocks} />
                    <div className="stock-right">{t('total_stock')} : <span className="stock-badge-show">{mainStock}</span></div>
                </div>
            </div>
        </li>
    )
}
