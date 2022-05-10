"use script"


function filterProgrammeButtons(id) {
  
   return PROGRAMMES.filter(programme => programme.subjectID == id);

}


function createFilterProgrammeElements (subjects){
   console.log (subjects);
   let subjectsDiv = document.querySelector("#subjects")
   subjectsDiv.innerHTML ="";
    for (let i =0; i < subjects.length; i++) {
     let div = document.createElement("div");
     div.innerHTML = `<h3>${subjects[i].name}</h3> <p> Nivå:${subjects[i].level}</p> <br><br> <p>Stad:${subjects[i].universityID}</p>`;
      subjectsDiv.append(div);
   }
}



