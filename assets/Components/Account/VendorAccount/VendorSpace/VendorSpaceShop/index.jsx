import React, { useState } from 'react';
import { ClipboardCopy } from '../../../../../UI/Utils/ClipBoardCopy';
import { InfoIcon } from '../../../../../UI/Icon/InfoIcon';
import { FormButton } from '../../../../../UI/Form/FormButton';
import { SuccessIcon } from '../../../../../UI/Icon/SuccessIcon';
import { useControlledFetchWithInit } from '../../../../../CustomHook/fetch/useControlledFetchWithInit';
import { useFetch } from '../../../../../CustomHook/fetch/useFetch';
import i18n from '../../../../../entrypoints/i18n';
import { SiteConfig } from '../../../../../Config/SiteConfig';
import { useTranslation } from 'react-i18next';

export const VendorSpaceShop = ({vendor}) => {
    const {t} = useTranslation('messages');

    const [isRegenerationAvailable, testLoading, testErrors, testReset] = useFetch('/'+i18n.language+'/api/vendorDashboard/isRegenerationAvailable');
    const [regenerationSuccess, setRegenerationSuccess] = useState(false);

    const [regenerateLink, companySlug, isLoading, error] = useControlledFetchWithInit('/'+i18n.language+'/api/vendorDashboard/regenerateCompanySlug', vendor.company.slug);

    const handleRegenerateClick = async () => {
        if(confirm(t('warning.regenerate_link'))) {
            await regenerateLink();  
            testReset();   
            setRegenerationSuccess(true);
            setTimeout(() => {
                setRegenerationSuccess(false);
            }, 2000);
        }
    };

    const vendorShopLinkPath = '/'+i18n.language+'/shop/'+companySlug;
    const vendorShopLink = SiteConfig.SITE_URL + vendorShopLinkPath;

    return (
        <div className="vendorDashboard-activity">
            <div className="account-profile-block">
                <div className="account-profile-block-row">
                    <div className="account-profile-block-row-label">{t('shop_page')}</div>
                    <div className="account-profile-block-row-text with-label">
                        <a className="account-link" href={vendorShopLinkPath}>{vendorShopLink}</a>
                    </div>
                    <ClipboardCopy copyText={vendorShopLink} />
                    {
                        isRegenerationAvailable && (
                            <div className="account-info-block">
                                <div className="account-info-text">
                                    <InfoIcon />
                                    {t('info.can_regenerate_shop_link')}
                                </div>
                                <FormButton additionalClass={'secondary'} onClick={handleRegenerateClick} loading={isLoading}>
                                    {t('regenerate_link')}
                                </FormButton>
                            </div>
                        )
                    }
                    {
                        error && <div className="form-error">{error}</div>
                    }
                    {
                        regenerationSuccess && (
                            <div className="account-success">
                                <SuccessIcon />
                                {t('success.link_regenerated')}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

