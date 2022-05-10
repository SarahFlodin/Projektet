"use strict"
function buildHeaderImage(){
  let header = document.getElementById("header");
  let headerImage = document.createElement("img");
      headerImage.src = `./Images/utlandsstudierLight.png`;
    header.append(headerImage)
  }
 buildHeaderImage();