function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString('en-US');
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

function onIntersection(entries, observer) {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        const obj1 = document.getElementById("numberjs1");
        const obj2 = document.getElementById("numberjs2");
        const obj3 = document.getElementById("numberjs3");
        const obj4 = document.getElementById("numberjs4");
        
        animateValue(obj1, 0, 22548, 5000);
        animateValue(obj2, 0, 42, 5000);
        animateValue(obj3, 0, 78, 5000);
        animateValue(obj4, 0, 52, 5000);
        observer.unobserve(entry.target); 
    }
    });
}
const observer = new IntersectionObserver(onIntersection, {
    threshold: 0.5
  });

const obj = document.getElementById("numberjs1");
observer.observe(obj);


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

document.addEventListener("DOMContentLoaded", function() {
  const touElement = document.querySelector('.tou');
  const body = document.body;

  // Check if the user has already agreed using cookies
  const isAgreed = getCookie("termsAgreement") === "true";

  // If user has not agreed, show the TOU modal and overlay
  if (!isAgreed) {
    body.classList.add('overlay-visible');  // Show the modal and overlay
    body.classList.add('no-scroll'); // Disable scrolling
    touElement.style.display = 'block'; // Display the TOU modal
  } else {
    // If user has agreed, hide the modal and overlay
    touElement.style.display = 'none'; // Hide the TOU modal
    body.classList.remove('overlay-visible');
    body.classList.remove('no-scroll'); // Enable scrolling
  }

  // If the user agrees to the terms
  window.agreement = function() {
    setCookie("termsAgreement", "true", 30); // Set cookie for 30 days
    body.classList.remove('overlay-visible'); // Hide the modal and overlay
    body.classList.remove('no-scroll'); // Enable scrolling
    touElement.style.display = 'none'; // Hide the TOU modal
  };
});

// Function to set cookies
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Add the days to the current date
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Function to get cookies
function getCookie(name) {
  const value = `${name}=`;
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(value) === 0) return c.substring(value.length, c.length);
  }
  return "";
}
