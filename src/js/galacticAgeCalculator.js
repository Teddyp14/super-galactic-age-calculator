export default class GalacticAge {
    constructor(earthAge) {
        this.earthAge = earthAge;
    }

    mercuryAge() {
        return parseFloat((this.earthAge * (365 / 88)).toFixed(2));
    }

    venusAge() {
        return parseFloat((this.earthAge * (365 / 225)).toFixed(2));
    }

    marsAge() {
        return parseFloat((this.earthAge * (365 / 687)).toFixed(2));
    }

    jupiterAge() {

    }
}