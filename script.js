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
