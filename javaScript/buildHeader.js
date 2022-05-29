'use strict'
// bygger loggan (jordklotet). Man kan klicka på loggan för att komma till startsidan osv
function buildHeaderImage () {
  let header = document.getElementById('header')
  let headerImage = document.createElement('img')
  headerImage.src = `./Images/utlandsstudierLight.png`
  header.append(headerImage)
}
