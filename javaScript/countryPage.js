'use strict'
//Direkt kod till landsidan.
//funktioner som ska vara på landsidan anropaas i en funktion.
function countryPage () {
  buildHeaderImage()
  createCountryButtons(COUNTRYBUTTON)
  addStorytel()
  buildFooter()
  addAdlibris()
}

countryPage()
