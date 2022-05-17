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


let countryButtons = document.getElementById("countryButtons");

// skapar länderknapparna
function createCountryButtons (COUNTRYBUTTON) {
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


createCountryButtons (COUNTRYBUTTON);

function filterCountryButtons(buttonObject, COUNTRYBUTTON) {

    if (buttonObject.selected) {
       buttonObject.selected = false;
    } else {
       buttonObject.selected = true;
    }

 console.log(COUNTRYBUTTON);
 
 let countryArray = COUNTRYBUTTON.filter(countrybutton => countrybutton.selected);
 let idArray = countryArray.map(element => element.id);
 return CITIES.filter (city => idArray.includes(city.countryID));



}

// Det är denna som skapar alla boxarna till städerna 
function createCitiesFilterElements (cities) {
    let citiesDiv = document.querySelector("#cities");
    citiesDiv.innerHTML = "";
        for (let i = 0; i < cities.length; i++) {
            let div = document.createElement("div");
            div.classList.add("cityBox");
            let image = document.createElement("img");
            div.textContent = `${cities[i].name}`;
            image.src = `./Images/${cities[i].imagesNormal[0]}`;

            div.append (image);
            citiesDiv.append(div);
        }
        console.log(cities)
}
