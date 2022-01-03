const toggleButton = document.getElementsByClassName('toggle-button')[0];
const NavbarLinks = document.getElementById('nav-item')[0];

toggleButton.addEventListener('click', () => {
  NavbarLinks.classList.toggle('active')
});
