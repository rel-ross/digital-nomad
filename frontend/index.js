const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

const center = document.getElementById('btn');
const left = document.getElementById('login');
const right = document.getElementById('register');

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
   center.style.left = "0px"
   left.style.left = "450px"
   right.style.left = "50"
};

function register() {
   center.style.left = "100px"
   left.style.left = "50px"
   right.style.left = "-450"
}









