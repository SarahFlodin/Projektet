'use strict'

//Hämtar div som 
function addAdlibris () {
  let adlibris = document.getElementsByClassName('addAdlibris')
  adlibris.innerHTML = ''
  let addImage = document.createElement('img')
  addImage.src = `./Images/adlibris.jpg`

  for (let i = 0; i < adlibris.length; i++) {
    adlibris[i].append(addImage)
  }
}

function addStorytel () {
  let storytel = document.getElementsByClassName('addStorytel')
  storytel.innerHTML = ''
  let addImage = document.createElement('img')
  addImage.src = `./Images/storytel.jpg`

  for (let i = 0; i < storytel.length; i++) {
    storytel[i].append(addImage)
  }
}
