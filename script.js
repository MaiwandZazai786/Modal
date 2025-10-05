'use strict';

const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showBTN = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const bodyElement = document.querySelector('body');

for (let show of showBTN) {
  show.addEventListener('click', () => {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

closeModal.addEventListener('click', () => {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
});
