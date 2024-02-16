import React, { useRef, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { Sorter } from "../../../../../UI/Search/Sorter";
import { SearchResults } from "../../../../../UI/Search/SearchResults";
import { FormButton } from "../../../../../UI/Form/FormButton";
import { useOpenState } from "../../../../../CustomHook/state/useOpenState";
import { ReviewCreate } from "./ReviewCreate";
import i18n from "../../../../../entrypoints/i18n";
import { Modal } from "../../../../../UI/Container/Modal";
import { LangFilter } from "../../../../../UI/Search/LangFilter";
import { usePublicationCRUD } from "../../../../../CustomHook/publication/usePublicationCRUD";
import { FormTopProductCard } from "../../FormTopCard/FormTopProductCard";
import { useTranslation } from "react-i18next";

/**
 * createEntrypoint est passé uniquement pour le cas des reviews d'un product
 * @returns 
 */
export const ReviewList = ({fetchAllEntrypoint, createEntrypoint = null, product = null}) => {
    const {t} = useTranslation('messages');
    
    const [filters, setFilters] = useState({
        page: 1,
        limit: 10,
        sortBy: 'rate_DESC',
        lang: ''
    });

    const setFilterValue = (key, value) => {
        setFilters(filters => ({
            ...filters,
            [key]: value
        }));
    };

    const setSortBy = newSortBy => {
        setFilterValue('sortBy', newSortBy);
    };
    

    const sortChoices = {
        [t('sort.note_DESC', {ns: 'configs'})]: 'rate_DESC',
        [t('sort.note_ASC', {ns: 'configs'})]: 'rate_ASC',
        [t('sort.createdAt_DESC', {ns: 'configs'})]: 'createdAt_DESC',
        [t('sort.createdAT_ASC', {ns: 'configs'})]: 'createdAt_ASC'
    };


    //on renderChange
    const controlsRef = useRef(null);
    const scrollToControls = () => {
        setTimeout(() => {
            const y = controlsRef.current.getBoundingClientRect().y;
            window.scrollBy(0, y - (window.innerHeight / 4));
        }, 0);
    }

    const {
        result, 
        createItem,
        createAnswer,
        deleteItem,
        deleteAnswer,
        isLoading, 
        handlePageChange,
        hasControls
    } = usePublicationCRUD(
        fetchAllEntrypoint,
        '/'+ i18n.language +'/api/review/show',
        '/'+i18n.language+'/api/review/delete',
        createEntrypoint,
        '/'+i18n.language+'/api/answer/create/review',
        filters,
        setFilters,
        scrollToControls
    );


    //REVIEW FORM  
    const [formIsOpen, openForm, closeForm] = useOpenState(false);


    return (
        <>
            <div ref={controlsRef} className="review-controls">
                {
                    // s'il s'agit des reviews d'un product, alors on peut ajouter un avis
                    // s'il s'agit des reviews d'un vendor, alors on ne peut pas ajouter d'avis
                    product && (
                        <>
                            <Modal additionalClass="review-form-modal center-form-modal" isOpen={formIsOpen} close={closeForm}>
                                <ReviewCreate 
                                    createReview={createItem}
                                    close={closeForm}
                                    ownerTopCard={<FormTopProductCard product={product} />}
                                />
                            </Modal>
                            <FormButton additionalClass="bordeaux-black outline" onClick={openForm}>
                                {
                                    (result && result.count === 0)
                                    ?
                                    t('submit.first_review')
                                    :
                                    t('submit.review')
                                }
                            </FormButton>
                        </>
                    )
                }
                {
                    hasControls && (
                        <Sorter 
                            additionalClass="sub-sort-control"
                            sortBy={filters.sortBy} 
                            setSortBy={setSortBy}
                            choices={sortChoices}
                        />
                    )
                }
            </div>

            {
                hasControls && (
                    <div className="review-sub-controls">
                        <LangFilter id="review-lang" lang={filters.lang} onChange={setFilterValue} />
                    </div>
                )
            }
            
            <SearchResults 
                isLoading={isLoading}
                result={result}
                pageChange={handlePageChange}
                >
                {
                    result && result.items.map(review => (
                        <ReviewCard 
                            key={review.id} 
                            review={review}
                            deleteReview={deleteItem}
                            createAnswer={createAnswer}
                            deleteAnswer={deleteAnswer}
                            product={product} //pour l'affichage de la topProductCard (si product = null alors on prendra review.product)
                        />
                    ))
                }
            </SearchResults>
        </>
    )
}
