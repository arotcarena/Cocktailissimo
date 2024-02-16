import { Controller } from '@hotwired/stimulus';

export default class extends Controller {

    /** @type {Object} */
    #data;

    /** @type {HTMLElement} */
    #link;

    /** @type {HTMLElement} */
    #imgMobile;

    /** @type {HTMLElement} */
    #imgDesktop;

    /** @type {HTMLElement} */
    #imgWrapper;

    /** @type {HTMLElement} */
    #title;

    /** @type {HTMLElement} */
    #titleLink;

    /** @type {number} */
    #step = 1;

    /** @type {Object} */
    #currentHero;

    #callChange;

    #callAfterChange;

    #callStart;

    #callRestart;

    #timer;

    #timeout = 5000;

    /** @type {HTMLElement} */
    #visibleImg;

    /** @type {string} */
    #visibleImgSuffix;

    connect() {
        this.#data = JSON.parse(this.element.dataset.hero);
        this.#link = this.element.querySelector('.hero-link');
        this.#imgMobile = this.element.querySelector('.hero.mobile');
        this.#imgDesktop = this.element.querySelector('.hero.desktop');
        this.#imgWrapper = this.element.querySelector('.hero-wrapper');
        this.#title = this.element.querySelector('.home-title');
        this.#titleLink = this.element.querySelector('.home-cta-link');

        this.#callStart = this.#start.bind(this);
        this.#callRestart = this.#restart.bind(this);
        this.#callChange = this.#change.bind(this);
        this.#callAfterChange = this.#afterChange.bind(this);

        window.addEventListener('load', this.#callStart);
    }


    #beforeChange() {
        clearTimeout(this.#timer);
        
        this.#nextStep();
        this.#setVisibleImg();

        this.#visibleImg.classList.remove('appears');
        this.#visibleImg.classList.add('disappears');

        this.element.classList.remove('changed');
        this.element.classList.add('changing');

        this.#visibleImg.addEventListener('animationend', this.#callChange);
    }

    #change(e) {
        this.#visibleImg.removeEventListener('animationend', this.#callChange);
        this.#visibleImg.setAttribute('src', '/img/hero/' + this.#currentHero.picture + this.#visibleImgSuffix);

        this.#imgWrapper.classList.remove('align-start', 'align-end', 'align-center');
        this.#imgWrapper.classList.add('align-'+this.#currentHero.align);
        
        this.#visibleImg.setAttribute('alt', this.#currentHero.alt);
        this.#link.setAttribute('href', this.#currentHero.target);


        this.#title.innerText = this.#currentHero.title;
        this.#titleLink.setAttribute('href', this.#currentHero.target);
        this.#titleLink.innerText = this.#currentHero.linkLabel;

        this.element.classList.remove('changing');
        this.element.classList.add('changed');

        this.#visibleImg.addEventListener('load', this.#callAfterChange);
    }

    #afterChange(e) {
        e.target.removeEventListener('load', this.#callAfterChange);

        this.#visibleImg.classList.remove('disappears');
        this.#visibleImg.classList.add('appears');

        this.#visibleImg.addEventListener('animationend', this.#callRestart);
    }

    

    #start() {
        window.removeEventListener('load', this.#callStart);
        this.#timer = setTimeout(() => {
            this.#beforeChange();
        }, this.#timeout);
    }
    #restart() {
        this.#visibleImg.removeEventListener('animationend', this.#callRestart);
        this.#timer = setTimeout(() => {
            this.#beforeChange();
        }, this.#timeout);
    }

    #nextStep() {
        this.#step++;
        if(this.#step > 3) {
            this.#step = 1;
        }
        this.#currentHero = this.#data['hero'+this.#step];
    }
    #setVisibleImg() {
        if(this.#imgDesktop.checkVisibility()) {
            this.#visibleImg = this.#imgDesktop;
            this.#visibleImgSuffix = '_desktop.jpg';
        } else {
            this.#visibleImg = this.#imgMobile;
            this.#visibleImgSuffix = '_mobile.jpg';
        }
    }

}
