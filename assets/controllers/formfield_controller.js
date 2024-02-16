import { Controller } from '@hotwired/stimulus';


export default class extends Controller {

    connect() {
        const input = this.element.querySelector('input');

        if(input.value === '') {
            this.element.classList.add('down');
        }

        input.addEventListener('focus', e => {
            this.element.classList.remove('down')
        });
        input.addEventListener('blur', e => {
            if(input.value === '') {
                this.element.classList.add('down');
            }
        })
    }

}
