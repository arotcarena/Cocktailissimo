import { Controller } from '@hotwired/stimulus';


export default class extends Controller {

    connect() {
        this.element.addEventListener('mouseover', e => {
            this.element.classList.add('expanded');
        });
        this.element.addEventListener('mouseleave', e => {
            this.element.classList.remove('expanded');
        })
    }

}
