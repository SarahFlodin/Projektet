"use script"

function FIELDSBUTTONS (database)
  [
   { "id": 0,
     "name": "Matematik"
},

  { "id": 1,
    "name": "Teknik"
},

 { "id": 2,
   "name": "Juridik"
},

  { "id": 3,
   "name": "Medicin"
},

{ "id": 4,
   "name": "Sociologi"
},

{ "id": 5,
   "name": "Filosofi"
},
{ "id": 6,
   "name": "Design"
},

]


const programmeButtons = document.getElementById("programmeButtons");

function createProgrammeButtons (PROGRAMMEBUTTON) {
    for (let i = 0; i < PROGRAMMEBUTTON.length; i ++) {
        const button = document.createElement("button");
        button.innerText = `${FIELDSBUTTONS[i].name}`;
        button.addEventListener("click", function() {
           console.log(i)
        })
        programmeButtons.appendChild(button);
      } 
}
createProgrammeButtons (FIELDSBUTTONS);

