import { Controller } from '@hotwired/stimulus';


export default class extends Controller {

    connect() {
        const items = this.element.dataset.items;
        if(items) {
            for(const item of JSON.parse(items)) {
                window.sessionStorage.removeItem(item);
            }
        }
    }

}
