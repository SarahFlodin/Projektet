"use script"


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



function createFilterProgrammeElements (subjects){
   

   let subjectsDiv = document.querySelector("#subjects");
   subjectsDiv.innerHTML = "";

    for (let i = 0; i < subjects.length; i++) {
      function findUnibyId(universitet) {
         return subjects[i].universityID == universitet.id;
      } 

      let div = document.createElement("div");
      const level = LEVELS[subjects[i].level -1] 
      const uni = UNIVERSITIES.find(findUnibyId)
      
      div.innerHTML = `
         <h3>${subjects[i].name}</h3> 
         <p> Nivå: ${level}</p>
         <br><br> 
         <p>Universitet:${uni.name}</p>`;
      subjectsDiv.append(div);
   }
}

