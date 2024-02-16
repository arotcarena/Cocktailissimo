import React, { useState } from 'react';
import { SetSubmitInfoContext, UserContext } from '../../../../Context/ShowSubSectionsContext';
import { Flash } from '../../../../UI/Flash/Flash';
import { ShowLinkedItems } from '../../../../UI/ShowSubSections/ShowLinkedItems';
import { Comment } from '../../../../UI/ShowSubSections/Publication/Comment';
import { FormTopArticleCard } from '../../../../UI/ShowSubSections/Publication/FormTopCard/FormTopArticleCard';
import { useTranslation } from 'react-i18next';
import { useGetUser } from '../../../../CustomHook/useGetUser';

export const SubSections = ({article}) => {
    const {t, i18n} = useTranslation('messages');

    //pour comment et questionAnswer
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
                            <span>{t('linked_products')}</span>
                        </h2>
                        <ShowLinkedItems entrypoint={'/'+ i18n.language +'/api/article/'+ article.id +'/getLinkedProducts'} />
                    </section>
                )
            }
            <section className="product-show-sub-block suggestedProducts-block">
                <h2 className="border-title">
                    <span>{t('linked_recipes')}</span>
                </h2>
                <ShowLinkedItems entrypoint={'/'+ i18n.language +'/api/article/'+ article.id +'/getLinkedRecipes'} />
            </section>

            <section className="product-show-sub-block suggestedProducts-block">
                <h2 className="border-title">
                    <span>{t('latest_articles')}</span>
                </h2>
                <ShowLinkedItems entrypoint={'/'+ i18n.language +'/api/article/'+ article.id +'/getLastArticles'} />
            </section>

            <section className="product-show-sub-block suggestedProducts-block">
                <h2 className="border-title">
                    <span>{t('our_recipes')}</span>
                </h2>
                <ShowLinkedItems entrypoint={'/'+i18n.language+'/api/recipe/getSubCategories'} />
            </section>

            <SetSubmitInfoContext.Provider value={setSubmitInfo}>

                <section id="comment" className="product-show-sub-block text-block questionAnswer-block">
                    <h2 className="border-title">
                        <span>{t('comments')}</span>
                    </h2>
                    <div className="text-block-wrapper">
                        <Comment
                            fetchAllEntrypoint={'/'+i18n.language+'/api/comment/filterByOwner/article/'+article.id}
                            fetchOneFullEntrypoint={'/'+ i18n.language +'/api/comment/show'}
                            createEntrypoint={'/'+ i18n.language +'/api/comment/create/article/'+article.id}
                            ownerTopCard={<FormTopArticleCard article={article} />}
                        />
                    </div>
                </section>

            </SetSubmitInfoContext.Provider>

            <Flash isOpen={submitInfo !== null} type={submitInfo?.type} close={() => setSubmitInfo(null)}>
                {submitInfo?.message}
            </Flash>
        </>
    )
}