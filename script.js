'use strict';

const modalWindow = getElement('.modal');
const overlay = getElement('.overlay');
const closeModal = getElement('.close-modal');
const bodyElement = getElement('body');
const showBTN = document.querySelectorAll('.show-modal');

for (let show of showBTN) {
  show.addEventListener('click', () => {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

const ModalClose = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModal.addEventListener('click', ModalClose);
overlay.addEventListener('click', ModalClose);

function getElement(targetElement) {
  return document.querySelector(targetElement);
}
