"use strict";


// Array av landknapparna 
const COUNTRYBUTTON = [
    {
        "id": 0,
        "name": "Spain"
    },
    {
        "id": 1,
        "name": "France"
    },
    {
        "id": 2,
        "name": "Australia"
    },
    {
        "id": 3,
        "name": "United Kingdom"
    },
    {
        "id": 4,
        "name": "Sweden"
    },
    {
        "id": 5,
        "name": "Mexico"
    },
    {
        "id": 6,
        "name": "USA"
    },
    {
        "id": 7,
        "name": "Argentina"
    },
    {
        "id": 8,
        "name": "Chile"
    },
    
];


let countryButtons = document.getElementById("countryButtons");

// skapar länderknapparna
function createCountryButtons (COUNTRYBUTTON) {
    for (let i = 0; i < COUNTRYBUTTON.length; i++) {
        const button = document.createElement("button");
        button.innerText = ` ${COUNTRYBUTTON[i].name} `;
        button.addEventListener("click", function() {
            let foundCities = filterButtons (i);
            createCitiesFilterElements (foundCities);
        })
        countryButtons.appendChild(button);
        }

}

createCountryButtons (COUNTRYBUTTON);

