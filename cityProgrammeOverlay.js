'use strict'

// Knapparna till ämnen på ProgrammePage Overlay
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

function findUnies (id) {
  let city = DB.CITIES.filter(city => city.id == id)[0]
  return DB.UNIVERSITIES.filter(uni => uni.cityID == city.id).map(uni => uni.id)
}

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

function filterProgrammesButtons (buttonObject, FIELDSBUTTON, city) {
  if (buttonObject.selected) {
    buttonObject.selected = false
  } else {
    buttonObject.selected = true
  }

  console.log(FIELDSBUTTON)

  let fieldArray = FIELDSBUTTON.filter(fieldbutton => fieldbutton.selected)
  let idArray = fieldArray.map(element => element.id)
  console.log(fieldArray)

  return PROGRAMMES.filter(
    programme =>
      findUnies(city.id).includes(programme.universityID) &&
      idArray.includes(programme.subjectID)
  )
}

function clickProgrammes (programme) {
console.log(programme)
  const title = document.createElement('h2')
  title.innerText = `${programme.name}`

  let x = document.createElement('div')

  x.onclick = function closeProgrammesOverlay () {
    document.getElementById('programmeOverlay').style.width = '0%'
    document.getElementById('programmeOverlay').innerHTML = ' '
  }
  x.innerHTML = '&times;'

  programmeOverlay.append(title)
  programmeOverlay.append(x)

  let aboutProgramme = document.createElement('div')
  let reviewProgramme = document.createElement('div')

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
  programmeOverlay.append(reviewProgramme)

  return programmeOverlay
}

