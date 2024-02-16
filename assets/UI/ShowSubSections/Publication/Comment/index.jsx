import React, { useEffect, useRef, useState } from 'react';
import { useOpenState } from '../../../../CustomHook/state/useOpenState';
import { SearchResults } from '../../../Search/SearchResults';
import { FormButton } from '../../../Form/FormButton';
import { Modal } from '../../../Container/Modal';
import { LangFilter } from '../../../Search/LangFilter';
import { CommentCreate } from './CommentCreate';
import { CommentCard } from './CommentCard';
import i18n from '../../../../entrypoints/i18n';
import { usePublicationCRUD } from '../../../../CustomHook/publication/usePublicationCRUD';
import { t } from 'i18next';


export const Comment = ({ownerTopCard, fetchAllEntrypoint, fetchOneFullEntrypoint, createEntrypoint}) => {

    const [filters, setFilters] = useState({
        page: 1,
        limit: 10,
        lang: ''
    });

    const setFilterValue = (key, value) => {
        setFilters(filters => ({
            ...filters,
            [key]: value,
            page: 1 // quand on change un filtre on doit remettre la page systématiquement à 1
        }));
    };

     //on renderChange
     const controlsRef = useRef(null);
     const scrollToControls = () => {
        setTimeout(() => {
            const y = controlsRef.current.getBoundingClientRect().y;
            window.scrollBy(0, y - (window.innerHeight / 4));
        }, 0);
     };
    
    const {
        result, 
        fetchOneFull,
        createItem,
        createAnswer,
        deleteItem,
        deleteAnswer,
        isLoading, 
        handlePageChange,
        hasControls
    } = usePublicationCRUD(
        fetchAllEntrypoint,
        fetchOneFullEntrypoint,
        '/'+i18n.language+'/api/comment/delete',
        createEntrypoint,
        '/'+i18n.language+'/api/answer/create/comment',
        filters,
        setFilters,
        scrollToControls
    );


    //Comment FORM  
    const [formIsOpen, openForm, closeForm] = useOpenState(false);

    useEffect(() => {
        if(location.href.includes('#comment')) {
            openForm();
        }
    }, []);

    return (
        <>
            {
                hasControls && (
                    <div ref={controlsRef} className="questionAnswer-controls">
                        <div className="review-sub-controls">
                            <LangFilter id="comment-lang" lang={filters.lang} onChange={setFilterValue} />
                        </div>
                    </div>
                )
            }
            <SearchResults 
                isLoading={isLoading}
                result={result}
                pageChange={handlePageChange}
                >
                {
                    result && result.items.map(comment => (
                        <CommentCard 
                            key={comment.id} 
                            comment={comment} 
                            deleteComment={deleteItem}
                            createAnswer={createAnswer}
                            deleteAnswer={deleteAnswer}
                            fetchOneFull={fetchOneFull}
                            ownerTopCard={ownerTopCard}
                        />
                    ))
                }
            </SearchResults>

            <Modal additionalClass="review-form-modal center-form-modal" isOpen={formIsOpen} close={closeForm}>
                <CommentCreate 
                    createComment={createItem}
                    close={closeForm} 
                    ownerTopCard={ownerTopCard}
                />
            </Modal>
            <FormButton additionalClass="bordeaux-black outline create-form-button" onClick={openForm}>
                {t('post_a_comment', {ns: 'messages'})}
            </FormButton>
        </>
    )
}