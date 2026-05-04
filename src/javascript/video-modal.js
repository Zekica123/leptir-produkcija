const openVideoBtn = document.getElementById('openVideoBtn');
const closeVideoBtn = document.getElementById('closeVideoBtn');
const videoOverlay = document.getElementById('videoOverlay');
const videoContainer = document.querySelector('.video-container');
const iframe = document.querySelector('.video-container iframe');

const stopVideo = () => {
  if (!iframe) return;
  const src = iframe.src;
  iframe.src = src;
};

const openVideoModal = () => {
  if (!videoOverlay) return;
  videoOverlay.classList.add('aktivan');
  document.body.style.overflow = 'hidden';
};

const closeVideoModal = () => {
  if (!videoOverlay) return;
  videoOverlay.classList.remove('aktivan');
  document.body.style.overflow = 'auto';
  stopVideo();
};

if (openVideoBtn) {
  openVideoBtn.addEventListener('click', (event) => {
    event.preventDefault();
    openVideoModal();
  });
}

if (closeVideoBtn) {
  closeVideoBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    closeVideoModal();
  });
}

if (videoOverlay) {
  videoOverlay.addEventListener('click', (event) => {
    if (event.target === videoOverlay || !videoContainer.contains(event.target)) {
      closeVideoModal();
    }
  });
}
