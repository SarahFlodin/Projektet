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


function createFilterProgrammeElements (programmes){
   

   let programmesDiv = document.querySelector("#program");
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
      <p>Universitet:${uni.name}</p>`;
      
   programmesDiv.append(div);
   }
}

