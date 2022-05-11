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
    let menuHamburger = document.getElementById("myNav");
    for (let i = 0; i < HAMBURGER.length; i++){
        let hamburgerContent = document.createElement("div");
        hamburgerContent.classList.add("hamburgerContent");
        let content = document.createElement("a")
        content.href = `${HAMBURGER[i].url}`;
        hamburgerContent.textContent =  `${HAMBURGER[i].text}`;
        menuHamburger.append(hamburgerContent);
        hamburgerContent.append(content);
    }
    return menuHamburger;
}

function openHamburger() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeHamburger() {
    document.getElementById("myNav").style.width = "0%";
  }

buildHamburger();
