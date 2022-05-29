'use script'

// Knapparna till ämnen på ProgrammePage
//Skapar en funktion vid namn createFieldButtons med parameterns (FIELDSBUTTON)
//deklarerar createFieldButtons och hämtar Idet "fieldButtons"
//skapar en loop där vi inkluderar en deklarerad "button" vars skapar en klickbar knapp
//knappen innehåller text ifrån FIELDSBUTTON där vi inuti loopen kallar på "korrekt" ämne. 
//sedan skapar vi en eventListener så att man kan klicka på "button"
function createFieldButtons (FIELDSBUTTON) {
  let fieldButtons = document.getElementById('fieldButtons')

  for (let i = 0; i < FIELDSBUTTON.length; i++) {
    let button = document.createElement('button')
    button.innerText = `${FIELDSBUTTON[i].name}`

    button.addEventListener('click', function () {
      let foundProgrammes = filterProgrammeButtons(
        FIELDSBUTTON[i],
        FIELDSBUTTON
      )
      createFilterProgrammeElements(foundProgrammes)
      button.classList.toggle('button-active') //Skapar en "toggle" för när knappen är nedryckt
    })
    fieldButtons.appendChild(button)
  }
}
