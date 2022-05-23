'use strict'

function clickCity (city) {
  console.log(city)

  const text = document.createElement('h2')
  text.innerText = `${city.name}`

  let div = document.createElement('div')
  let fieldDiv = document.createElement('div')

  let programmesDiv = document.createElement('div')
  programmesDiv.id = 'programmes'

  fieldDiv.id = 'fieldButtonsOverlay'

  div.onclick = function closeCityOverlay () {
    document.getElementById('cityOverlay').style.width = '0%'
    document.getElementById('cityOverlay').innerHTML = ''
  }
  div.innerHTML = '&times;'
  div.id = "closeButton";

  let aboutCity = document.createElement('div')
  aboutCity.innerHTML = `
     <h3> Om Staden </h3>
     <p> ${city.text} </p>
     `

  addStorytelCityOverlay()
  addAdlibrisCityOverlay()

  let aboutCityImage = document.createElement('img')
  aboutCityImage.src = `./Images/${city.imagesNormal[1]}`

  let reviewCity = document.createElement('div')
  reviewCity.innerHTML = `
     <h3> Omdöme </h3>
     <p> Uteliv: ${reviewOut(city)} / 5 ⭐  </p>
     <p> Restaurang: ${reviewFood(city)} / 5 ⭐ </p>
     <p> Boende: ${reviewAccomodation(city)} / 5 ⭐  </p>

     `
  cityOverlay.append(text)
  cityOverlay.append(div)
  cityOverlay.append(aboutCity)
  cityOverlay.append(aboutCityImage)
  cityOverlay.append(reviewCity)
  cityOverlay.append(fieldDiv)
  cityOverlay.append(programmesDiv)

  createFieldButtonsOverlay(FIELDSBUTTON, city)

  return cityOverlay
}

function reviewOut (city) {
  let sum = 0
  let amountOfComments = []
  for (let x = 0; x < COMMENTS_CITY.length; x++) {
    if (COMMENTS_CITY[x].cityID == city.id) {
      let stars = COMMENTS_CITY[x].stars
      sum = sum + stars.out
      amountOfComments.push(COMMENTS_CITY[x])
    }
  }
  if (sum == 0) {
    return 'Saknar tyvärr omdöme'
  }
  return Math.round(sum / amountOfComments.length)
}

function reviewFood (city) {
  let sum = 0
  let amountOfComments = []
  for (let x = 0; x < COMMENTS_CITY.length; x++) {
    if (COMMENTS_CITY[x].cityID == city.id) {
      let stars = COMMENTS_CITY[x].stars
      sum = sum + stars.food
      amountOfComments.push(COMMENTS_CITY[x])
    }
  }
  if (sum == 0) {
    return 'Saknar tyvärr omdöme'
  }
  return Math.round(sum / amountOfComments.length)
}

function reviewAccomodation (city) {
  let sum = 0
  let amountOfComments = []

  for (let x = 0; x < COMMENTS_CITY.length; x++) {
    if (COMMENTS_CITY[x].cityID == city.id) {
      let stars = COMMENTS_CITY[x].stars
      sum = sum + stars.accomodation
      amountOfComments.push(COMMENTS_CITY[x])
    }
  }
  if (sum == 0) {
    return 'Saknar tyvärr omdöme'
  }
  return Math.round(sum / amountOfComments.length)
}

