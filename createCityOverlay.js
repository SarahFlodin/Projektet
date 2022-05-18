"use strict"

function clickCity(city){
console.log(city);
 
    const text = document.createElement("h2");
    text.innerText = `${city.name}`;

    let div = document.createElement("div");
    div.addEventListener("click", clickCity)

    div.onclick = function closeCityOverlay() {
       document.getElementById("cityOverlay").style.width = "0%";
       document.getElementById("cityOverlay").innerHTML = " ";
     }
     div.innerHTML = "&times;"

     let aboutCountry = document.createElement("div");
     aboutCountry.innerHTML = `
     <h3> Om Staden </h3>
     <p> ${city.text} </p>
     `;

     let aboutCountryImage = document.createElement("img");
     aboutCountryImage.src = `./Images/${city.imagesNormal[1]}`;

     let reviewCountry = document.createElement("div");
     reviewCountry.innerHTML = `
     <h3> Omdömme </h3>
     <p> Uteliv:  </p>
     <p> Restaurang:  </p>
     <p> Boende:</p>
     `;

    cityOverlay.append(text);
    cityOverlay.append(div);
    cityOverlay.append(aboutCountry);
    cityOverlay.append(aboutCountryImage);
    cityOverlay.append(reviewCountry);

    return cityOverlay;
}

function openCityOverlay() {
  document.getElementById("cityOverlay").style.width = "100%";
}

// Tydlig
function closeCityOverlay() {
  document.getElementById("cityOverlay").style.width = "0%";
}
