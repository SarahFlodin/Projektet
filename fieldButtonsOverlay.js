"use strict"
  
  // Knapparna till ämnen på ProgrammePage Overlay
  function createFieldButtonsOverlay (FIELDSBUTTON) {
    let fieldButtons = document.getElementById("fieldButtonsOverlay");
  
      for (let i = 0; i < FIELDSBUTTON.length; i ++) {
          let button = document.createElement("button");
          button.innerText = `${FIELDSBUTTON[i].name}`;
  
          button.addEventListener("click", function() {
            let foundProgrammes = filterProgrammeButtons (FIELDSBUTTON[i], FIELDSBUTTON);
            createFilterProgrammeElements (foundProgrammes);
            button.classList.toggle("button-active");
          })
          fieldButtons.appendChild(button);
        } 
  }


function createFilterProgrammeElements (programmes){
   

    let programmesDiv = document.querySelector("#programme");
    programmesDiv.innerHTML = "";
 
     for (let i = 0; i < programmes.length; i++) {
       function findUnibyId(universitet) {
          return programmes[i].universityID == universitet.id;
       } 
 
    let div = document.createElement("div");
    div.addEventListener("click", clickProgramme)
       div.onclick = function openProgrammeOverlay() {
          document.getElementById("programmeOverlay").style.width = "100%";
        }
 
    div.classList.add("programmesBox")
    div.id = programmes[i].id
    const level = LEVELS[programmes[i].level] 
    const uni = UNIVERSITIES.find(findUnibyId);
    
    div.innerHTML = `
       <h3>${programmes[i].name}</h3> 
       <p> Nivå: ${level}</p>
       <br><br> 
       <p>Universitet: ${uni.name}</p>`;
       
    programmesDiv.append(div);
    }
 }

 function filterProgrammeButtons(buttonObject, FIELDSBUTTON) {

    if (buttonObject.selected) {
       buttonObject.selected = false;
    } else {
       buttonObject.selected = true;
    }

 console.log(FIELDSBUTTON);
 
 let fieldArray = FIELDSBUTTON.filter(fieldbutton => fieldbutton.selected);
 let idArray = fieldArray.map(element => element.id);

 return PROGRAMMES.filter(programme => idArray.includes(programme.subjectID));

}
 
function clickProgramme(programme){
  
  document.getElementById("programmeOverlay");
  
  const text = document.createElement("h2");
  text.innerText = `${programme.name}`;

  let div = document.createElement("div");
  div.addEventListener("click", clickProgramme);

  div.onclick = function closeProgrammeOverlay() {
       document.getElementById("programmeOverlay").style.width = "0%";
       document.getElementById("programmeOverlay").innerHTML = " ";
      }
     div.innerHTML = "&times;"

    programmeOverlay.append(text);
    programmeOverlay.append(div);

    let aboutProgramme = document.createElement("div");
    let reviewProgramme = document.createElement("div");
    

    let sumStudent = programme.localStudents + programme.exchangeStudents;
    let average = programme.successRate.reduce((a, b) => a + b, 0) / programme.successRate.length;
    let language = LANGUAGES.find(lang => lang.id == programme.language)
    let level = LEVELS[programme.level];

    aboutProgramme.innerHTML = `
    <h3> Om programmet </h3>
    <p> Nivå: ${level} </p> 
    <p> Språk: ${language.name}</p>
    <p> Studenter: ${sumStudent}</p>
    <p> Antagningsbetyg i snitt: ${average} </p>
    `;

    reviewProgramme.innerHTML = `
      <h3> Omdömmen </h3>
      <p> Lärare: ${reviewTeachers(programme)} </p> 
      <p> Kurser: ${reviewCourses(programme)}</p>
      <p> Studenter: ${reviewStudents(programme)}</p>
      `;

  programmeOverlay.append(aboutProgramme);
  programmeOverlay.append(reviewProgramme);
 
  return programmeOverlay;
}

function reviewTeachers(programme){
    let sum = 0;
    let amountOfComments = []
    for (let i = 0; i < COMMENTS_PROGRAMME.length; i++){
      if (COMMENTS_PROGRAMME[i].programmeID == programme.id){
        let stars = COMMENTS_PROGRAMME[i].stars;
        sum = sum + stars.teachers;
        amountOfComments.push(COMMENTS_PROGRAMME[i]) 
      }
    }
    return Math.round(sum / amountOfComments.length)
  }

  function reviewStudents(programme){
    let sum = 0;
    let amountOfComments = []
    for (let i = 0; i < COMMENTS_PROGRAMME.length; i++){
      if (COMMENTS_PROGRAMME[i].programmeID == programme.id){
        let stars = COMMENTS_PROGRAMME[i].stars;
        sum = sum + stars.students;
        amountOfComments.push(COMMENTS_PROGRAMME[i]) 
      }
    }
    return Math.round(sum / amountOfComments.length)
  }

  function reviewCourses(programme){
    let sum = 0;
    let amountOfComments = []
    for (let i = 0; i < COMMENTS_PROGRAMME.length; i++){
      if (COMMENTS_PROGRAMME[i].programmeID == programme.id){
        let stars = COMMENTS_PROGRAMME[i].stars;
        sum = sum + stars.courses;
        amountOfComments.push(COMMENTS_PROGRAMME[i]) 
      }
    }
    return Math.round(sum / amountOfComments.length)
  }