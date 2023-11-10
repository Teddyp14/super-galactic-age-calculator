import GalacticAge from "../src/js/galacticAgeCalculator";

describe("GalacticAge", () => {

    test("should create an object that contains the user's Earth age.", () => {
        const spaceAges = new GalacticAge(28);
        expect(spaceAges.earthAge).toEqual(28);
    });
});