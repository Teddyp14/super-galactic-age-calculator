export default class GalacticAge {
    constructor(earthAge) {
        this.earthAge = earthAge;
    }

    mercuryAge() {
        return parseFloat((this.earthAge * (365 / 88)).toFixed(2));
    }

    venusAge() {

    }
}