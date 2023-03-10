const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const navbar = document.querySelector('.navbar');

openMenu.addEventListener('click', () => {
  navbar.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  navbar.classList.remove('active');
  document.body.style.overflow = 'auto';
});

const seasonButtons = document.querySelectorAll('.season-button');
const seasons = document.querySelectorAll('.season');

seasonButtons[0].classList.add('active');
seasons[0].classList.add('active');

seasonButtons.forEach((button) => {
  button.addEventListener('click', () => {
    seasonButtons.forEach((btn) => {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    const target = button.dataset.target;
    seasons.forEach((season) => {
      if (season.id === target) {
        season.classList.add('active');
      } else {
        season.classList.remove('active');
      }
    });
  });
});
