export default class GalacticAge {
    constructor(earthAge, previousAge, futureAge) {
        this.earthAge = earthAge;
        this.previousAge = previousAge;
        this.futureAge = futureAge;
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
        return parseFloat((this.earthAge * (365 / 4332)).toFixed(2));
    }

    planetYearsSincePrevAge() {
        const yearsPassed = this.earthAge - this.previousAge;
        const mercuryYearsPassed = parseFloat((yearsPassed * (365 / 88)).toFixed(2));
        const venusYearsPassed = parseFloat((yearsPassed * (365 / 225)).toFixed(2));
        const marsYearsPassed = parseFloat((yearsPassed * (365 / 687)).toFixed(2));
        const jupiterYearsPassed = parseFloat((yearsPassed * (365 / 4332)).toFixed(2));

        return `Since you were ${this.previousAge}, ${yearsPassed} Earth years have passed, 
        ${mercuryYearsPassed} Mercury years have passed, 
        ${venusYearsPassed} Venus years have passed, 
        ${marsYearsPassed} Mars years have passed, 
        and ${jupiterYearsPassed} Jupiter years have passed.`
    }
}