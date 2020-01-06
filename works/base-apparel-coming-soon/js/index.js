

const inputEmail = document.getElementsByClassName('input-email')[0];

inputEmail.addEventListener('keyup', () => {
    // show error
    const isValidEmail = inputEmail.checkValidity();
    const invalidEmailText = document.getElementsByClassName('invalid-email-text')[0];
    if(!isValidEmail) {
        invalidEmailText.classList.remove('hidden');
    } else {
        invalidEmailText.classList.add('hidden');
    }
});

// const btnSubscribe = document.getElementsByClassName('btn-subscribe')[0];
// btnSubscribe.addEventListener('click', () => {

// });
