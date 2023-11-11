import GalacticAge from "../src/js/galacticAgeCalculator";

describe("GalacticAge", () => {

    test("should create an object that contains the user's Earth age, a previous age, and a future age.", () => {
        const spaceAges = new GalacticAge(28, 14, 40);
        expect(spaceAges.earthAge).toEqual(28);
        expect(spaceAges.previousAge).toEqual(14);
        expect(spaceAges.futureAge).toEqual(40);
    });
});

describe("mercuryAge", () => {
    test("should return the user's age in Mercury years.", () => {
        const spaceAges = new GalacticAge(28);
        expect(spaceAges.mercuryAge()).toEqual(116.14);
    });
});

describe("venusAge", () => {
    test("should return the user's age in Venus years.", () => {
        const spaceAges = new GalacticAge(28);
        expect(spaceAges.venusAge()).toEqual(45.42);
    });
});

describe("marsAge", () => {
    test("should return the user's age in Mars years.", () => {
        const spaceAges = new GalacticAge(28);
        expect(spaceAges.marsAge()).toEqual(14.88);
    });
});

describe("jupiterAge", () => {
    test("should return the user's age in Jupiter years.", () => {
        const spaceAges = new GalacticAge(28);
        expect(spaceAges.jupiterAge()).toEqual(2.36);
    });
});