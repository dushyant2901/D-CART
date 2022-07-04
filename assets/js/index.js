const overlay = document.querySelector(".newsletter-overlay");
const closeBtn = document.querySelector(".newsletter-close-btn");

window.addEventListener("DOMContentLoaded", () => {
  overlay.classList.add("show-overlay");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("show-overlay");
});
