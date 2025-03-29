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
