export function mercuryYears(num) {
    return parseFloat((num * (365 / 88)).toFixed(2));
}

export function venusYears(num) {
    return parseFloat((num * (365 / 225)).toFixed(2));
}

export function marsYears(num) {
    return parseFloat((num * (365 / 687)).toFixed(2));
}

export function jupiterYears(num) {
    return parseFloat((num * (365 / 4332)).toFixed(2));
}

export class GalacticAge {

    constructor(earthAge, previousAge, futureAge) {
        this.earthAge = earthAge;
        this.previousAge = previousAge;
        this.futureAge = futureAge;
    }

    mercuryAge() {
        return mercuryYears(this.earthAge);
    }

    venusAge() {
        return venusYears(this.earthAge);
    }

    marsAge() {
        return marsYears(this.earthAge);
    }

    jupiterAge() {
        return jupiterYears(this.earthAge);
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

    planetYearsUntilFutureAge() {
        const yearsYetToPass = this.futureAge - this.earthAge;
        const mercuryYearsToPass = parseFloat((yearsYetToPass * (365 / 88)).toFixed(2));
        const venusYearsToPass = parseFloat((yearsYetToPass * (365 / 225)).toFixed(2));
        const marsYearsYetToPass = parseFloat((yearsYetToPass * (365 / 687)).toFixed(2));
        const jupiterYearsYetToPass = parseFloat((yearsYetToPass * (365 / 4332)).toFixed(2));

        return `${yearsYetToPass} Earth years have yet to pass, 
        ${mercuryYearsToPass} Mercury years have yet to pass, 
        ${venusYearsToPass} Venus years have yet to pass, 
        ${marsYearsYetToPass} Mars years have yet to pass, 
        and ${jupiterYearsYetToPass} Jupiter years have yet to pass before you turn ${this.futureAge}.`
    }
}