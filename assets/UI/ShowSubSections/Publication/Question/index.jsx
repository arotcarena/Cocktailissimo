import React, { useEffect, useRef, useState } from 'react';
import { useOpenState } from '../../../../CustomHook/state/useOpenState';
import { SearchResults } from '../../../Search/SearchResults';
import { QFilter } from '../../../Search/QFilter';
import { FormButton } from '../../../Form/FormButton';
import { Modal } from '../../../Container/Modal';
import { LangFilter } from '../../../Search/LangFilter';
import { QuestionCard } from './QuestionCard';
import { QuestionCreate } from './QuestionCreate';
import { usePublicationCRUD } from '../../../../CustomHook/publication/usePublicationCRUD';
import { useTranslation } from 'react-i18next';
import { ShowUserQuestion } from './ShowUserQuestion';


export const Question = ({ownerTopCard, fetchAllEntrypoint, createEntrypoint}) => {
    const {t, i18n} = useTranslation('messages');
    
    const [filters, setFilters] = useState({
        page: 1,
        limit: 10,
        q: '',
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
        '/'+ i18n.language +'/api/question/show',
        '/'+i18n.language+'/api/question/delete',
        createEntrypoint,
        '/'+i18n.language+'/api/answer/create/question',
        filters,
        setFilters,
        scrollToControls
    );

    //QuestionAnswer FORM  
    const [formIsOpen, openForm, closeForm] = useOpenState(false);

    useEffect(() => {
        if(location.href.includes('#question')) {
            openForm();
        }
    }, []);
   

    return (
        <>
            <ShowUserQuestion />
            {
                hasControls && (
                    <div ref={controlsRef} className="questionAnswer-controls">
                        <QFilter q={filters.q} setQ={q => setFilterValue('q', q)}>
                            {t('search_into_questions')}
                        </QFilter>
                        <div className="review-sub-controls">
                            <LangFilter id="qa-lang" lang={filters.lang} onChange={setFilterValue} />
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
                    result && result.items.map(question => (
                        <QuestionCard 
                            key={question.id} 
                            question={question} 
                            fetchOneFull={fetchOneFull}
                            deleteQuestion={deleteItem}
                            createAnswer={createAnswer}
                            deleteAnswer={deleteAnswer}
                            ownerTopCard={ownerTopCard}
                        />
                    ))
                }
            </SearchResults>

            <Modal additionalClass="review-form-modal center-form-modal" isOpen={formIsOpen} close={closeForm}>
                <QuestionCreate 
                    createQuestion={createItem}
                    close={closeForm} 
                    ownerTopCard={ownerTopCard}
                />
            </Modal>
            <FormButton additionalClass="bordeaux-black outline create-form-button" onClick={openForm}>
                {t('submit.post_question')}
            </FormButton>
        </>
    )
}