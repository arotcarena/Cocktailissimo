import React, { forwardRef, useEffect, useRef } from 'react';
import { CloseButton } from '../Button/CloseButton';
import { createPortal } from 'react-dom';
import { useOpenState } from '../../CustomHook/state/useOpenState';

export const PopupModal = forwardRef(({children, additionalClass, isOpen, close = null, animated = true}, modalRef) => {

    const [modalIsOpen, openModal, closeModal] = useOpenState();
    useEffect(() => {
        if(!isOpen) {
            launchClosingAnimation();
        } else {
            cleanClosingAnimation();
            openModal();
        }
    }, [isOpen]);

    //animation de fermeture
    const containerRef = useRef();
    const launchClosingAnimation = () => {
        if(containerRef.current) {
            containerRef.current.classList.add('close');
            containerRef.current.addEventListener('animationend', closeModal);
        }
    }
    const cleanClosingAnimation = () => {
        if(containerRef.current) {
            containerRef.current.classList.remove('close');
            containerRef.current.removeEventListener('animationend', closeModal);
        }
    }

    //fermeture avec le closer intérieur à la modal
    const handleClose = () => {
        if(!close) {
            return;
        }
        if(!animated) {
            close();
            return;
        }
        launchClosingAnimation();
    };

    //blocage du scroll
    useEffect(() => {
        if(modalIsOpen) {
            document.querySelectorAll('html, body').forEach(elt => elt.classList.add('no-overflow'));
        } else {
            document.querySelectorAll('html, body').forEach(elt => elt.classList.remove('no-overflow'));
        }
    }, [isOpen]);

    const handleStopPropagation = e => {
        e.stopPropagation();
    };

    return (
            modalIsOpen && createPortal(
                <div ref={containerRef} className={'modal-container popup-modal-container' + (additionalClass ? ' '+additionalClass+'-container': '')} onClick={handleClose}>
                    <div ref={modalRef} className={'modal popup-modal' + (additionalClass ? ' '+additionalClass: '')} onClick={handleStopPropagation}>
                        {
                            close !== null && <CloseButton additionalClass="modal-closer" onClick={handleClose} />
                        }
                        {children}
                    </div>
                </div>,
                document.body
            )
    )
});



