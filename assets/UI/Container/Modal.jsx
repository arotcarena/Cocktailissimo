import React, { forwardRef, useEffect, useRef } from 'react';
import { CloseButton } from '../Button/CloseButton';
import { createPortal } from 'react-dom';

export const Modal = forwardRef(({children, additionalClass, isOpen, close = null, animated = true}, modalRef) => {

    useEffect(() => {
        if(isOpen) {
            document.querySelectorAll('html, body').forEach(elt => elt.classList.add('no-overflow'));
        } else {
            document.querySelectorAll('html, body').forEach(elt => elt.classList.remove('no-overflow'));
        }
    }, [isOpen]);

    const containerRef = useRef();

    const handleClose = () => {
        if(!close) {
            return;
        }
        if(!animated) {
            close();
            return;
        }
        containerRef.current.classList.add('close');
        containerRef.current.addEventListener('animationend', () => {
            close();
        });
    };

    const handleStopPropagation = e => {
        e.stopPropagation();
    };

    return (
            isOpen && createPortal(
                <div ref={containerRef} className={'modal-container' + (additionalClass ? ' '+additionalClass+'-container': '')} onClick={handleClose}>
                    <div ref={modalRef} className={'modal' + (additionalClass ? ' '+additionalClass: '')} onClick={handleStopPropagation}>
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



