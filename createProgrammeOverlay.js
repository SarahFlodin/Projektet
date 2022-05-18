// När man klickar på programmen ska elementet med id programmeoverlay anropas
function clickProgramme(event){
  console.log(event);
  //Hittar targetID 
    let target = event.target.id;
   
    document.getElementById("programmeOverlay");
    
    const text = document.createElement("h2");
    text.innerText = `${PROGRAMMES[target].name}`;

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


      let sumStudent = PROGRAMMES[target].localStudents + PROGRAMMES[target].exchangeStudents;
      let average = PROGRAMMES[target].successRate.reduce((a, b) => a + b, 0) / PROGRAMMES[target].successRate.length;
      let language = LANGUAGES.find(lang => lang.id == PROGRAMMES[target].language)
      let level = LEVELS[PROGRAMMES[target].level];
/*
      let reviewTeachers = 
      let reviewStudents =
      let reviewProgramme =
*/
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
      <p> Kurser: </p>
      <p> Studenter: </p>
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