'use strict'

// Tydlig
// Footer som skapas och innehåller en "om oss" box
//vi hämtar en div med id footer och tilldelar den en ny variabel "aboutUs".
//Vi skapar innehållet till "aboutUs". Vi gör en for loop som går igenom vår "aboutus" array. 
//för varje objekt i arrayen skapas en div och ett img element.
//skriver ut en bild och namn för varje array objekt.
//sen appendar vi det och ger bilderna en klass.
//sen returnar det footern
function buildFooter () {
  let aboutUs = document.getElementById('footer')
  aboutUs.innerHTML =
    '<h3> Om oss </h3> Vi är fyra kreativa studenter som läser progrmmering på Malmö universitet. Vi ville skapa en app för andra studenter som är intresserade av att bli utbytesstudenter. En app som är lätt att navigera på och som ger mycket information om utbudet.'
  for (let i = 0; i < ABOUTUS.length; i++) {
    let aboutUsImages = document.createElement('div')
    let aboutUsImage = document.createElement('img')
    aboutUsImage.src = `./Images/${ABOUTUS[i].image}`
    aboutUsImages.innerHTML = `${ABOUTUS[i].name}`
    aboutUs.append(aboutUsImages)
    aboutUsImages.append(aboutUsImage)
    aboutUsImage.classList.add('aboutUsImage')
  }
  return aboutUs
}
