function editNav() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeBtn = document.querySelector('.close');
const successModalBg = document.querySelector('.success');
const form = document.getElementById('signup-form');

// launch modal event
modalBtn.forEach(btn => btn.addEventListener('click', launchModal));
closeBtn.addEventListener('click', closeModal);

// launch modal form
function launchModal() {
    modalbg.style.display = 'block';
}

// close modal form
function closeModal() {
    modalbg.style.display = 'none';
}

form.onsubmit = success;
// This function is called when the form is submitted. Using only HTML5 attributes to pre-validate the form, if the form is allowed to submit, it is already valid as per our standards. This means that the function called by submit isn't really validating anything, but rather confirms our success.
function success(event) {
    event.preventDefault();
    modalbg.style.display = 'none';
    successModalBg.style.display = 'flex';
    setTimeout(() => (successModalBg.style.display = 'none'), 5000);
}
