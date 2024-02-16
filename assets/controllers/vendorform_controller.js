import { Controller } from '@hotwired/stimulus';



export default class extends Controller {

    connect() {
        const copyButton = this.element.querySelector('#js-copy');
        copyButton.addEventListener('click', this.#copy.bind(this));
    }

    /**
     * 
     * @param {Event} e 
     */
    #copy(e) {
        e.preventDefault();

        this.element.querySelector('.senderAddress_lineOne-group input').value = this.element.querySelector('.socialAddress_lineOne-group input').value;
        this.element.querySelector('.senderAddress_lineTwo-group input').value = this.element.querySelector('.socialAddress_lineTwo-group input').value;
        this.element.querySelector('.senderAddress_postcode-group input').value = this.element.querySelector('.socialAddress_postcode-group input').value;
        this.element.querySelector('.senderAddress_city-group input').value = this.element.querySelector('.socialAddress_city-group input').value;
        this.element.querySelector('.senderAddress_country-group select').value = this.element.querySelector('.socialAddress_country-group select').value;
        this.element.querySelector('.senderAddress_state-group input').value = this.element.querySelector('.socialAddress_state-group input').value;
    }
}
