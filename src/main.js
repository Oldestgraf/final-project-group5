// let btnClose = document.querySelector('.close-btn');
// let modalWindow = document.querySelector('.backdrop');
// let btnOpenModal = document.querySelector('.solutions-button');
let btnSandwich = document.querySelector('.menu-btn');
let menu = document.querySelector('.mobile-menu-backdrop');
let btnCloseMenu = document.querySelector('.close-btn-menu');

// btnClose.addEventListener('click', () => {
//   modalWindow.classList.remove('is-open');
// });
// btnOpenModal.addEventListener('click', () => {
//   modalWindow.classList.add('is-open');
// });

btnSandwich.addEventListener('click', () => {
  menu.classList.add('is-open');
});
btnCloseMenu.addEventListener('click', () => {
  menu.classList.remove('is-open');
});
