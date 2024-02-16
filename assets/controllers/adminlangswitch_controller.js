import { Controller } from '@hotwired/stimulus';


export default class extends Controller {

    /** @type {HTMLElement} */
    #wrapper;

    /** @type {string} */
    #currentLang;

    #buttons;

    connect() {
        this.#buttons = this.element.querySelectorAll('.lang-switch-button');
        this.#wrapper = document.querySelector(this.element.dataset.wrapperselector);

        this.#buttons.forEach(button => button.addEventListener('click', this.#onClick.bind(this)));

        this.#initialize(this.element.dataset.default);

        document.addEventListener('keydown', this.#onKeyDown.bind(this));
    }

    #initialize(defaultLang) {
        this.#wrapper.classList.add(defaultLang);
        this.#currentLang = defaultLang;
        this.#buttons.forEach(button => {
            if(button.dataset.lang === defaultLang) {
                button.classList.add('active');
            }
        });
    }

    #onKeyDown(e) {
        if(!e.ctrlKey) {
            return;
        }
        if(e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            let newLang = null;
            switch(this.#currentLang) {
                case 'en':
                    newLang = e.key === 'ArrowUp' ? 'it': 'fr';
                break;
                case 'fr':
                    newLang = e.key === 'ArrowUp' ? 'en': 'es';
                break;
                case 'es':
                    newLang = e.key === 'ArrowUp' ? 'fr': 'it';
                break;
                case 'it':
                    newLang = e.key === 'ArrowUp' ? 'es': 'en';
                break;
                default: 
                return;
            }
            this.#changeLang(newLang);
        }
    }

    #onClick(e) {
        //on change le param lang sur le wrapper
        const lang = e.target.dataset.lang;
        this.#changeLang(lang);
    }

    #changeLang(lang) {
        if(this.#currentLang !== lang) {
            this.#wrapper.classList.remove(this.#currentLang);
            this.#wrapper.classList.add(lang);
            this.#currentLang = lang;
        }

        //on met le active sur le bon button
        this.#buttons.forEach(button => {
            if(button.dataset.lang === lang && !button.classList.contains('active')) {
                button.classList.add('active');
            } else if(button.dataset.lang !== lang && button.classList.contains('active')) {
                button.classList.remove('active');
            }
        });
    }

}
