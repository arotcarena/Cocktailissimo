import React, { useRef } from 'react';
import { MenuButton } from '../../../../UI/Button/MenuButton';
import { useOpenState } from '../../../../CustomHook/state/useOpenState';
import { Modal } from '../../../../UI/Container/Modal';
import { MobileMenu } from './MobileMenu';

export const MobileMenuControl = ({categories, user}) => {

    const [sideMenuIsOpen, openSideMenu, closeSideMenu] = useOpenState();

    const modalRef = useRef(null);

    return (
        <>
            <MenuButton additionalClass="mobile-menu-opener" onClick={openSideMenu} />
            <Modal ref={modalRef} isOpen={sideMenuIsOpen} close={closeSideMenu} additionalClass="left mobile-menu side-menu">
                <MobileMenu ref={modalRef} categories={categories} close={closeSideMenu} user={user} />
            </Modal>
        </>
    )
}