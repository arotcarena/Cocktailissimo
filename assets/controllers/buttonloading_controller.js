import { Controller } from '@hotwired/stimulus';


export default class extends Controller {

    connect() {
        this.element.addEventListener('click', e => {
            if(this.element.classList.contains('loading')) {
                e.preventDefault();
                return;
            }
            this.element.classList.add('loading');
            this.element.classList.add('disabled');
            this.element.setAttribute('disabled', '');
        });
    }

}
