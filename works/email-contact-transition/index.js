// Btn Contact Email
var btnEmail = document.getElementsByClassName('btn-email')[0];
// Email Text
var emailText = document.getElementsByClassName('email')[0];
// Btn Copy Email
var btnCopyEmail = document.getElementsByClassName('btn-copy-email')[0];

function copyInnerHtmlToClipBoard (element) {
    // Create textarea element
    var textArea = document.createElement('textarea');
    // Set it off screen
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'absolute';
    textArea.style.left = '-9999px';
    // Append the element to the body
    document.body.appendChild(textArea);
    // Set the value that wanted to copy into textarea
    textArea.value = element.innerHTML;
    // Select the text
    textArea.select();
    // Perform copy action
    document.execCommand('copy');
    // Remove the textarea after copy
    document.body.removeChild(textArea);
}

btnEmail.onclick = function () {
    btnCopyEmail.innerHTML = 'Copied';
    copyInnerHtmlToClipBoard(emailText);
}

btnEmail.onmouseover = function () {
    emailText.classList.add('visible');
    btnCopyEmail.classList.add('visible');
};

btnEmail.onmouseleave = function () {
    emailText.classList.remove('visible');
    btnCopyEmail.classList.remove('visible');
    btnCopyEmail.innerHTML = 'Copy'
};

