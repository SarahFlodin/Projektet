"use strict"

function clickCity(event){
console.log(event.target)
 
  document.getElementById("cityOverlay")
    
  let foundCity = CITIES.countryID == COUNTRIES.id

    const text = document.createElement("h2");
    text.innerText = `${CITIES[foundCity].name}`;

    let div = document.createElement("div");
    div.addEventListener("click", clickCity)

    div.onclick = function closeCityOverlay() {
       document.getElementById("cityOverlay").style.width = "0%";
       document.getElementById("cityOverlay").innerHTML = " ";
     }
     div.innerHTML = "&times;"


    cityOverlay.append(text);
    cityOverlay.append(div);
    

    return cityOverlay;
}

function openCityOverlay() {
  document.getElementById("cityOverlay").style.width = "100%";
}

// Tydlig
function closeCityOverlay() {
  document.getElementById("cityOverlay").style.width = "0%";
}
