const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

const A = document.getElementById('login');
const B = document.getElementById('register');
const C = document.getElementById('btn');

openModalButtons.forEach( button => {
   button.addEventListener('click', () => {
      const openmodal = document.querySelector('#open-modal')
      openModal(modal)
   })
})

overlay.addEventListener('click', () => {
   const modals = document.querySelectorAll('modal.active')
   modals.forEach(modal => {
      closeModal(modal)
   })
})

closeModalButtons.forEach(button => {
   button.addEventListener('click', () => {
      const closemodal = button.closest('modal')
      closeModal(modal)
   })
});


function openModal(modal) {
   modal.classList.add('active')
   overlay.classList.add('active')
};

function closeModal(modal) {
   modal.classList.remove('active')
   overlay.classList.remove('active')
};

function login() {
   A.style.left = "0px"
   B.style.left = "500px"
   C.style.left = "0px"
};

function register() {
   A.style.left = "500px"
   B.style.left = "0px"
   C.style.left = "100px"
}









