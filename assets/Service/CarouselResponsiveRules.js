export class CarouselResponsiveRules {

    /** @type {Object} */
    #rules;

    /** @type {array} */
    #heightSteps = [];

    /** @type {Object} */
    #widthStepsByHeight = {};

    /**
     * 
     * @param {Object} rules {
     *      minHeight: {
     *          minWidth: {
     *              slidesToShow: number,
     *              slidesToScroll: number
     *          },
     *      },
     * }
     */
    constructor(rules) {
        this.#rules = rules;

        for(const [height, rulesByHeight] of Object.entries(rules)) {
            this.#heightSteps.push(height);
            this.#widthStepsByHeight[height] = Object.keys(rulesByHeight);
        }
    }

    /**
     * 
     * @param {number} width 
     * @param {number} height
     * @returns {Object} rules -> {slidesToShow: number, slidesToScroll: number}
     */
    getRules(width, height) {
        let heightStep = 0;
        let widthStep = 0;

        for(const hs of this.#heightSteps) {
            if(height > hs) {
                heightStep = hs;
            }
        };
        for(const ws of this.#widthStepsByHeight[heightStep]) {
            if(width > ws) {
                widthStep = ws;
            }
        }
        return this.#rules[heightStep][widthStep];
    }
    
}