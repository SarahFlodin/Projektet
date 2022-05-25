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

// Funktion som skapar boxarna för programmen. Parametern i funktionen är programmes.
// Vi deklarerar en variabel som får värdet programmesDiv och använder document.querySelector för att hämta diven med id programme. 
// Vi tömmer diven för att ej få upp dubbla element 
// Vi skapar sedan en for loop som går igenom arrayen av program och i denna skapar vi en funktion som heter findUnibyId som tar emot parametern universitet
// Här returnerar vi det universitetet som matchar programmets id.
// Deklarerar en variabel med värde div som skapar en div på HTML
// Skapar en addEventListener till click och skapar en function som ska ta programmen genom rätt id
// 
// När vi klickar på denna div anropas funktionen openProgrammeOverlay som ej har någon parameter.
// Här hämtar vi div id programmeOverlay från HTML och ger en bredd på 100%
//  Vi addar diven programmesboxes till klasslist och säger att div id ska vara lika med programmens id. 
// Vi deklarerar en permanent variabel (const) och ger den värde level som går igenom objektet LEVELS från databasen. 
// Denna går igenom programmen och får ut levels. (Kandidat, master, doctorand)
// Vi deklarerar en permanent variabel som får värdet uni.
// Denna går igenom arrayen UNIVERSITIES och här använder vi arraymetoden find för att få fram universitet. 
// I parantesen anropar vi funktionen findUnibyId
// Vi skapar en div som skapar kontent till HTML filen. 
// För att få ut namnen på programmen använder vi [i].name. 
// För att få ut nivå har vi då det valda programmet.level för att få ut leveln. För att få ut universitetens namn har vi uni.name
// <br> använder vi för att skapa mellanrum när man skrivver innerHTML
//  Vi appendar programmesdiven 

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
