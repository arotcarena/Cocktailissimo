import React, { useEffect, useState } from 'react';
import { CloseIcon } from '../Icon/CloseIcon';
import '../../styles/UI/Container/info.css';
import { useTouchingListener } from '../../CustomHook/listener/useTouchingListener';
import { t } from 'i18next';

export const Info = ({children, label, timeout = 300}) => {

    const isTouching = useTouchingListener();
    
    const [isOpen, setOpen] = useState(false);
    const [timer, setTimer] = useState(null);

    const resetTimer = () => {
        if(timer) {
            clearTimeout(timer);
            setTimer(null);
        }
    }

    const open = () => {
        resetTimer();
        setOpen(true);
    } 
    const close = () => {
        resetTimer();
        setOpen(false);
    }

    const toggleOpen = e => {
        e.stopPropagation();
        resetTimer();
        setOpen(isOpen => !isOpen);
    }

    const handleCloseClick = e => {
        e.stopPropagation();
        close();
    } 

    const handleMouseOver = () => {
        if(isTouching) {
            return;
        }
        if(timer) {
            clearTimeout(timer);
        }
        setTimer(
            setTimeout(() => {
                open();
            }, timeout)
        );
    }

    const handleMouseLeave = () => {
        resetTimer();
    }

    return (
        <button className="info-opener" onClick={toggleOpen} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            {label}
            {
                isOpen && (
                    <InfoBubble onCloseClick={handleCloseClick} close={close}>
                        {children}
                    </InfoBubble>
                )
            }
        </button>
    )
}

const InfoBubble = ({children, onCloseClick, close}) => {
    
    const stopPropagation = e => {
        e.stopPropagation();
    }

    useEffect(() => {
        document.addEventListener('click', close);
        return () => document.removeEventListener('click', close);
    }, []);

    return (
        <div className="info-bubble" onClick={stopPropagation}>
            <div className="info-closer" role="button" aria-label={t('close', {ns: 'messages'})} onClick={onCloseClick}>
                <CloseIcon />
            </div>
            {children}
        </div>
    )
}