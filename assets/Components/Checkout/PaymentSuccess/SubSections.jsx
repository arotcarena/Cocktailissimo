import React from 'react';
import { ShowLinkedItems } from '../../../UI/ShowSubSections/ShowLinkedItems';
import { useTranslation } from 'react-i18next';

export const SubSections = ({purchaseId}) => {
    const {t, i18n} = useTranslation('messages');

    return (
        <>
            <section className="product-show-sub-block suggestedProducts-block">
                <h2 className="border-title">
                    <span>{t('linked_products')}</span>
                </h2>
                <ShowLinkedItems entrypoint={'/'+ i18n.language +'/api/checkoutSuccess/'+ purchaseId +'/getSuggestedProducts'} />
            </section>

            <section className="product-show-sub-block suggestedProducts-block">
                <h2 className="border-title">
                    <span>{t('linked_recipes')}</span>
                </h2>
                <ShowLinkedItems entrypoint={'/'+ i18n.language +'/api/checkoutSuccess/'+ purchaseId +'/getLinkedRecipes'} />
            </section>

            <section className="product-show-sub-block suggestedProducts-block">
                <h2 className="border-title">
                    <span>{t('linked_articles')}</span>
                </h2>
                <ShowLinkedItems entrypoint={'/'+ i18n.language +'/api/checkoutSuccess/'+ purchaseId +'/getLinkedArticles'} />
            </section>

        </>
    )
}