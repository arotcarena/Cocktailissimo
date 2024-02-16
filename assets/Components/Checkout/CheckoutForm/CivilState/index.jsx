import React, { useContext } from 'react';
import { EditButton } from '../../../../UI/Button/EditButton';
import { CivilStateForm } from './CivilStateForm';
import { STEP_CIVIL_STATE } from '..';
import { CheckoutContext } from '../..';
import { LogoutIcon } from '../../../../UI/Icon/LogoutIcon';
import { LinkButton } from '../../../../UI/Button/LinkButton';
import { useTranslation } from 'react-i18next';




export const CivilState = ({edit}) => {
    const {t, i18n} = useTranslation('messages');

    const {selectStep, userIsLogged, data: {civilState, company}} = useContext(CheckoutContext);

    const handleEdit = () => {
        selectStep(STEP_CIVIL_STATE);
    }
    
    return (
        <div className={'form-block' + (edit ? '': ' editable')}>
            <h3 className="form-block-title">1. {t('my_details')}</h3>
            {
                edit
                ?
                <div className="dual-form-block">
                    <div className="form-sub-block">
                        <h4 className="form-sub-block-title">{t('continue_as_guest')}</h4>
                        <CivilStateForm />
                    </div>
                    <div className="form-sub-block bottom">
                        <h4 className="form-sub-block-title">{t('or')}</h4>
                        <div className="submit-group double">
                            <LinkButton href={'/'+i18n.language+'/checkout/login'} additionalClass="fourth">{t('login')}</LinkButton>
                            <LinkButton href={'/'+i18n.language+'/checkout/register'} additionalClass="cancel">{t('registration')}</LinkButton>
                        </div>
                    </div>
                </div>
                :
                (
                    <>
                        <div className="info-group">
                            {
                                company && <p>{company}</p>
                            }
                            <p className="capitalize">{t(civilState.civility, {ns: 'configs'})} {civilState.firstName} {civilState.lastName}</p>
                            <p className="bold">{civilState.email}</p>
                        </div> 
                        {
                            userIsLogged ? (
                                <a href={'/'+ i18n.language +'/checkout/logout'} className="icon-button edit-button logout-button" type="button">
                                    <LogoutIcon />
                                </a>
                            ): <EditButton onClick={handleEdit} />
                        }
                    </>
                )
            }
        </div>
    )
}





