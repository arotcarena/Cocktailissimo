import { Controller } from '@hotwired/stimulus';



export default class extends Controller {

    /** @type {HTMLElement} */
    #toggleElt;
    
    /** @type {HTMLElement} */
    #button;

    /** @type {boolean} */
    #isOpen = false;

    #timer = null;

    connect() {
        this.#toggleElt = this.element.querySelector('.toggle');
        this.#button = this.element.querySelector('.toggle-opener');
        
        if(this.element.dataset.startingstate === 'open') {
            this.#open();
        }
        
        if(this.element.querySelector('.toggle-closer')) {
            this.#button.addEventListener('mouseover', this.#handleMouseOver.bind(this));
            this.#button.addEventListener('mouseleave', this.#handleMouseLeave.bind(this));
            this.element.querySelector('.toggle-closer').addEventListener('click', this.#close.bind(this));
        }
        this.#button.addEventListener('click', this.#handleToggle.bind(this));
    }

    #handleMouseOver(e) {
        this.#timer = setTimeout(() => {
            this.#open();
            this.#timer = null;
        }, 300);
    }
    #handleMouseLeave(e) {
        if(this.#timer) {
            clearTimeout(this.#timer);
        }
    }

    #handleToggle(e) {
        e.preventDefault();
        if(this.#isOpen) {
            this.#close();
        } else {
            this.#open();
        }
    }

    #open() {
        this.#toggleElt.classList.remove('invisible');
        this.#button.classList.add('expanded');
        this.#isOpen = true;
    }

    #close() {
        this.#toggleElt.classList.add('invisible');
        this.#button.classList.remove('expanded');
        this.#isOpen = false;
    }

   
}
