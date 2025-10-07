'use strict';

const modalWindow = getElement('.modal');
const overlay = getElement('.overlay');
const closeModalBTN = getElement('.close-modal');
const bodyElement = getElement('body');
const showBTN = document.querySelectorAll('.show-modal');

for (let show of showBTN) {
  show.addEventListener('click', () => {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

closeModalBTN.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModal();
  }
});

function closeModal() {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
}

function getElement(targetElement) {
  return document.querySelector(targetElement);
}
