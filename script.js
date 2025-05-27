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
