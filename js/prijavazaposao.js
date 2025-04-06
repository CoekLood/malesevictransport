function burgerAnimation(x) {
    x.classList.toggle("change");
}
  
function toggleMenu() {
    var menu = document.getElementById('burgerMenu');
    menu.classList.toggle('open');
}
  
function handleResize() {
    var menu = document.getElementById('burgerMenu');
    var burgerIcon = document.querySelector('.burgerIcon');
    
    // If the window width is larger than 768px, close the burger menu and remove the animation
    if (window.innerWidth > 768) {
      menu.classList.remove('open'); // Hide the burger menu
      burgerIcon.classList.remove('change'); // Remove the animation from the burger icon
    }
  }
  // Listen for window resize and run handleResize function
window.addEventListener('resize', handleResize);


const fileInput = document.getElementById('input4');
const fileNameDisplay = document.getElementById('CV');

  // Add an event listener for file selection
  fileInput.addEventListener('change', function() {
    const file = fileInput.files[0]; // Get the first file (if any)
    if (file) {
      fileNameDisplay.textContent = `File Name: ${file.name}`; // Display the file name
    } else {
      fileNameDisplay.textContent = ''; // Clear if no file is selected
    }
});
const propratnopismo = document.getElementById('input8');
const propratnopismodisplay = document.getElementById('propratnopismo');

  // Add an event listener for file selection
  propratnopismo.addEventListener('change', function() {
    const file = propratnopismo.files[0]; // Get the first file (if any)
    if (file) {
      propratnopismodisplay.textContent = `File Name: ${file.name}`; // Display the file name
    } else {
      propratnopismodisplay.textContent = ''; // Clear if no file is selected
    }
});