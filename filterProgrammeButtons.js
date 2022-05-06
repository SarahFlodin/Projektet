"use script"

function filterProgrammeButtons(id) {
   return PROGRAMMES.filter(programme => programme.subjectID == id);

}



function createFilterProgramme (programmes) {
   
    let programmesDiv = document.querySelector("#programme");
    programmesDiv.innerHTML = "";
        for (let i = 0; i < programmes.length; i++) {
            let div = document.createElement("div");
            div.innerHTML = `<h3>${programmes[i].name}</h3> <p>Nivå:${programmes[i].level}</p> <br><br> <p>Stad:${programmes[i].universityID}</p>`;
            programmesDiv.append(div);
        }
}


