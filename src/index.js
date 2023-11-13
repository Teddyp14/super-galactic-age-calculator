import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './css/styles.css';
// import './assets/fonts/Orbitron/static/Orbitron-Bold.ttf';
// import './assets/fonts/Space_Mono/SpaceMono-Regular.ttf';
import './assets/images/mercury-gif.gif';
import './assets/images/venus-gif.gif';
import './assets/images/mars-gif.gif';
import './assets/images/jupiter-gif.gif';
import { GalacticAge } from "../src/js/galacticAgeCalculator";

function createUserObject() {
    const currentAge = document.getElementById("userAge").value;
    const futureAge = document.getElementById("futureAge").value;
    const previousAge = document.getElementById("previousAge").value;

    let userObject = new GalacticAge(currentAge, futureAge, previousAge);

    return userObject;
}

function getVariables() {
    const results = document.getElementById("results");
    const gifContainer = document.getElementById("gifContainer");
    const gif = document.createElement("img");
    let userInfo = createUserObject();

    results.innerText = "";
    gifContainer.innerText = "";

    return { results, gifContainer, gif, userInfo };
}

function getMercuryAge() {
    event.preventDefault();
    const variables = getVariables();

    variables.results.append(`You are ${variables.userInfo.mercuryAge()} Mercury years old!`);
    variables.gif.src = './assets/images/mercury-gif.gif';
    variables.gif.alt = "Rotating Mercury.";
    variables.gifContainer.append(variables.gif);
}

function getVenusAge() {
    event.preventDefault();
    const variables = getVariables();

    variables.results.append(`You are ${variables.userInfo.venusAge()} Venutian years old!`);
    variables.gif.src = './assets/images/venus-gif.gif';
    variables.gif.alt = "Rotating Venus.";
    variables.gifContainer.append(variables.gif);
}

function getMarsAge() {
    event.preventDefault();
    const variables = getVariables();

    variables.results.append(`You are ${variables.userInfo.marsAge()} Martian years old!`);
    variables.gif.src = './assets/images/mars-gif.gif';
    variables.gif.alt = "Rotating Mars.";
    variables.gifContainer.append(variables.gif);
}

function getJupiterAge() {
    event.preventDefault();
    const variables = getVariables();

    variables.results.append(`You are ${variables.userInfo.jupiterAge()} Juvian years old!`);
    variables.gif.src = './assets/images/jupiter-gif.gif';
    variables.gif.alt = "Rotating Jupiter.";
    variables.gifContainer.append(variables.gif);
}

function getYearsSince() {
    event.preventDefault();
    const variables = getVariables();

    variables.results.append(variables.userInfo.planetYearsSincePrevAge());
}

function getYearsUntil() {
    event.preventDefault();
    const variables = getVariables();

    variables.results.append(variables.userInfo.planetYearsUntilFutureAge());
}


document.getElementById("mercuryAge").addEventListener("click", getMercuryAge);
document.getElementById("venusAge").addEventListener("click", getVenusAge);
document.getElementById("marsAge").addEventListener("click", getMarsAge);
document.getElementById("jupiterAge").addEventListener("click", getJupiterAge);
document.getElementById("yearsSince").addEventListener("click", getYearsSince);
document.getElementById("yearsUntil").addEventListener("click", getYearsUntil);