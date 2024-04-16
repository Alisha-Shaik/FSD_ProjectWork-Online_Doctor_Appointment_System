document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
var formData = {
     name: document.getElementById('Name').value,
     number: document.getElementById('Number').value,
     email: document.getElementById('Email').value
    };
if (formData.name && formData.number && formData.email) {
   alert('Form submitted successfully! You will get the call within 2 min, ' + formData.name + '!');
   document.getElementById('myForm').reset();
    } 
else {
    alert('Please fill in all required fields.');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
    link.addEventListener('click', function(event) {
       const currentUrl = window.location.href;
       const linkUrl = this.href;
if (currentUrl === linkUrl) {
             event.preventDefault();
             window.location.reload();
            }
        });
    });
});

function displayPrompt() {
           alert("In case of any emergency, Grab your mobile and Call the number");
        }
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
