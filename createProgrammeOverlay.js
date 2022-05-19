// När man klickar på programmen ska elementet med id programmeoverlay anropas
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
      if  ( sum == 0){
            return "Saknar tyvärr omdöme"
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
      if  ( sum == 0){
            return "Saknar tyvärr omdöme"
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
      if  ( sum == 0){
            return "Saknar tyvärr omdöme"
         }
      return Math.round(sum / amountOfComments.length)
    }