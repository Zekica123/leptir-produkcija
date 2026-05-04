const hamburgerBtn = document.getElementById('hamburgerGumb');
const navOverlay = document.getElementById('navOverlay');
const overlayCloseBtn = document.getElementById('overlayZatvori');
const overlayLinks = document.querySelectorAll('.nav-overlay-linkovi a');

const openNavOverlay = () => {
  if (!navOverlay) return;
  navOverlay.classList.add('aktivan');
};

const closeNavOverlay = () => {
  if (!navOverlay) return;
  navOverlay.classList.remove('aktivan');
};

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    if (!navOverlay) return;
    navOverlay.classList.toggle('aktivan');
  });
}

if (overlayCloseBtn) {
  overlayCloseBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    closeNavOverlay();
  });
}

overlayLinks.forEach((link) => {
  link.addEventListener('click', closeNavOverlay);
});

window.addEventListener('click', (event) => {
  if (!navOverlay || !navOverlay.classList.contains('aktivan')) return;
  if (navOverlay.contains(event.target) || (hamburgerBtn && hamburgerBtn.contains(event.target))) return;
  closeNavOverlay();
});

function otvoriNav() {
  openNavOverlay();
}

function zatvoriNav() {
  closeNavOverlay();
}