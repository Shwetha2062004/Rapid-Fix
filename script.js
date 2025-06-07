
// Show popup after 5 seconds
window.onload = function () {
  setTimeout(function () {
    document.getElementById("popup").style.display = "block";
  }, 5000);
};

// Close popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

let orders = 0;
let customers = 0;

function animateCount(id, end, duration) {
  let start = 0;
  const increment = end / (duration / 50);
  const element = document.getElementById(id);
  const interval = setInterval(() => {
    start += increment;
    if (start >= end) {
      start = end;
      clearInterval(interval);
    }
    element.innerText = Math.floor(start);
  }, 50);
}

window.onload = () => {
  animateCount('orders', 2000, 1000);
  animateCount('customers', 700, 1000);
};

