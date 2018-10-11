
// Initializing slick carousel
$(document).ready(function() {
   $('.carousel').slick({
      // dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2500,
   });
});

// To display present year in footer
document.getElementById('year').innerHTML = new Date().getFullYear();


// Menu toggling

const button = document.querySelector('.nav-button')
button.addEventListener('click', showMenu);

const menu = document.querySelector('.header-nav ul');
let toggleMenu = false

function showMenu() {
   if(toggleMenu === false) {
      menu.style.transform = 'translateX(0)';

      toggleMenu = true;
   } else if (toggleMenu === true) {
      menu.style.transform = 'translateX(100%)';

      toggleMenu = false;
   }
}
