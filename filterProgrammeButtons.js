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
   console.log (subjects);
   
   let subjectsDiv = document.querySelector("#subjects");
   subjectsDiv.innerHTML = "";

    for (let i = 0; i < subjects.length; i++) {
     let div = document.createElement("div");
     div.innerHTML = `<h3>${subjects[i].name}</h3> <p> Nivå:${subjects[i].level}</p> <br><br> <p>Stad:${subjects[i].universityID}</p>`;
      subjectsDiv.append(div);
   }
}