'use strict'

// När man klickar på ett land filtreras städerna.
//funktionen returnerar filtreringen av städerna som matchar med country id.
function filterButtons (id) {
  return CITIES.filter(city => city.countryID == id)
}

//En funktion som skapar alla boxarna till städerna.
//Variabeln "citiesDiv" skapas och väljer klassen cities som finns i html.
//citiesDiv blir tom.
//En for loop skapas och går igenom cities.
//för varje objekt skapas en div med klassen "cityBox".
//divven får en eventlistener som är "click" och en funktion som heter "openCityOverlay".
//När man klickar på diven så ska "cityOverlay" och overlayens innehåll komma upp med clickCity funktionen.
//variabeln image skapar ett img element.
//divven får textContent med stadens namn.
//variabeln image blir assignad en bild som hör ihop med staden.
//image appendas till divven och divven appendas till "citiesDiv. 
function createCitiesFilterElements (cities) {
  let citiesDiv = document.querySelector('#cities')
  citiesDiv.innerHTML = ''

  for (let i = 0; i < cities.length; i++) {
    let div = document.createElement('div')
    div.classList.add('cityBox')

    div.addEventListener('click', function openCityOverlay () {
      clickCity(cities[i])
      document.getElementById('cityOverlay').style.width = '100%'
    })

    let image = document.createElement('img')
    div.textContent = `${cities[i].name}`
    image.src = `./Images/${cities[i].imagesNormal[0]}`

    div.append(image)
    citiesDiv.append(div)
  }
}
