function otvoriNav() {
  const overlay = document.getElementById('navOverlay');
  if (!overlay) return;
  overlay.classList.add('aktivan');
}

function zatvoriNav() {
  const overlay = document.getElementById('navOverlay');
  if (!overlay) return;
  overlay.classList.remove('aktivan');
}

document.querySelectorAll('.nav-overlay-linkovi a').forEach((link) => {
  link.addEventListener('click', zatvoriNav);
});