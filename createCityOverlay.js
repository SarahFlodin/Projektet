"use strict"

function clickCity(event){
    console.log(event.target.id);
    let target = event.target.id;
   
   document.getElementById("cityOverlay")
    
    const text = document.createElement("h1");
    text.innerText = "Overlay";

    let div = document.createElement("div");
 div.addEventListener("click", clickCity)
    div.onclick = function closeCityOverlay() {
       document.getElementById("cityOverlay").style.width = "0%";
       document.getElementById("cityOverlay").innerHTML = " "
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

clickCities();

