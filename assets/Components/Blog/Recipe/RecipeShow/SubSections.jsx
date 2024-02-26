import React, { useState } from 'react';
import { ShowLinkedItems } from '../../../../UI/ShowSubSections/ShowLinkedItems';
import { SetSubmitInfoContext } from '../../../../Context/ShowSubSectionsContext';
import { Flash } from '../../../../UI/Flash/Flash';
import { Comment } from '../../../../UI/ShowSubSections/Publication/Comment';
import { FormTopRecipeCard } from '../../../../UI/ShowSubSections/Publication/FormTopCard/FormTopRecipeCard';
import { Question } from '../../../../UI/ShowSubSections/Publication/Question';
import { useTranslation } from 'react-i18next';
import { useGetUser } from '../../../../CustomHook/useGetUser';


export const SubSections = ({recipe}) => {
    const {t, i18n} = useTranslation('messages');

    //pour comment et questionAnswer
    const [submitInfo, setSubmitInfo] = useState(null);

    //WITHOUT_SHOP //supprimer ça ////////////////////
    const {user, updateUser} = useGetUser();

    return (
        <>
            {
                //WITHOUT_SHOP //supprimer la condition
                user && ['consumer@email.com', 'pro@email.com', 'vendor@email.com', 'fnsandin@gmail.com'].includes(user.email) && (
                    <section className="product-show-sub-block suggestedProducts-block">
                        <h2 className="border-title">
                            <span>{t('linked_products')}</span>
                        </h2>
                        <ShowLinkedItems entrypoint={'/'+ i18n.language +'/api/recipe/'+ recipe.id +'/getLinkedProducts'} />
                    </section>
                )
            }

            <section className="product-show-sub-block suggestedProducts-block">
                <h2 className="border-title">
                    <span>{t('our_recipes')}</span>
                </h2>
                <ShowLinkedItems entrypoint={'/'+i18n.language+'/api/recipe/getSubCategories'} />
            </section>

            <section className="product-show-sub-block suggestedProducts-block">
                <h2 className="border-title">
                    <span>{t('linked_articles')}</span>
                </h2>
                <ShowLinkedItems entrypoint={'/'+ i18n.language +'/api/recipe/'+ recipe.id +'/getLinkedArticles'} />
            </section>

            <section className="product-show-sub-block suggestedProducts-block">
                <h2 className="border-title">
                    <span>{t('similar_recipes')}</span>
                </h2>
                <ShowLinkedItems entrypoint={'/'+ i18n.language +'/api/recipe/'+ recipe.id +'/getSimilarRecipes'} />
            </section>

            <SetSubmitInfoContext.Provider value={setSubmitInfo}>

                <section id="comment" className="product-show-sub-block text-block questionAnswer-block">
                    <h2 className="border-title">
                        <span>{t('comments')}</span>
                    </h2>
                    <div className="text-block-wrapper">
                        <Comment
                            fetchAllEntrypoint={'/'+i18n.language+'/api/comment/filterByOwner/recipe/'+recipe.id}
                            fetchOneFullEntrypoint={'/'+ i18n.language +'/api/comment/show'}
                            createEntrypoint={'/'+ i18n.language +'/api/comment/create/recipe/'+recipe.id}
                            ownerTopCard={<FormTopRecipeCard recipe={recipe} />}
                        />
                    </div>
                </section>

                <section id="question" className="product-show-sub-block text-block questionAnswer-block">
                    <h2 className="border-title">
                        <span>{t('questions_answers')}</span>
                    </h2>
                    <div className="text-block-wrapper">
                        <Question
                            fetchAllEntrypoint={'/'+i18n.language+'/api/question/filterByOwner/recipe/'+recipe.id}
                            createEntrypoint={'/'+ i18n.language +'/api/question/create/recipe/'+recipe.id}
                            ownerTopCard={<FormTopRecipeCard recipe={recipe} />}
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