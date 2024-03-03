import { Controller } from '@hotwired/stimulus';


export default class extends Controller {

    /** @type {HTMLSelectElement} */
    #vatLevelSelect;

    /** @type {HTMLElement} */
    #packagingChoicesInput;

    connect() {
        this.#vatLevelSelect = this.element.querySelector('#product_vatLevel');
        this.#packagingChoicesInput = this.element.querySelector('#packaging-choices-input');
        this.#packagingChoicesInput.style.display = 'none';

        this.#vatLevelSelect.addEventListener('change', this.#onChange.bind(this));
    }

    #onChange(e) {
        if(e.target.value) {
            this.#packagingChoicesInput.style.display = 'block';
            this.#packagingChoicesInput.dataset.vatlevel = e.target.value;
        }
    }
   
}
