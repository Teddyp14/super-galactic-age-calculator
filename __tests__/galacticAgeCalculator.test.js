import GalacticAge from "../src/js/galacticAgeCalculator";

describe("GalacticAge", () => {

    test("should create an object that contains the user's Earth age.", () => {
        const spaceAges = new GalacticAge(28);
        expect(spaceAges.earthAge).toEqual(28);
    });
});

describe("mercuryAge", () => {
    test("should return the user's age in Mercury years.", () => {
        const spaceAges = new GalacticAge(28);
        expect(spaceAges.mercuryAge()).toEqual(116.14);
    });
});