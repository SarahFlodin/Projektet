//Skapar en overlay för program
//Skapar en function vid namn "clickProgramme" med en parameter "programme" 
//Skapar en const där "text" alltid är konstant. Skapar ett "h2 element" innehållande "programme.name" (programmens namn)
//Sedan skapar vi divvar med "document.createElement" innehållande elementen. 
//skapar även en div.onclick som då heter "closeProgrammeOverlay" som ska stänga overlayen, detta görs genom att ändra style.width till = '0%'
//sedan ska programmeOverlay vara tom efter man klickat på "X" så vi hämtar först idet programmeOverlay och i innerHTML gör den tom. 
//sedan hämtar vi '&times' från "innerHTML" vilket då är "X" man klickar på för att stänga overlayen. 
//Sedan deklarerar vi aboutProgramme och skapar en div där vi anropar "aboutProgramme" och implementerar infon "om programmet"
//deklarerar aboutProgramme och skapar en div med innehållande "h3 om programmet" samt paragrafer med text om Nivå, språk, studenter, antagningsbetyg i snitt.
//deklarerar reviewProgramme och skapar div innehållande en "h3 med omdöme" samt 3 paragrafer innehållande resencioner på Lärare, Kurser och Studenter.
//sedan appendar vi allt som nämnts ovan och returnerar cityOverlay
function clickProgramme (programme) {
  document.getElementById('programmeOverlay')

  const text = document.createElement('h2')
  text.innerText = `${programme.name}`

  let div = document.createElement('div')
  div.addEventListener('click', clickProgramme)

  div.onclick = function closeProgrammeOverlay () {
    document.getElementById('programmeOverlay').style.width = '0%'
    document.getElementById('programmeOverlay').innerHTML = ''
  }
  div.innerHTML = '&times;'
  div.id = 'closeButton'

  programmeOverlay.append(text)
  programmeOverlay.append(div)

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

//Skapar en funktion för de 3 olika recensions kategorierna "reviewTeachers" ,"reviewStudents", "reviewCourses" 
//I denna funktion skapar vi en loop för varje "kategori"
//Looparnas syfte är att vi först har en tom array som "pushar" in innehållet(kommentarerna) om "omdömmet" i arrayen

function reviewTeachers (programme) {
  let sum = 0 //deklarerar sum och ger den värdet "0"
  let amountOfComments = []
  for (let i = 0; i < COMMENTS_PROGRAMME.length; i++) {
    if (COMMENTS_PROGRAMME[i].programmeID == programme.id) {
      let stars = COMMENTS_PROGRAMME[i].stars
      sum = sum + stars.teachers
      amountOfComments.push(COMMENTS_PROGRAMME[i])
    }
  } //Om summan är = 0 ska det returneras "Saknar tyvärr omdöme"
  if (sum == 0) {
    return 'Saknar tyvärr omdöme'
  }
  return Math.round(sum / amountOfComments.length) //average 
}

function reviewStudents (programme) {
  let sum = 0 //deklarerar sum och ger den värdet "0"
  let amountOfComments = []
  for (let i = 0; i < COMMENTS_PROGRAMME.length; i++) {
    if (COMMENTS_PROGRAMME[i].programmeID == programme.id) {
      let stars = COMMENTS_PROGRAMME[i].stars
      sum = sum + stars.students
      amountOfComments.push(COMMENTS_PROGRAMME[i])
    }
  } //Om summan är = 0 ska det returneras "Saknar tyvärr omdöme"
  if (sum == 0) {
    return 'Saknar tyvärr omdöme'
  }
  return Math.round(sum / amountOfComments.length) //average 
}


function reviewCourses (programme) {
  let sum = 0 //deklarerar sum och ger den värdet "0"
  let amountOfComments = []
  for (let i = 0; i < COMMENTS_PROGRAMME.length; i++) {
    if (COMMENTS_PROGRAMME[i].programmeID == programme.id) {
      let stars = COMMENTS_PROGRAMME[i].stars
      sum = sum + stars.courses
      amountOfComments.push(COMMENTS_PROGRAMME[i])
    }
  } //Om summan är = 0 ska det returneras "Saknar tyvärr omdöme"
  if (sum == 0) {
    return 'Saknar tyvärr omdöme'
  }
  return Math.round(sum / amountOfComments.length) //average 
}
