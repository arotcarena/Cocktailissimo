import { apiFetch } from "./api";
import { priceFormater } from "./formaters";

/**
 * Appelé lors d'une modification du panier
 * 
 * @param {number|null} count 
 * @param {number|null} totalPrice 
 * @param {string} lang
 */
export const cartChipUpdate = async (count = null, totalPrice = null, lang = 'en') => {

    // si rien n'est passé, on initialise les valeurs avec un appel au serveur
    if(count === null && !totalPrice) {
        const lightCart = await apiFetch('/'+lang+'/api/cart/getLightCart');
        count = lightCart.count;
        totalPrice = lightCart.totalPrice.priceToPay;
    }

    // on affiche les valeurs
    if(document.querySelector('.cart-chip')) {

        const cartChip = document.querySelector('.cart-chip');

        setContent(cartChip, count, totalPrice);
        
        if(count === 0) {
            setHidden(cartChip);
        } else {
            setVisible(cartChip);
        }
    }
}


/**
 * Appelé uniquement quand on ajoute un produit depuis product_index ou product_show (pas lors d'un ajout de quantité depuis le panier)
 * @param {number} quantityToAdd 
 * @param {number} addPrice 
 */
export const cartChipAdd = (quantityToAdd, addPrice) => {
    if(document.querySelector('.cart-chip')) {

        const cartChip = document.querySelector('.cart-chip');
        
        const count = parseInt(cartChip.dataset.count) + quantityToAdd;

        let prevPrice = parseInt(cartChip.dataset.price);
        if(isNaN(prevPrice)) {
            prevPrice = 0;
        }

        
        const price = prevPrice + (quantityToAdd * addPrice);

        setContent(cartChip, count, price);

        if(count > 0) {
            setVisible(cartChip);
        }
    }
}





/**
 * 
 * @param {HTMLElement} cartChip 
 * @param {number} count 
 * @param {number} price 
 */
const setContent = (cartChip, count, price) => {
    cartChip.dataset.count = count;
    cartChip.dataset.price = price;

    cartChip.querySelector('.cart-count-chip').innerText = count.toString();
    cartChip.querySelector('.cart-price-chip').innerText = priceFormater(price);
}

/**
 * 
 * @param {HTMLElement} cartChip 
 */
const setVisible = (cartChip) => {
    cartChip.removeAttribute('hidden');
    cartChip.classList.add('change');
    setTimeout(() => {
        cartChip.classList.remove('change');
    }, 10);
    document.querySelector('.cart-opener').classList.add('active');
}


/**
 * 
 * @param {HTMLElement} cartChip 
 */
const setHidden = (cartChip) => {
    cartChip.setAttribute('hidden', true);
    document.querySelector('.cart-opener').classList.remove('active');
}

