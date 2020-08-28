const share = document.getElementById('share');
const share1 = document.getElementById('share1');
const socialMedia = document.getElementById('share__container');
share.addEventListener('mousedown', () => {
  socialMedia.style.display = "flex";
});
share1.addEventListener('mousedown', () => {
  socialMedia.style.display = "none";
});