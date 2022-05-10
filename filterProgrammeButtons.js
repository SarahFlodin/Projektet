"use script"

function filterProgrammeButtons(id) {
  
   return SUBJECTS.filter(subject => subject.programmeID == id);

}

function createFilterProgrammeElements (subjects){
   console.log (subjects);
   let subjectsDiv = document.querySelector("#subjects")
   subjectsDiv.innerHTML ="";
    for (let i =0; i < subjects.length; i++) {
     let div = document.createElement("div");
     div.textContent = `${subjects[i].name}`;
      subjectsDiv.append(div);
   }
}
