import React, { useRef } from 'react';
import { CloseButton } from '../Button/CloseButton';
import { createPortal } from 'react-dom';
import { SuccessIcon } from '../Icon/SuccessIcon';
import { DangerIcon } from '../Icon/DangerIcon';
import { InfoIcon } from '../Icon/InfoIcon';

export const Flash = ({children, button = null, type = 'info', isOpen, close}) => {

    const wrapperRef = useRef(null);

    const handleClose = () => {
        wrapperRef.current.classList.add('closing');
        wrapperRef.current.addEventListener('animationend', close);    
    }

    return (
        isOpen && createPortal(
            (
                <div ref={wrapperRef} className={'js-flash-wrapper' + ' ' + type}>
                    <div className="js-flash">
                        {
                            type === 'success' && <SuccessIcon />
                        }
                        {
                            type === 'danger' && <DangerIcon />
                        }
                        {
                            type !== 'success' && type !== 'danger' && <InfoIcon />
                        }
                        <span>
                            {children}
                        </span>
                    </div>
                    {
                            button && (
                                <div className="js-flash-button">
                                    {button}
                                </div>
                            )
                    }
                    <CloseButton onClick={handleClose} />
                </div>
            ),
            document.body
        )
    )
}