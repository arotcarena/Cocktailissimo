import React, { forwardRef, useState } from 'react';
import { usePublicationCRUD } from '../../../../../CustomHook/publication/usePublicationCRUD';
import i18n from '../../../../../entrypoints/i18n';
import { SearchResults } from '../../../../../UI/Search/SearchResults';
import { QuestionCard } from '../../../../../UI/ShowSubSections/Publication/Question/QuestionCard';
import { FormTopProductCard } from '../../../../../UI/ShowSubSections/Publication/FormTopCard/FormTopProductCard';
import { SetSubmitInfoContext } from '../../../../../Context/ShowSubSectionsContext';
import { Flash } from '../../../../../UI/Flash/Flash';
import { Sorter } from '../../../../../UI/Search/Sorter';
import { WithoutAnswerFilter } from './WithoutAnswerFilter';


export const useVendorSpaceQuestion = (vendorId, scrollToControls) => {
    const [filters, setFilters] = useState({
        page: 1,
        limit: 10,
        withoutAnswer: false,
        sortBy: 'createdAt_DESC'
    });
    const setFilterValue = (key, value) => {
        setFilters(filters => ({
            ...filters,
            [key]: value,
            page: 1 // quand on change un filtre on doit remettre la page systématiquement à 1
        }));
    };

    const setSortBy = newSortBy => {
        setFilterValue('sortBy', newSortBy);
    };

    const {
        result, 
        fetchOneFull,
        createAnswer,
        deleteItem,
        deleteAnswer,
        isLoading, 
        handlePageChange,
        hasControls
    } = usePublicationCRUD(
        '/'+i18n.language + '/api/question/filterByVendor/'+vendorId,
        '/'+ i18n.language +'/api/question/show',
        '/'+i18n.language+'/api/question/delete',
        null,
        '/'+i18n.language+'/api/answer/create/question',
        filters,
        setFilters,
        scrollToControls
    );


    return {filters, setFilterValue, setSortBy, result, fetchOneFull, createAnswer, deleteItem, deleteAnswer, isLoading, handlePageChange, hasControls};
}


export const VendorSpaceQuestion = forwardRef(
    ({filters, setFilterValue, setSortBy, result, fetchOneFull, createAnswer, deleteItem, deleteAnswer, isLoading, handlePageChange, hasControls}, controlsRef) => {

    const sortChoices = {
        ['Plus récents d\'abord']: 'createdAt_DESC',
        ['Plus anciens d\'abord']: 'createdAt_ASC'
    };

    //pour answer create
    const [submitInfo, setSubmitInfo] = useState(null);

    return (
        <section id="question" class="product-show-sub-block questionAnswer-block">
            {
                hasControls && (
                    <>
                        <div ref={controlsRef} className="review-controls questionAnswer-controls">
                            <Sorter 
                                additionalClass="sub-sort-control"
                                sortBy={filters.sortBy} 
                                setSortBy={setSortBy}
                                choices={sortChoices}
                            />
                        </div>
                        <div className="review-sub-controls">
                            <WithoutAnswerFilter id="question-withoutAnswer" value={filters.withoutAnswer} onChange={setFilterValue} />
                        </div>
                    </>
                )
            }
            <SearchResults 
                isLoading={isLoading}
                result={result}
                pageChange={handlePageChange}
                >
                {
                    result && (
                        <SetSubmitInfoContext.Provider value={setSubmitInfo}>
                           {
                                result.items.map(question => (
                                    <QuestionCard 
                                        key={question.id} 
                                        question={question} 
                                        fetchOneFull={fetchOneFull}
                                        deleteQuestion={deleteItem}
                                        createAnswer={createAnswer}
                                        deleteAnswer={deleteAnswer}
                                        ownerTopCard={<FormTopProductCard product={question.product} />}
                                        verifyLoginBeforeAnswer={false}
                                    />
                                ))
                           }
                            <Flash isOpen={submitInfo !== null} type={submitInfo?.type} close={() => setSubmitInfo(null)}>
                                {submitInfo?.message}
                            </Flash>
                        </SetSubmitInfoContext.Provider>
                    )
                }
            </SearchResults>
        </section>
    )
});