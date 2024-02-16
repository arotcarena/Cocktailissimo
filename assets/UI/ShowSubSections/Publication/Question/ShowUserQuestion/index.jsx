import React, { memo, useEffect, useState } from 'react';
import { useControlledFetch } from '../../../../../CustomHook/fetch/useControlledFetch';
import { Modal } from '../../../../Container/Modal';
import { useOpenState } from '../../../../../CustomHook/state/useOpenState';
import { QuestionSummary } from '../QuestionCard/QuestionSummary';
import { Loader } from '../../../../Icon/Loader';
import { ShowUserQuestionCard } from './ShowUserQuestionCard';
import { FormButton } from '../../../../Form/FormButton';
import { useTranslation } from 'react-i18next';

export const ShowUserQuestion = () => {
    const {t, i18n} = useTranslation('messages');

    const [isOpen, open, close] = useOpenState(false);
    const [doFetch, question, isLoading, error] = useControlledFetch('/'+i18n.language+'/api/question/show');

    useEffect(() => {
        if(location.href.includes('#qu-show-')){
            const id = location.href.split('#qu-show-')[1];
            if(id) {
                open();
                doFetch({id: id});
            }
        }
    }, []);

    useEffect(() => {
        if(error) {
            close();
        }
    }, [error]);

    console.log(isOpen);

    return (
        <Modal additionalClass="review-form-modal center-form-modal" isOpen={isOpen}>
            <div className="review-modal-summary">
                {
                    !question ? <Loader additionalClass="main-loader" />: <ShowUserQuestionCard question={question} />
                }
                <FormButton onClick={close} additionalClass="bordeaux">{t('close')}</FormButton>
            </div>
        </Modal>
    )
};