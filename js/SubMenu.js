const menuToggle = document.getElementById('menuToggle');
const submenu = document.getElementById('submenu');
const submenuClose = document.getElementById('submenuClose');
const body = document.querySelector('body');

// Abre submenu
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  submenu.classList.add('visible');
  body.classList.add('blurred');
  menuToggle.classList.add('hidden'); // esconde o botão principal
});

// Fecha submenu
submenuClose.addEventListener('click', (e) => {
  e.stopPropagation();
  submenu.classList.remove('visible');
  body.classList.remove('blurred');
  menuToggle.classList.remove('hidden'); // mostra o botão principal novamente
});

// Fecha submenu clicando fora
document.addEventListener('click', (e) => {
  if (!submenu.contains(e.target) && !menuToggle.contains(e.target)) {
    submenu.classList.remove('visible');
    body.classList.remove('blurred');
    menuToggle.classList.remove('hidden');
  }
});