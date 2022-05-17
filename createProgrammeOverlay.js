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
      let language = LANGUAGES.find(lang => lang.id == PROGRAMMES[target].language)
      let level = LEVELS[PROGRAMMES[target].level];

      aboutProgramme.innerHTML = `
      <h3> Om programmet </h3>
      <p> Nivå: ${level} </p> 
      <p> Språk: ${language.name}</p>
      <p> Studenter: ${sumStudent}</p>
      <p> Antagningsbetyg: ${average} </p>
      `

      review
   
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

 
