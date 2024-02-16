import React, { useEffect } from 'react';
import { useOpenState } from '../../../../CustomHook/state/useOpenState';
import { CartButton } from '../../../../UI/Button/CartButton';
import { Modal } from '../../../../UI/Container/Modal';
import { Cart } from './Cart';
import { cartChipUpdate } from '../../../../functions/cartChip';
import { useCartFetch } from '../../../../CustomHook/cart/useCartFetch';

export const CartControl = () => {

    const [cartIsOpen, openCart, closeCart] = useOpenState(false);
    
    const {cart, fetchCart, remove, setQuantity} = useCartFetch();

    useEffect(() => {
        cartChipUpdate(cart.count, cart.totalPrice?.priceToPay);
    }, [cart]);

   
    //pour déclencher le fetch à la première ouverture 
    useEffect(() => {
        sessionStorage.setItem('cart-update', 'true');
        if(window.location.search.substring(1) === 'cart') {
            openCart();
        }
    }, []);

  
    return (
        <>
            <CartButton onClick={openCart} additionalClass={'cart-opener' + (cart?.count > 0 ? ' active': '')}>
                <div className="cart-chip" hidden={true}>
                    <div className="cart-count-chip"></div>
                    <div className="cart-price-chip"></div>
                </div>
            </CartButton>
            <Modal isOpen={cartIsOpen} close={closeCart} additionalClass="right side-menu">
                <Cart cart={cart} fetchCart={fetchCart} remove={remove} setQuantity={setQuantity} />
            </Modal>
        </>
    )
}