import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './css/styles.css';
import './assets/images/mercury-gif.gif';
import './assets/images/venus-gif.gif';
import './assets/images/mars-gif.gif';
import './assets/images/jupiter-gif.gif';
import { GalacticAge } from "../src/js/galacticAgeCalculator";

function createUserObject() {
    const currentAge = document.getElementById("userAge").value;
    const previousAge = document.getElementById("previousAge").value;
    const futureAge = document.getElementById("futureAge").value;

    let userObject = new GalacticAge(currentAge, previousAge, futureAge);

    return userObject;
}

function getVariables() {
    const results = document.getElementById("results");
    const altResults = document.getElementById("altResults");
    const gifContainer = document.getElementById("gifContainer");
    const gif = document.createElement("img");
    let userInfo = createUserObject();

    return { results, altResults, gifContainer, gif, userInfo };
}

function getMercuryAge() {
    event.preventDefault();
    const variables = getVariables();

    variables.results.innerText = "";
    variables.gifContainer.innerText = "";

    variables.results.append(`You are ${variables.userInfo.mercuryAge()} Mercurian years old!`);
    variables.gif.src = './assets/images/mercury-gif.gif';
    variables.gif.alt = "Rotating Mercury.";
    variables.gifContainer.append(variables.gif);
}

function getVenusAge() {
    event.preventDefault();
    const variables = getVariables();

    variables.results.innerText = "";
    variables.gifContainer.innerText = "";

    variables.results.append(`You are ${variables.userInfo.venusAge()} Venutian years old!`);
    variables.gif.src = './assets/images/venus-gif.gif';
    variables.gif.alt = "Rotating Venus.";
    variables.gifContainer.append(variables.gif);
}

function getMarsAge() {
    event.preventDefault();
    const variables = getVariables();

    variables.results.innerText = "";
    variables.gifContainer.innerText = "";

    variables.results.append(`You are ${variables.userInfo.marsAge()} Martian years old!`);
    variables.gif.src = './assets/images/mars-gif.gif';
    variables.gif.alt = "Rotating Mars.";
    variables.gifContainer.append(variables.gif);
}

function getJupiterAge() {
    event.preventDefault();
    const variables = getVariables();

    variables.results.innerText = "";
    variables.gifContainer.innerText = "";

    variables.results.append(`You are ${variables.userInfo.jupiterAge()} Juvian years old!`);
    variables.gif.src = './assets/images/jupiter-gif.gif';
    variables.gif.alt = "Rotating Jupiter.";
    variables.gifContainer.append(variables.gif);
}

function getYearsSince() {
    event.preventDefault();
    const variables = getVariables();

    variables.altResults.innerText = "";

    if (variables.userInfo.earthAge < variables.userInfo.previousAge) {
        variables.altResults.append("Sorry, no time traveling allowed!");
    } else {
        variables.altResults.append(variables.userInfo.planetYearsSincePrevAge());
    }
}

function getYearsUntil() {
    event.preventDefault();
    const variables = getVariables();

    variables.altResults.innerText = "";

    if (variables.userInfo.earthAge > variables.userInfo.futureAge) {
        variables.altResults.append("Sorry, no time traveling allowed!");
    } else {
        variables.altResults.append(variables.userInfo.planetYearsUntilFutureAge());
    }
}


document.getElementById("mercuryAge").addEventListener("click", getMercuryAge);
document.getElementById("venusAge").addEventListener("click", getVenusAge);
document.getElementById("marsAge").addEventListener("click", getMarsAge);
document.getElementById("jupiterAge").addEventListener("click", getJupiterAge);
document.getElementById("yearsSince").addEventListener("click", getYearsSince);
document.getElementById("yearsUntil").addEventListener("click", getYearsUntil);
