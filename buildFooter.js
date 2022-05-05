"use strict"
/*function BuildFooter ()
creatediv aboutUs
	append textcontent “Om oss …”
	array aboutUs()
	
return aboutUs*/

function buildFooter(){
    let aboutUs = document.getElementById("footer");
    aboutUs.innerHTML = "<h3> Om oss </h3> Vi är fyra kreativa studenter som läser progrmmering på Malmö universitet. Vi ville skapa en app för andra studenter som är intresserade av att bli utbytesstudenter. En app som är lätt att navigera på och som ger mycket information om utbudet." 
    for (let i = 0; i < ABOUTUS.length; i++){
        let aboutUsImages = document.createElement("div");
        let image = document.createElement("img");
        image.src = `./Images/${ABOUTUS[i].image}`;
        aboutUsImages.innerHTML =  `${ABOUTUS[i].name}`;
        aboutUs.append(aboutUsImages);
<<<<<<< Updated upstream
        aboutUsImages.append(image);
        image.style.height = "5vw"
        image.style.borderRadius = "50%"
=======
        aboutUsImages.append(aboutUsImage);
        aboutUsImage.classList.add("aboutUsImage");
>>>>>>> Stashed changes
    }
    return aboutUs;
}

buildFooter();
