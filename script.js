// Fallback if profile.jpeg hasn't been added yet, or fails to load.
// Once Godfrey's photo is saved as "profile.jpeg" in this same folder,
// these fallbacks simply won't trigger — no need to remove them.

// Header photo fallback: shows initials in a circle instead of a broken image.
function headerPhotoFallback(imgEl) {
  const fallback = document.createElement('div');
  fallback.className = 'header-photo-fallback';
  fallback.innerText = 'GM';
  imgEl.replaceWith(fallback);
}

// About section photo fallback: shows a placeholder message instead of a broken image.
function aboutPhotoFallback(imgEl) {
  const placeholder = document.createElement('div');
  placeholder.className = 'photo-placeholder';
  placeholder.innerHTML = 'Add Godfrey’s photo here<br><span style="font-weight:400;font-size:13px;">(profile.jpeg)</span>';
  imgEl.replaceWith(placeholder);
}

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-navigation');
  const menuLabel = menuToggle?.querySelector('.menu-label');

  if (!(menuToggle instanceof HTMLButtonElement)
      || !(navigation instanceof HTMLElement)
      || !(menuLabel instanceof HTMLElement)) {
    return;
  }

  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuLabel.textContent = 'Menu';
    navigation.classList.remove('is-open');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuLabel.textContent = isOpen ? 'Menu' : 'Close';
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuToggle.focus();
    }
  });
});