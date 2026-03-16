function prosiriNavbar() {
  var x = document.getElementById("prosireniNav");
  var logoDiv = document.getElementById("prosiriLogo");
  var logoImg = logoDiv ? logoDiv.querySelector("img") : null;

  // Toggle Logic
  if (x.style.display === "flex") {
    // CLOSING
    x.style.display = "none";
    if (logoImg) logoImg.src = "slike/hb_logo1.svg";
  } else {
    // OPENING
    x.style.display = "flex";
    if (logoImg) logoImg.src = "slike/hb_logo2.svg";

    // "Click Outside" Logic
    // We use a slight delay (10ms) to ensure the opening click is finished 
    // before the window starts listening for closing clicks.
    setTimeout(() => {
      const closeMenu = (e) => {
        // Only close if the click is outside the nav AND outside the toggle button
        // Replace 'prosiriBtn' with the actual ID of your toggle button if different
        if (!x.contains(e.target) && !logoDiv.contains(e.target)) {
          x.style.display = "none";
          if (logoImg) logoImg.src = "slike/hb_logo1.svg";
          window.removeEventListener('click', closeMenu);
        }
      };
      window.addEventListener('click', closeMenu);
    }, 10);
  }
}

function otvoriNav() {
  document.getElementById("myNav").style.display = "block";
}

function zatvoriNav() {
  document.getElementById("myNav").style.display = "none";
}