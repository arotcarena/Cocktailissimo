import { Controller } from '@hotwired/stimulus';
import i18n from '../entrypoints/i18n';
import { t } from 'i18next';


export default class extends Controller {

    /** @type {HTMLElement} */
    #socialItems;

    /** @type {HTMLElement} */
    #moreButton;

    /** @type {number} */
    #countVisibleItems;

    #onClickMoreBinded;

    #onClickLessBinded;

    /** @type {string} */
    #seeLessLabel;
    /** @type {string} */
    #seeMoreLabel;

    connect() {
        this.#seeLessLabel = JSON.parse(this.element.dataset.seeless);
        this.#seeMoreLabel = JSON.parse(this.element.dataset.seemore);
        
        this.#socialItems = this.element.querySelectorAll('.social-item');

        this.#socialItems[0].removeAttribute('aria-hidden');
        this.#socialItems[0].classList.remove('invisible');

        this.#countVisibleItems = 1;
        this.#moreButton = this.element.querySelector('.social-list-more');

        this.#onClickMoreBinded = this.#onClickMore.bind(this);
        this.#onClickLessBinded = this.#onClickLess.bind(this);

        this.#moreButton.addEventListener('click', this.#onClickMoreBinded);
    }

    #onClickMore() {
        console.log('onClickMore')
        if(this.#countVisibleItems >= this.#socialItems.length) {
            return;
        }

        for(let i = this.#countVisibleItems; i < (this.#countVisibleItems + 2); i++) {

            if(i < this.#socialItems.length) {
                this.#socialItems[i].removeAttribute('aria-hidden');
                this.#socialItems[i].classList.remove('invisible');
            };
        }

        this.#countVisibleItems += 2;

        if(this.#countVisibleItems >= this.#socialItems.length) {
            this.#moreButton.innerText = this.#seeLessLabel;
            this.#moreButton.removeEventListener('click', this.#onClickMoreBinded);
            this.#moreButton.addEventListener('click', this.#onClickLessBinded);
        }
    }

    #onClickLess() {
        console.log('onClickLess')
        for(let i = 0; i < this.#socialItems.length; i++) {
            if(i !== 0) {
                this.#socialItems[i].setAttribute('aria-hidden', true);
                this.#socialItems[i].classList.add('invisible');
            }
        }

        this.#countVisibleItems = 1;

        this.#moreButton.innerText = this.#seeMoreLabel;
        this.#moreButton.removeEventListener('click', this.#onClickLessBinded);
        this.#moreButton.addEventListener('click', this.#onClickMoreBinded);
    }

}
