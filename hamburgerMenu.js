"use strict"

const HAMBURGER = [
    {
        "id": 0,
        "text":"Startsida",
        "url": "start.html",
    },
    {
        "id": 1,
        "text":"Länder",
        "url": "countryPage.html",
    },
    {
        "id": 2,
        "text":"Ämnen",
        "url": "programmePage.html",
    }
]

function buildHamburger(){
    let menuHamburger = document.getElementById("hamburgerMenu");
    for (let i = 0; i < HAMBURGER.length; i++){
        let hM = document.createElement("div");
        let hamburgEr = document.createElement("link")
        hamburgEr.src = `${HAMBURGER[i].url}`;
        hM.innerHTML =  `${HAMBURGER[i].text}`;
        menuHamburger.append(hamburgEr);
        hamburgEr.append(hM);
    }
    return menuHamburger;
}

buildHamburger();
