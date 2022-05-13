function clickProgramme(event){
    console.log(event.target.id);
    let target = event.target.id;
   
   document.getElementById("programmeOverlay")
    
    const text = document.createElement("h1");
    text.innerText = "Overlay";

    programmeOverlay.append(text);

    return programmeOverlay;
}

function openProgrammeOverlay() {
    document.getElementById("programmeOverlay").style.width = "100%";
  }
  
  function closeProgrammeOverlay() {
    document.getElementById("programmeOverlay").style.width = "0%";
  }

clickProgramme();

 
