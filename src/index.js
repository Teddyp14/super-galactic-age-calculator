import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './css/styles.css';
import { GalacticAge } from "../src/js/galacticAgeCalculator";

function createUserObject() {
    const currentAge = document.getElementById("userAge").value;
    const futureAge = document.getElementById("futureAge").value;
    const previousAge = document.getElementById("previousAge").value;

    let userObject = new GalacticAge(currentAge, futureAge, previousAge);

    return userObject;
}

function getMercuryAge() {
    event.preventDefault();
    const results = document.getElementById("results");
    const userInfo = createUserObject();

    results.innerText = "";

    results.append(`You are ${userInfo.mercuryAge()} Mercury years old!`);
}

function getVenusAge() {
    event.preventDefault();
    const results = document.getElementById("results");
    const userInfo = createUserObject();

    results.innerText = "";

    results.append(`You are ${userInfo.venusAge()} Venutian years old!`);
}

function getMarsAge() {
    event.preventDefault();
    const results = document.getElementById("results");
    const userInfo = createUserObject();

    results.innerText = "";

    results.append(`You are ${userInfo.marsAge()} Martian years old!`);
}

function getJupiterAge() {
    event.preventDefault();
    const results = document.getElementById("results");
    const userInfo = createUserObject();

    results.innerText = "";

    results.append(`You are ${userInfo.jupiterAge()} Juvian years old!`);
}

function getYearsSince() {
    event.preventDefault();
    const results = document.getElementById("results");
    let userInfo = createUserObject();

    results.innerText = "";

    results.append(userInfo.planetYearsSincePrevAge());
}

function getYearsUntil() {
    event.preventDefault();
    const results = document.getElementById("results");
    let userInfo = createUserObject();

    results.innerText = "";

    results.append(userInfo.planetYearsUntilFutureAge());
}

document.getElementById("mercuryAge").addEventListener("click", getMercuryAge);
document.getElementById("venusAge").addEventListener("click", getVenusAge);
document.getElementById("marsAge").addEventListener("click", getMarsAge);
document.getElementById("jupiterAge").addEventListener("click", getJupiterAge);
document.getElementById("yearsSince").addEventListener("click", getYearsSince);
document.getElementById("yearsUntil").addEventListener("click", getYearsUntil);