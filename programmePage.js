"use script"

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

