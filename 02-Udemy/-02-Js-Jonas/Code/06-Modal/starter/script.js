'use strict';

const modal = document.querySelector('.modal');

const overLay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModel = function () {
  // console.log('Clicked');

  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};

const closeModel = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModel);
}

btnCloseModal.addEventListener('click', closeModel);

overLay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
