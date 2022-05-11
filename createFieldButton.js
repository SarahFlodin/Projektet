"use script";

const FIELDSBUTTON = [
  {
    "id": 0,
    "name": "Matematik",
    "selected": false
  },

  { "id": 1,
    "name": "Teknik",
    "selected": false
  },

 { "id": 2,
   "name": "Juridik",
   "selected": false
 },

  { "id": 3,
   "name": "Medicin",
   "selected": false
  },

 { "id": 4,
   "name": "Sociologi",
   "selected": false
 },

  { "id": 5,
   "name": "Filosofi",
   "selected": false
  },

   { "id": 6,
   "name": "Design",
   "selected": false
   },

];

const fieldButtons = document.getElementById("fieldButtons");

function createFieldButtons (FIELDSBUTTON) {
    for (let i = 0; i < FIELDSBUTTON.length; i ++) {
        let button = document.createElement("button");
        button.innerText = `${FIELDSBUTTON[i].name}`;
        button.addEventListener("click", function() {
          let foundProgrammes = filterProgrammeButtons (FIELDSBUTTON[i], FIELDSBUTTON);
          createFilterProgrammeElements (foundProgrammes);
        })
        fieldButtons.appendChild(button);
      } 
}
createFieldButtons (FIELDSBUTTON);

