function prosiriNavbar() {
  var x = document.getElementById("prosireniNav");
  var logoDiv = document.getElementById("prosiriLogo");
  // Target the <img> inside the Div
  var logoImg = logoDiv ? logoDiv.querySelector("img") : null;

  if (x.style.display === "flex") {
    // CLOSING
    x.style.display = "none";
    if (logoImg) logoImg.src = "slike/hb_logo1.svg";
  } else {
    // OPENING
    x.style.display = "flex";
    if (logoImg) logoImg.src = "slike/hb_logo2.svg";

    // 1) Auto-close when clicking outside
    // We use a timeout so the current click doesn't immediately trigger the 'close'
    setTimeout(() => {
      window.addEventListener('click', function closeMenu(e) {
        // If the click is NOT inside the nav and NOT on the toggle button
        if (!x.contains(e.target)) {
          x.style.display = "none";
          if (logoImg) logoImg.src = "slike/hb_logo1.svg";
          window.removeEventListener('click', closeMenu);
        }
      }, { once: true }); // 'once: true' automatically cleans up the listener
    }, 0);
  }
}