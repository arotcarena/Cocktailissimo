import React, { useState } from 'react';
import { Flash } from '../../../../UI/Flash/Flash';
import { ShowLinkedItems } from '../../../../UI/ShowSubSections/ShowLinkedItems';
import { SetSubmitInfoContext } from '../../../../Context/ShowSubSectionsContext';
import { FormTopProductCard } from '../../../../UI/ShowSubSections/Publication/FormTopCard/FormTopProductCard';
import { Question } from '../../../../UI/ShowSubSections/Publication/Question';
import { ReviewList } from '../../../../UI/ShowSubSections/Publication/Review/ReviewList';
import { useTranslation } from 'react-i18next';
import { useGetUser } from '../../../../CustomHook/useGetUser';


export const SubSections = ({product}) => {
    const {t, i18n} = useTranslation('messages');

    //pour reviewList et questionAnswer
    const [submitInfo, setSubmitInfo] = useState(null);

    
    //WITHOUT_SHOP //supprimer ça ////////////////////
    const {user, updateUser} = useGetUser();
      

    return (
        <>
            {
                //WITHOUT_SHOP //supprimer la condition
                user && ['consumer@email.com', 'pro@email.com', 'vendor@email.com'].includes(user.email) && (
                    <section className="product-show-sub-block suggestedProducts-block">
                        <h2 className="border-title">
                            <span>{t('suggested_products')}</span>
                        </h2>
                        <ShowLinkedItems entrypoint={'/'+ i18n.language +'/api/product/'+ product.id +'/getSuggestedProducts'} />
                    </section>
                )
            }
            <section className="product-show-sub-block suggestedProducts-block">
                <h2 className="border-title">
                    <span>{t('linked_recipes')}</span>
                </h2>
                <ShowLinkedItems entrypoint={'/'+ i18n.language +'/api/product/'+ product.id +'/getLinkedRecipes'} />
            </section>

            <section className="product-show-sub-block suggestedProducts-block">
                <h2 className="border-title">
                    <span>{t('linked_articles')}</span>
                </h2>
                <ShowLinkedItems entrypoint={'/'+ i18n.language +'/api/product/'+ product.id +'/getLinkedArticles'} />
            </section>

            <section className="product-show-sub-block suggestedProducts-block">
                <h2 className="border-title">
                    <span>{t('our_recipes')}</span>
                </h2>
                <ShowLinkedItems entrypoint={'/'+i18n.language+'/api/recipe/getSubCategories'} />
            </section>

            <SetSubmitInfoContext.Provider value={setSubmitInfo}>

                <section id="reviews" className="product-show-sub-block review-block">
                    <h2 className="border-title">
                        <span>{t('reviews')}</span>
                    </h2>
                    <ReviewList 
                        fetchAllEntrypoint={'/'+i18n.language+'/api/review/filterByProductId/'+product.id}
                        product={product}
                        createEntrypoint={'/'+i18n.language+'/api/review/create/'+product.id}
                    />
                </section>

                <section id="question" className="product-show-sub-block questionAnswer-block">
                    <h2 className="border-title">
                        <span>{t('questions_answers')}</span>
                    </h2>
                    <Question
                        fetchAllEntrypoint={'/'+i18n.language+'/api/question/filterByOwner/product/'+product.id}
                        createEntrypoint={'/'+ i18n.language +'/api/question/create/product/'+product.id}
                        ownerTopCard={<FormTopProductCard product={product} />}
                    />
                </section>

            </SetSubmitInfoContext.Provider>

            <Flash isOpen={submitInfo !== null} type={submitInfo?.type} close={() => setSubmitInfo(null)}>
                {submitInfo?.message}
            </Flash>
        </>
    )
} 