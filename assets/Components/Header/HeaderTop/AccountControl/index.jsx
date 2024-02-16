import React, { useState } from 'react';
import { useOpenState } from '../../../../CustomHook/state/useOpenState';
import { AccountButton } from '../../../../UI/Button/AccountButton';
import '../../../../styles/header/HeaderTop/accountCard.css';
import { useTouchingListener } from '../../../../CustomHook/listener/useTouchingListener';
import { WarningBadge } from '../../../../UI/Badge/WarningBadge';
import { AccountCard } from './AccountCard';


/**
 * 
 * @param {number} timeout (ms)
 */
export const useTimer = (timeout = 300) => {
    const [timer, setTimer] = useState(null);
    const clearTimer = () => {
        if(timer) {
            clearTimeout(timer);
            setTimer(null);
        }
    }
    const startTimer = (toDo) => {
        setTimer(
            setTimeout(() => {
                toDo();
            }, timeout)
        );
    }
    return [startTimer, clearTimer];
}


export const AccountControl = ({user, updateUser}) => {

    const [isOpen, open, close] = useOpenState(false);

    const [startTimer, clearTimer] = useTimer(300);
    const isTouching = useTouchingListener();

    const handleClick = e => {
        e.stopPropagation();
        if(isOpen) {
            e.preventDefault();
            close();
        } else {
            e.preventDefault();
            open();
        }
    }

    const handleMouseLeave = () => {
        if(isTouching) {
            return; // si on est sur écran tactile on veut pas que ça interfère avec le onClick
        }
        clearTimer();
        startTimer(close);
    }
    const handleMouseOver = () => {
        if(isTouching) {
            return; // si on est sur écran tactile on veut pas que ça interfère avec le onClick
        }
        clearTimer();
        startTimer(open);
    }

    return (
        <AccountButton additionalClass="account-opener badge-owner" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} onClick={handleClick} user={user}>
            {
                isOpen && (
                    <AccountCard close={close} user={user} updateUser={updateUser} />
                )
            }
            {
                user && user.roles.includes('ROLE_VENDOR') && !user.stripeConfirmed && <WarningBadge />
            }
        </AccountButton>
    )
}