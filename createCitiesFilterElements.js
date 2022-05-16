"use strict";

// När man klickar på ett land filtreras städerna. 
function filterButtons (id) {
    return CITIES.filter(city => city.countryID == id);
   
}

// Det är denna som skapar alla boxarna till städerna 
function createCitiesFilterElements (cities) {
    console.log (cities);
    let citiesDiv = document.querySelector("#cities");
    citiesDiv.innerHTML = "";
        for (let i = 0; i < cities.length; i++) {
            let div = document.createElement("div");
            div.classList.add("cityBox");
            let image = document.createElement("img");
            div.textContent = `${cities[i].name}`;
            image.src = `./Images/${cities[i].imagesNormal[0]}`;
        image.style.height = "5vw"
            div.append (image);
            citiesDiv.append(div);
        }
}
