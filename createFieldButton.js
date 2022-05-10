"use script";

const FIELDSBUTTON = [
   {
     "id": 0,
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

];

const fieldButtons = document.getElementById("fieldButtons");
          
function createFieldButtons (FIELDSBUTTON) {
    for (let i = 0; i < FIELDSBUTTON.length; i ++) {
        const button = document.createElement("button");
        button.innerText = `${FIELDSBUTTON[i].name}`;
        button.addEventListener("click", function() {
           console.log(i)
          
        })
        fieldButtons.appendChild(button);
      } 
}
createFieldButtons (FIELDSBUTTON);
