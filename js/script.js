const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const firstError = document.getElementById('firstError');
const firstInfo = document.getElementById('firstInfo');
const lastName = document.getElementById('lastName');
const lastError = document.getElementById('lastError');
const lastInfo = document.getElementById('lastInfo');
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
const emailInfo = document.getElementById('emailInfo');
const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const passwordInfo = document.getElementById('passwordInfo');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // First Name Validation
    if (!firstName.value.trim()) {
        firstError.classList.remove('hidden');
        firstInfo.classList.remove('hidden');
        firstName.parentNode.classList.add('borderError');
    } else {
        firstError.classList.add('hidden');
        firstInfo.classList.add('hidden');
        firstName.parentNode.classList.remove('borderError');
    }

    // Last Name Validation
    if (!lastName.value.trim()) {
        lastError.classList.remove('hidden');
        lastInfo.classList.remove('hidden');
        lastName.parentNode.classList.add('borderError');
    } else {
        lastError.classList.add('hidden');
        lastInfo.classList.add('hidden');
        lastName.parentNode.classList.remove('borderError');
    }

    // Email Validation
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value.trim())) {
        emailError.classList.remove('hidden');
        emailInfo.classList.remove('hidden');
        email.parentNode.classList.add('borderError');
    } else {
        emailError.classList.add('hidden');
        emailInfo.classList.add('hidden');
        email.parentNode.classList.remove('borderError');
    }

    // Password Validation
    if (!password.value.trim()) {
        passwordError.classList.remove('hidden');
        passwordInfo.classList.remove('hidden');
        password.parentNode.classList.add('borderError');
    } else {
        passwordError.classList.add('hidden');
        passwordInfo.classList.add('hidden');
        password.parentNode.classList.remove('borderError');
    }
});
