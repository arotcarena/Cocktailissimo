import { Controller } from '@hotwired/stimulus';


export default class extends Controller {

    connect() {
        const submitButton = this.element.querySelector('.js-submit');
        const cancelButton = this.element.querySelector('.js-cancel');

        const form = this.element.querySelector('form');
        form.addEventListener('submit', e => {
            if(submitButton.classList.contains('loading')) {
                e.preventDefault();
                return;
            }
            submitButton.classList.add('loading');
            submitButton.classList.add('disabled');
            submitButton.setAttribute('disabled', '');
            cancelButton.classList.add('disabled');
            cancelButton.setAttribute('disabled', '');
        });

        cancelButton.addEventListener('click', e => {
            if(cancelButton.classList.contains('loading')) {
                e.preventDefault();
                return;
            }
            cancelButton.classList.add('loading');
            cancelButton.classList.add('disabled');
            cancelButton.setAttribute('disabled', '');
            submitButton.classList.add('disabled');
            submitButton.setAttribute('disabled', '');
        });
    }

}
