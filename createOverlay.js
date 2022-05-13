/* "use strict";

document.querySelector(".main").addEventListener("click", function(){ toggleOverlay()});

function toggleOverlay(){
    let overlayExists = document.querySelector(".programmeOverlay");
    console.log(overlayExists);
    if( overlayExists ){
        document.querySelector(".programmeOverlay").remove();
    } else {
        document.body.append(createOverlay());
    }
}

function createOverlay(){
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.addEventListener("click", () => toggleOverlay());

    const text = document.createElement("h1");
    text.innerText = "Overlay";

    overlay.append(text);

    return overlay;
} */

