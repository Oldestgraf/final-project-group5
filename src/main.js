let btnSandwich = document.querySelector('.menu-btn');
let menu = document.querySelector('.mobile-menu-backdrop');
let btnCloseMenu = document.querySelector('.close-btn-menu');
let anchorCloseMenuItems = document.querySelectorAll('.anchor-item');

btnSandwich.addEventListener('click', () => {
  menu.classList.add('is-open');
});
btnCloseMenu.addEventListener('click', () => {
  menu.classList.remove('is-open');
});
anchorCloseMenuItems.forEach(anchorItem => {
  anchorItem.addEventListener('click', () => {
    menu.classList.remove('is-open');
  });
});

// const form = document.getElementById('submit-form');

// // Add an event listener for the form submit event
// form.addEventListener('submit', function (event) {
//   event.preventDefault(); // Prevent the default form submission
//   alert('Form submission prevented!'); // Alert message for testing
// });
