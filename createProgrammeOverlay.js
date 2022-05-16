// När man klickar på programmen ska elementet med id programmeoverlay anropas
function clickProgramme(event){
    console.log(event.target.id);
    let target = event.target.id;
   
   document.getElementById("programmeOverlay")
    
    const text = document.createElement("h1");
    text.innerText = "Overlay";

    programmeOverlay.append(text);

    return programmeOverlay;
}

// Här öppnas overlayen, tydligt namn på functionen
function openProgrammeOverlay() {
    document.getElementById("programmeOverlay").style.width = "100%";
  }
  
  // Tydlig
  function closeProgrammeOverlay() {
    document.getElementById("programmeOverlay").style.width = "0%";
  }

clickProgramme();

 
