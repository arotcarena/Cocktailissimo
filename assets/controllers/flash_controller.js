import { Controller } from '@hotwired/stimulus';


export default class extends Controller {

    connect() {
        this.element.querySelector('.flash-closer').addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            this.element.classList.add('closing');
            this.element.addEventListener('animationend', e => e.currentTarget.remove());
        });
    }

}
