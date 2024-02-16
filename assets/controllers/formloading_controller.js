import { Controller } from '@hotwired/stimulus';


export default class extends Controller {

    connect() {
        const form = this.element.querySelector('form');
        const button = form.querySelector('button[type=submit]');
        form.addEventListener('submit', e => {
            if(button.classList.contains('loading')) {
                e.preventDefault();
                return;
            }
            button.classList.add('loading');
            button.classList.add('disabled');
            button.setAttribute('disabled', '');
        });
    }

}
