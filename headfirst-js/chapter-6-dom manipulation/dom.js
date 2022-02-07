// let access = document.getElementById('code9');
// let code = access.innerHTML;
// code = code + " " + "midnight";
// alert(code);

// adding content to dom

// let planet = document.getElementById("greenplanet");
// console.log(planet);
// planet.innerHTML="welcome";
// console.log(planet.innerHTML);

function init() {
    let planet = document.getElementById('greenplanet');
    planet.innerHTML = "welcome";
    console.log(planet.innerHTML);
    planet.setAttribute("class","blueplanet");
}
window.onload=init;