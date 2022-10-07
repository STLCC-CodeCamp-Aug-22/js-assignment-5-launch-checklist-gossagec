// Write your JavaScript code here!

window.addEventListener("load", function () {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let aPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, aPlanet.name, aPlanet.diameter, aPlanet.star, aPlanet.distance, aPlanet.moons, aPlanet.image);
    })

    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        let faultyItems = document.getElementById("faultyItems");
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        formSubmission(document, faultyItems, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
        event.preventDefault();
    });

});

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;