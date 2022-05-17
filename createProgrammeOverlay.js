// När man klickar på programmen ska elementet med id programmeoverlay anropas
function clickProgramme(event){
  
  //Hittar targetID 
    let target = event.target.id;
    if (target == PROGRAMMES.id) {
    }
   
    document.getElementById("programmeOverlay")
    
    const text = document.createElement("h2");
    text.innerText = `${PROGRAMMES[target].name}`;

    let div = document.createElement("div");
    div.addEventListener("click", clickProgramme);
      div.onclick = function closeProgrammeOverlay() {
         document.getElementById("programmeOverlay").style.width = "0%";
         document.getElementById("programmeOverlay").innerHTML = " ";
        }
       div.innerHTML = "&times;"

      programmeOverlay.append(text);
      programmeOverlay.append(div);

      let aboutProgramme = document.createElement("div");
      let sumStudent = PROGRAMMES[target].localStudents + PROGRAMMES[target].exchangeStudents;
      let average = PROGRAMMES[target].successRate / PROGRAMMES[target].successRate.length;

      aboutProgramme.innerHTML = `
      <h3> Om programmet </h3>
      <p> Nivå: ${PROGRAMMES[target].level} </p> 
      <p> Språk: ${PROGRAMMES[target].language}</p>
      <p> Studenter: ${sumStudent}</p>
      <p> Antagningsbetyg: ${average} </p>
      `
   
    programmeOverlay.append(aboutProgramme);
   
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

 
