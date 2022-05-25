'use strict'

// Skapar ämnesknapparna i overlayen

function createFieldButtonsOverlay (FIELDSBUTTON, city) {
  let fieldButtons = document.getElementById('fieldButtonsOverlay')

  for (let i = 0; i < FIELDSBUTTON.length; i++) {
    let button = document.createElement('button')
    button.innerText = `${FIELDSBUTTON[i].name}`

    button.addEventListener('click', function () {
      let foundProgrammes = filterProgrammesButtons(
        FIELDSBUTTON[i],
        FIELDSBUTTON,
        city
      )
      createFilterProgrammeElements(foundProgrammes)
      button.classList.toggle('button-active')
    })
    fieldButtons.appendChild(button)
  }
}

// Skapar funtionen findUnies som ska hitta universitet som matchar med staden
// Filtrerar CITIES i DB (databasen) hittar staden som matchar med id till parametern.
// Returnerar en filtrering av alla univeristet som innehåller stadens ID, mapar ut universitetens id:n
function findUnies (id) {
  let city = DB.CITIES.find(city => city.id == id)
  return DB.UNIVERSITIES.filter(uni => uni.cityID == city.id).map(uni => uni.id)
}

// Skapar funktionen createFilterProgrammeElements som skapar dem klickbara programboxarna
// Hämtar div med id programmes och lägger i en ny variabel programmesDiv
// Skapar innehåll på programmesDiv
// Skapar en for loop som går igenom programmes
// Skapar funktionen findUniById som returnerar programmet man klickade på och matchar det med universitets.id
// Skapar en div och ger den namnet div som även om man klickar på den kallar på funktionen openProgrammeOverlay (som ändrar bredden till 100%) och även clickProgrammes med parametern för programmes[i] vilket är den vi tyckt på.
 
function createFilterProgrammeElements (programmes) {
  let programmesDiv = document.getElementById('programmes')
  programmesDiv.innerHTML = ''

  for (let i = 0; i < programmes.length; i++) {
    function findUnibyId (universitet) {
      return programmes[i].universityID == universitet.id
    }

    let div = document.createElement('div')

    div.onclick = function openProgrammeOverlay () {
      clickProgrammes(programmes[i])
      document.getElementById('programmeOverlay').style.width = '100%'
    }

// Ger div en class "programmesBox" och get ett id som är samma som programmets id.
// Skapar level variabeln genom att plocka up programmets id och dess level
// Skapar uni variabel genom att leta i UNIVERSITET.find och använda funktionen findUnibyId som matchar programmet med universitetet.
// Skapar innehåll till div med valda programmets namn, level och universitet
// appendar programmeDiv i div
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

//Gör så att landknapparna hålls nere när man trycker på dem.
//Från början så är värdet i knappen false men när knappen blir tryckt så blir knappens värde true.
// Variabeln fieldArray så filtreras FIELDBUTTON arrayen och tar ut dem objekt som är true.
// Variabeln idArray mappar man fieldsarray efter elementets id.

function filterProgrammesButtons (buttonObject, FIELDSBUTTON, city) {
  if (buttonObject.selected) {
    buttonObject.selected = false
  } else {
    buttonObject.selected = true
  }

  console.log(FIELDSBUTTON)

  let fieldArray = FIELDSBUTTON.filter(fieldbutton => fieldbutton.selected)
  let idArray = fieldArray.map(element => element.id)
// Returnerar sedan en filtrering där både univeristyID och subjectID ska matcha med stadensID. Dvs programmen som matchar med vald stad och ämne och returnerar programmen.
  return PROGRAMMES.filter(
    programme =>
      findUnies(city.id).includes(programme.universityID) &&
      idArray.includes(programme.subjectID)
  )
}
// Skapar en overlay för program
// Skapar en function vid namn "clickProgramme" med en parameter "programme" 
// Skapar en const där "text" alltid är konstant. Skapar ett "h2 element" innehållande "programme.name" (programmens namn)
// Sedan skapar vi divvar med "document.createElement" innehållande elementen. 
// skapar även en div.onclick som då heter "closeProgrammeOverlay" som ska stänga overlayen, detta görs genom att ändra style.width till = '0%'
// ProgrammeOverlay vara tom efter man klickat på "X" så vi hämtar först idet programmeOverlay och i innerHTML gör den tom. 
// Hämtar '&times' från "innerHTML" vilket då är "X" man klickar på för att stänga overlayen. 
// Skapar en div med classen addStorytel & en för add Adlibris för att få in reklamen
// Sedan deklarerar vi aboutProgramme och skapar en div där vi anropar "aboutProgramme" och implementerar infon "om programmet"
// Räknar ut summan på antal studenter genom att addera local students för programmet med exchange students för programmet [i].
// Räknar ut average genom att gå igenom alla successRate och addera och dela de på hela succesRate "längden".
// Språket hittar vi genom att ha .find som hittar de första språket som matchar med programme.language ifrån LANGUAGE arrayen och matchar de med lang.id.
// Level hittar vi via att gå igenom LEVEL och finna de som matchar med program.level
// Deklarerar aboutProgramme och skapar en div med innehållande "h3 om programmet" samt paragrafer med text om Nivå, språk, studenter, antagningsbetyg i snitt.
// Deklarerar reviewProgramme och skapar div innehållande en "h3 med omdöme" samt 3 paragrafer innehållande resencioner på Lärare, Kurser och Studenter.
// Appendar vi allt som nämnts ovan och kallar på adds funktionerna och returnerar programmeOverlay

function clickProgrammes (programme) {
  const title = document.createElement('h2')
  title.innerText = `${programme.name}`

  let x = document.createElement('div')

  x.onclick = function closeProgrammesOverlay () {
    document.getElementById('programmeOverlay').style.width = '0%'
    document.getElementById('programmeOverlay').innerHTML = ' '
  }
  x.innerHTML = '&times;'
  x.id = 'closeButton'

  programmeOverlay.append(title)
  programmeOverlay.append(x)

  let aboutProgramme = document.createElement('div')
  aboutProgramme.classList.add('aboutProgramme')
  let reviewProgramme = document.createElement('div')
  reviewProgramme.classList.add('reviewProgramme')

  let addDivStorytel = document.createElement('div')
  addDivStorytel.classList.add('addStorytel')

  let addDivAdlibris = document.createElement('div')
  addDivAdlibris.classList.add('addAdlibris')

  let sumStudent = programme.localStudents + programme.exchangeStudents
  let average =
    programme.successRate.reduce((a, b) => a + b, 0) /
    programme.successRate.length
  let language = LANGUAGES.find(lang => lang.id == programme.language)
  let level = LEVELS[programme.level]

  aboutProgramme.innerHTML = `
    <h3> Om programmet </h3>
    <p> Nivå: ${level} </p>
    <p> Språk: ${language.name}</p>
    <p> Studenter: ${sumStudent}</p>
    <p> Antagningsbetyg i snitt: ${average} </p>
    `

  reviewProgramme.innerHTML = `
      <h3> Omdömen </h3>
      <p> Lärare: ${reviewTeachers(programme)} </p>
      <p> Kurser: ${reviewCourses(programme)}</p>
      <p> Studenter: ${reviewStudents(programme)}</p>
      `

  programmeOverlay.append(aboutProgramme)
  programmeOverlay.append(addDivAdlibris)
  programmeOverlay.append(reviewProgramme)
  programmeOverlay.append(addDivStorytel)

  addStorytel()
  addAdlibris()

  return programmeOverlay
}
