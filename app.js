const rsvp = document.getElementById('rsvp');
const fc = document.getElementById('fc');
const fonts = ['abril-fatface-regular', 'roboto-flex', 'yusei-magic-regular', 'codystar-regular', 'sour-gummy', 'pacifico-regular', 'meow-script-regular', 'roboto-flex-4', 'codystar-light', 'codystar-heavy', 'meow-script-light', 'roboto-flex-light', 'codystar-3', 'sour-gummy-light', 'pacifico-light', 'abril-fatface-light'];
let font = fonts[Math.floor(Math.random() * fonts.length)];
const title = document.getElementById('h1');

// button not working. font randomly selects upon reload. very frustrating😞. also, must fix some css font classes not working

rsvp.addEventListener('click', () => {
    window.alert('If the button does not open your email, that is because of the way your email is setup. Please RSVP using the email provided:\n sussycat1134@outlook.com');
    console.log('susycat1134@outlook.com')
});

fc.addEventListener('click', () => {
    title.classList.remove(font);
    font = fonts[Math.floor(Math.random() * fonts.length)];
    title.classList.add(font);
    console.log(font);
});


// let slideIndex = 0;
// showSlides(5000);

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("slides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 5000); // Change image every 2 seconds
// }

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}