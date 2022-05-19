"use strict";


// Array av landknapparna 
const COUNTRYBUTTON = [
    {
        "id": 0,
        "name": "Spain",
        "selected": false
    },
    {
        "id": 1,
        "name": "France",
        "selected": false
    },
    {
        "id": 2,
        "name": "Australia",
        "selected": false
    },
    {
        "id": 3,
        "name": "United Kingdom",
        "selected": false
    },
    {
        "id": 4,
        "name": "Sweden",
        "selected": false
    },
    {
        "id": 5,
        "name": "Mexico",
        "selected": false
    },
    {
        "id": 6,
        "name": "USA",
        "selected": false
    },
    {
        "id": 7,
        "name": "Argentina",
        "selected": false
    },
    {
        "id": 8,
        "name": "Chile",
        "selected": false
    },
    
];

// skapar länderknapparna
function createCountryButtons (COUNTRYBUTTON) {
    
let countryButtons = document.getElementById("countryButtons");    

    for (let i = 0; i < COUNTRYBUTTON.length; i++) {
        let button = document.createElement("button");
        button.innerText = ` ${COUNTRYBUTTON[i].name} `;

        button.addEventListener("click", function() {
            let foundCities = filterCountryButtons (COUNTRYBUTTON[i],COUNTRYBUTTON);
            createCitiesFilterElements (foundCities);
            button.classList.toggle("button-active");
        })
        countryButtons.appendChild(button);
        }

}


function filterCountryButtons(buttonObject, COUNTRYBUTTON) {

    if (buttonObject.selected) {
       buttonObject.selected = false;
    } else {
       buttonObject.selected = true;
    }

 
 let countryArray = COUNTRYBUTTON.filter(countrybutton => countrybutton.selected);
 let idArray = countryArray.map(element => element.id);
 return CITIES.filter (city => idArray.includes(city.countryID));

}

