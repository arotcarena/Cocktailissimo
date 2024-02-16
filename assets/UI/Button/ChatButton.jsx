import React from 'react';
import { Button } from './Button';
import { ChatIcon } from '../Icon/ChatIcon';
import { t } from 'i18next';

export const ChatButton = ({children, onClick, additionalClass, ...props}) => {
    return (
        <Button 
            className={'icon-button' + (additionalClass ? ' ' + additionalClass: '')} 
            aria-label={t('contact_us', {ns: 'messages'})} 
            title={t('contact_us', {ns: 'messages'})}
            onClick={onClick} 
            {...props}
        > 
            <ChatIcon />
            {children}
        </Button>
    )
}