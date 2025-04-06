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
  
  
// Function to check if the input or textarea has content
function checkInputContent(input) {
    const label = input.nextElementSibling; // Get the label next to the input
    if (input.value.trim() !== '') {
        // Add the class to make the label float when input has content
        input.classList.add('has-content');
    } else {
        // If empty, remove the class to reset the label
        input.classList.remove('has-content');
    }
}

// Add event listeners to inputs and textareas
document.querySelectorAll('.input-group input, .input-group textarea').forEach(input => {
    // Check content on input change
    input.addEventListener('input', function() {
        checkInputContent(input);
    });

    // Check content on focus and blur
    input.addEventListener('focus', function() {
        checkInputContent(input);
    });

    input.addEventListener('blur', function() {
        checkInputContent(input);
    });

    // Check content when the page loads
    checkInputContent(input);
});
