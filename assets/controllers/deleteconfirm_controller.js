import { Controller } from '@hotwired/stimulus';

export default class extends Controller {

    connect() {
        this.element.addEventListener('click', e => {
            const message = this.element.dataset.deletemessage ? this.element.dataset.deletemessage: 'Confirmer l\'action ?';
            if(!confirm(message)) {
                e.preventDefault();
            }
        })
    }

}