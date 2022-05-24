'use strict'

// Array av landknapparna
const COUNTRYBUTTON = [
  {
    id: 0,
    name: 'Spain',
    selected: false
  },
  {
    id: 1,
    name: 'France',
    selected: false
  },
  {
    id: 2,
    name: 'Australia',
    selected: false
  },
  {
    id: 3,
    name: 'United Kingdom',
    selected: false
  },
  {
    id: 4,
    name: 'Sweden',
    selected: false
  },
  {
    id: 5,
    name: 'Mexico',
    selected: false
  },
  {
    id: 6,
    name: 'USA',
    selected: false
  },
  {
    id: 7,
    name: 'Argentina',
    selected: false
  },
  {
    id: 8,
    name: 'Chile',
    selected: false
  }
]

// skapar länderknapparna
//Skapar en funktion vid namn createCountryButtons med parametern(FIELDSBUTTON)
//deklarerar en variabel som heter countryButtons och hämtar IDt "countryButtons"
//skapar en for loop där det skapas en button för varje objekt i arrayen.
//knappen innehåller text ifrån COUNTRYBUTTON där vi inuti loopen kallar på "korrekt" ämne. 
//sedan skapar vi en eventListener som innehåller "click" och en funktion så att man kan klicka på "button".
//i eventlistenern så skapas variabeln "foundCities" som anropar funktionen "filterCountryButtons" med parametrarna "COUNTRYBUTTON[i], COUNTRYBUTTON".
//parametrarna hämtar information från arrayen så att funktionen kan returnera rätt.
//sen anropas funktionen createCitiesFilterElements med parametern "foundCities". Foundcities gör att när man trycker på knappen så kommer rätt stadsboxar upp.
//sen skapas det en toggle för när knappen är nedtryckt
//sen appendas button till countryButtons.
function createCountryButtons (COUNTRYBUTTON) {
  let countryButtons = document.getElementById('countryButtons')

  for (let i = 0; i < COUNTRYBUTTON.length; i++) {
    let button = document.createElement('button')
    button.innerText = ` ${COUNTRYBUTTON[i].name} `

    button.addEventListener('click', function () {
      let foundCities = filterCountryButtons(COUNTRYBUTTON[i], COUNTRYBUTTON)
      createCitiesFilterElements(foundCities)
      button.classList.toggle('button-active')
    })
    countryButtons.appendChild(button)
  }
}

//Gör så att landknapparna hålls nere när man trycker på dem.
//Från början så är värdet i knappen false men när knappen blir tryckt så blir knappens värde true.
//i variabeln countryArray så filtreras COUNTRYBUTTON arrayen och tar ut dem objekt som är true.
//i variabeln idArray mappar man countryarray efter elementets id.
//i returneringen så filtreras arrayen Cities och man matchar city IDt med land IDt.
function filterCountryButtons (buttonObject, COUNTRYBUTTON) {
  if (buttonObject.selected) {
    buttonObject.selected = false
  } else {
    buttonObject.selected = true
  }

  let countryArray = COUNTRYBUTTON.filter(
    countrybutton => countrybutton.selected
  )
  let idArray = countryArray.map(element => element.id)
  return CITIES.filter(city => idArray.includes(city.countryID))
}
