'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = () => {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

const openModal = () => {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //   console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// function closeModal(elmt) {
//   elmt.addEventListener('click', function () {
//     console.log('Closing modal...');
//     overlay.classList.add('hidden');
//     modal.classList.add('hidden');
//   });
// }

// closeModal(btnCloseModal);
// closeModal(overlay);

// btnCloseModal.addEventListener('click', function () {
//   console.log('Closing modal...');
//   overlay.classList.add('hidden');
//   modal.classList.add('hidden');
// });

// overlay.addEventListener('click', function () {
//   console.log('Closing modal...');
//   overlay.classList.add('hidden');
//   modal.classList.add('hidden');
// });

// btnsOpenModal[0].style.display = 'block';
