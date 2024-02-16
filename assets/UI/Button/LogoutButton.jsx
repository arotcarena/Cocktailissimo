import React from 'react';
import { LogoutIcon } from '../Icon/LogoutIcon';
import i18n from '../../entrypoints/i18n';
import { t } from 'i18next';

export const LogoutButton = ({className, ...props}) => {
    return (
        <a className={className ?? 'link-mute simple-link i-text'} href={'/'+ i18n.language +'/logout'} {...props}>
            <LogoutIcon />
            <span>{t('logout', {ns: 'messages'})}</span>
        </a>
    )
}