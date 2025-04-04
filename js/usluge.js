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