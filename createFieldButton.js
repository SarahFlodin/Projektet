'use script'

// Knapparna till ämnen på ProgrammePage
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
      button.classList.toggle('button-active')
    })
    fieldButtons.appendChild(button)
  }
}
