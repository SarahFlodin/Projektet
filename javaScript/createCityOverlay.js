'use strict'
//Skapar en overlay för cities
//Skapar en function vid namn "clickCity" med en parameter "city" som innehåller cityId på den staden man klickar på 
//Skapar en const där "text" alltid är konstant. Skapar ett "h2 element" innehållande "city.name" (städernas namn)
//Sedan skapar vi divvar med "document.createElement" innehållande ämnena, annonser,program.
//skapar även en div.onclick som då heter "closeCityOverlay" som ska stänga overlayen, detta görs genom att ändra style.width till = '0%'
//sedan ska cityOverlay vara tom efter man klickat på "X" så vi hämtar först idet cityOverlay och i innerHTML gör den tom. 
//sedan hämtar vi '&times' från "innerHTML" vilket då är "X" man klickar på för att stänga overlayen. 
//Sedan deklarerar vi cityInfoDiv och skapar en div där vi anropar aboutCity och implementerar infon "om staden"
//deklarerar aboutCity och skapar en div med innehållande "h3 om staden" samt en paragraf med text om staden.
//deklarerar aboutCityImage och skapar ett img element där bilderna på städer skapas från "./Images/"
//deklarerar reviewCity och skapar div innehållande en "h3 med omdöme" samt 3 paragrafer innehållande resencioner på Uteliv, Restauran och Boende.
//sedan appendar vi allt som nämnts ovan och returnerar cityOverlay
 
function clickCity (city) {
  console.log(city)

  const text = document.createElement('h2')
  text.innerText = `${city.name}`

  let div = document.createElement('div')
  let fieldDiv = document.createElement('div')

  let addDivStorytel = document.createElement('div')
  addDivStorytel.classList.add('addStorytel')

  let addDivAdlibris = document.createElement('div')
  addDivAdlibris.classList.add('addAdlibris')

  let programmesDiv = document.createElement('div')
  programmesDiv.id = 'programmes'

  fieldDiv.id = 'fieldButtonsOverlay'

  div.onclick = function closeCityOverlay () {
    document.getElementById('cityOverlay').style.width = '0%'
    document.getElementById('cityOverlay').innerHTML = ''
  }
  div.innerHTML = '&times;'
  div.id = 'closeButton'

  let cityInfoDiv = document.createElement('div')
  cityInfoDiv.classList.add('aboutCity')

  let aboutCity = document.createElement('div')
  aboutCity.innerHTML = `
     <h3> Om Staden </h3>
     <p> ${city.text} </p>
     `

  let aboutCityImage = document.createElement('img')
  aboutCityImage.src = `./Images/${city.imagesNormal[1]}`

  let reviewCity = document.createElement('div')
  reviewCity.innerHTML = `
     <h3> Omdöme </h3>
     <p> Uteliv: ${reviewOut(city)} / 5 ⭐  </p>
     <p> Restaurang: ${reviewFood(city)} / 5 ⭐ </p>
     <p> Boende: ${reviewAccomodation(city)} / 5 ⭐  </p>

     `
  reviewCity.classList.add('reviewCity')

  cityOverlay.append(text)
  cityOverlay.append(div)
  cityOverlay.append(cityInfoDiv)
  cityInfoDiv.append(aboutCity)
  cityInfoDiv.append(aboutCityImage)
  cityOverlay.append(addDivStorytel)
  cityOverlay.append(reviewCity)
  cityOverlay.append(fieldDiv)
  cityOverlay.append(addDivAdlibris)
  cityOverlay.append(programmesDiv)

  createFieldButtonsOverlay(FIELDSBUTTON, city)
  addStorytel()
  addAdlibris()

  return cityOverlay
}

//Skapar en funktion för de 3 olika recensions kategorierna "reviewOut" ,"reviewFood", "reviewAccomodation" 
//I denna funktion skapar vi en loop för varje "kategori"
//Looparnas syfte är att vi först har en tom array som "pushar" in innehållet(kommentarerna) om "omdömmet" i arrayen om staden matchar med city.id

function reviewOut (city) {
  let sum = 0 //deklarerar sum och ger den värdet "0"
  let amountOfComments = [] //tom array
  for (let x = 0; x < COMMENTS_CITY.length; x++) {
    if (COMMENTS_CITY[x].cityID == city.id) {
      let stars = COMMENTS_CITY[x].stars
      sum = sum + stars.out 
      amountOfComments.push(COMMENTS_CITY[x]) //man pushar in "omdömmet" i arrayen om staden matchar med cityid
    }
  } //Om summan är = 0 ska det returneras "Saknar tyvärr omdöme"
  if (sum == 0) {
    return 'Saknar tyvärr omdöme'
  }
  return Math.round(sum / amountOfComments.length) //average 
}

function reviewFood (city) {
  let sum = 0 //deklarerar sum och ger den värdet "0"
  let amountOfComments = []
  for (let x = 0; x < COMMENTS_CITY.length; x++) {
    if (COMMENTS_CITY[x].cityID == city.id) {
      let stars = COMMENTS_CITY[x].stars
      sum = sum + stars.food
      amountOfComments.push(COMMENTS_CITY[x])
    }
  }//Om summan är = 0 ska det returneras "Saknar tyvärr omdöme"
  if (sum == 0) {
    return 'Saknar tyvärr omdöme'
  }
  return Math.round(sum / amountOfComments.length)//average 
}

function reviewAccomodation (city) {
  let sum = 0 //deklarerar sum och ger den värdet "0"
  let amountOfComments = []

  for (let x = 0; x < COMMENTS_CITY.length; x++) {
    if (COMMENTS_CITY[x].cityID == city.id) {
      let stars = COMMENTS_CITY[x].stars
      sum = sum + stars.accomodation
      amountOfComments.push(COMMENTS_CITY[x])
    }
  }//Om summan är = 0 ska det returneras "Saknar tyvärr omdöme"
  if (sum == 0) {
    return 'Saknar tyvärr omdöme'
  }
  return Math.round(sum / amountOfComments.length) //average 
}
