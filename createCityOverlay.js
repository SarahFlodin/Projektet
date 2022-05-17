"use strict"

function clickCities(event){
    console.log(event.target.id);
    let target = event.target.id;
   
   document.getElementById("cityOverlay")
    
    const text = document.createElement("h1");
    text.innerText = "Overlay";
    programmeOverlay.append(text);
    programmeOverlay.append(div);

    return programmeOverlay;
}

// Här öppnas overlayen, tydligt namn på functionen
function openCitiesOverlay() {
    document.getElementById("programmeOverlay").style.width = "100%";
  }
  
  // Tydlig
  function closeCitiesOverlay() {
    document.getElementById("programmeOverlay").style.width = "0%";
  }

clickCities();