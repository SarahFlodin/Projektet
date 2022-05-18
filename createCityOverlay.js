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
     <h3> Omdöme </h3>
     <p> Uteliv: ${reviewOut(city)} / 5 </p>
     <p> Restaurang: ${reviewFood(city)} / 5</p>
     <p> Boende: ${reviewAccomodation(city)} / 5</p>
     `;

    cityOverlay.append(text);
    cityOverlay.append(div);
    cityOverlay.append(aboutCountry);
    cityOverlay.append(aboutCountryImage);
    cityOverlay.append(reviewCountry);

    return cityOverlay;
}

function reviewOut(city){
  let sum = 0;
  let amountOfComments = []
  for (let x = 0; x < COMMENTS_CITY.length; x++){
    if (COMMENTS_CITY[x].cityID == city.id){
      let stars = COMMENTS_CITY[x].stars;
      sum = sum + stars.out;
      amountOfComments.push(COMMENTS_CITY[x]) 
    }
  }
  return Math.round(sum / amountOfComments.length)
}

function reviewFood(city){
  let sum = 0;
  let amountOfComments = []
  for (let x = 0; x < COMMENTS_CITY.length; x++){
    if (COMMENTS_CITY[x].cityID == city.id){
      let stars = COMMENTS_CITY[x].stars;
      sum = sum + stars.food;
      amountOfComments.push(COMMENTS_CITY[x]) 
    }
  }
  return Math.round(sum / amountOfComments.length)
}

function reviewAccomodation(city){
  let sum = 0;
  let amountOfComments = []
  for (let x = 0; x < COMMENTS_CITY.length; x++){
    if (COMMENTS_CITY[x].cityID == city.id){
      let stars = COMMENTS_CITY[x].stars;
      sum = sum + stars.accomodation;
      amountOfComments.push(COMMENTS_CITY[x]) 
    }
  }
  return Math.round(sum / amountOfComments.length)
}

function openCityOverlay() {
  document.getElementById("cityOverlay").style.width = "100%";
}

// Tydlig
function closeCityOverlay() {
  document.getElementById("cityOverlay").style.width = "0%";
}
