'use strict';
const video = document.getElementById('live-video');
const toggle = document.getElementById('video-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let userPaused = reducedMotion.matches;
let inView = false;
let dialogOpen = false;
function syncVideo() {
  const shouldPlay = inView && !userPaused && !document.hidden && !dialogOpen;
  if (shouldPlay) {
    if (!video.getAttribute('src')) video.src = video.dataset.src;
    video.play().catch(() => { toggle.textContent = 'Play video'; });
  } else video.pause();
}
toggle.hidden = false;
toggle.addEventListener('click', () => {
  userPaused = !video.paused;
  syncVideo();
});
video.addEventListener('play', () => { toggle.textContent = 'Pause video'; });
video.addEventListener('pause', () => { toggle.textContent = 'Play video'; });
video.addEventListener('error', () => { toggle.textContent = 'Video unavailable'; toggle.disabled = true; });
if ('IntersectionObserver' in window) {
  new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
    syncVideo();
  }, {threshold: 0.12}).observe(video);
} else { inView = true; syncVideo(); }
document.addEventListener('visibilitychange', syncVideo);
reducedMotion.addEventListener('change', event => { userPaused = event.matches; syncVideo(); });
document.querySelectorAll('[data-lang]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-lang]').forEach(other => {
      const selected = other === button;
      other.setAttribute('aria-pressed', String(selected));
      document.getElementById('bio-' + other.dataset.lang).hidden = !selected;
    });
  });
});
const soundButton = document.getElementById('load-soundcloud');
soundButton.hidden = false;
soundButton.addEventListener('click', () => {
  const frame = document.createElement('iframe');
  frame.title = 'TOKSAM on SoundCloud';
  frame.src = 'https://w.soundcloud.com/player/?url=' + encodeURIComponent('https://soundcloud.com/toksam_dj') + '&color=%23d6ff63&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false';
  frame.allow = 'autoplay';
  const shell = document.getElementById('player-shell');
  shell.replaceChildren(frame);
  shell.classList.add('loaded');
});
const dialog = document.getElementById('photo-dialog');
const dialogPhoto = document.getElementById('dialog-photo');
let opener;
document.querySelectorAll('[data-photo]').forEach(link => {
  link.addEventListener('click', event => {
    if (typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    opener = link;
    dialogPhoto.src = link.href;
    dialogPhoto.alt = link.querySelector('img').alt;
    dialog.showModal();
    document.body.classList.add('modal-open');
    dialogOpen = true;
    syncVideo();
  });
});
document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
}});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  dialogOpen = false;
  syncVideo();
  if (opener) opener.focus();
});

const spotifyButton = document.getElementById('load-spotify');
spotifyButton.hidden = false;
spotifyButton.addEventListener('click', () => {
  const frame = document.createElement('iframe');
  frame.title = 'TOKSAM original releases on Spotify';
  frame.src = 'https://open.spotify.com/embed/artist/5v4yjhB82SOefQ7NF0fv8K?theme=0';
  frame.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
  frame.allowFullscreen = true;
  document.getElementById('spotify-releases-player').replaceChildren(frame);
});
