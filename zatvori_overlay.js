function otvoriNav() {
  document.getElementById("navOverlay").style.display = "block";
}

function zatvoriNav() {
  document.getElementById("navOverlay").style.display = "none";
}
document.querySelectorAll(".overlay-sadrzaj a").forEach(link => {
  link.addEventListener("click", () => {
    zatvoriNav();
  });
});