'use script'

// Funktion som filtrerar ämnesknapparna
// Tar emot parametrarna FIELDSBUTTON från Database och buttonObject är en variabel vi skapat för att flera knappar ska kunna vara nedtryckta samtidigt
// Vi skapar en if sats där vi säger om buttonObject är true så betyder det att knappen är nedtryckt och då kommer den in i fieldArray
// Om värdet däremot är false händer inget och ingen button är selected
// Vi console loggar FIELDSBUTTON för att se vad som står om knapparna, om när man tryckt ner en knapp så ska den ha värdet true
// Vi deklarerar en variabel med värdet fieldArray som går igenom FIELDSBUTTON arrayen och använder arraymetoden filter för att filtrera 
// I parantesen har vi en arrow funktion som går igenom fieldbutton för att hitta den valda knappen som blivit selected.
// Vi deklarerar en ny variabel som får värdet idArray och använder arraymetoden map för att skapa en ny array där dem elementen som matchar id läggs till
// Vi returnerar resultatet av filtreringen. Alltså då när vi går igenom PROGRAMMES array i databasen och filtrerar fram rätt program med rätt id för ämne


function filterProgrammeButtons (buttonObject, FIELDSBUTTON) {
  if (buttonObject.selected) {
    buttonObject.selected = false
  } else {
    buttonObject.selected = true
  }

  console.log(FIELDSBUTTON) 
  

  let fieldArray = FIELDSBUTTON.filter(fieldbutton => fieldbutton.selected)
  let idArray = fieldArray.map(element => element.id)

  return PROGRAMMES.filter(programme => idArray.includes(programme.subjectID))
}


// Skapar programboxarna och rederar information
function createFilterProgrammeElements (programmes) {
  let programmesDiv = document.querySelector('#programme')
  programmesDiv.innerHTML = ''

  for (let i = 0; i < programmes.length; i++) {
    function findUnibyId (universitet) {
      return programmes[i].universityID == universitet.id
    }

    let div = document.createElement('div')

    div.addEventListener('click', function getProgrammeId () {
      clickProgramme(programmes[i])
    })
    div.onclick = function openProgrammeOverlay () {
      document.getElementById('programmeOverlay').style.width = '100%'
    }

    div.classList.add('programmesBox')
    div.id = programmes[i].id
    const level = LEVELS[programmes[i].level]
    const uni = UNIVERSITIES.find(findUnibyId)

    div.innerHTML = `
      <h3>${programmes[i].name}</h3> 
      <p> Nivå: ${level}</p>
      <br><br> 
      <p>Universitet: ${uni.name}</p>`

    programmesDiv.append(div)
  }
}
