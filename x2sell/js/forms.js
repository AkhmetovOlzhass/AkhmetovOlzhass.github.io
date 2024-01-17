function passwordVisible(input, parent) {
    if (input.type === "password") {
        input.type = "text";
        parent.querySelector('.eye').src = '../images/icons/eye-opened.svg';
    } else {
        input.type = "password";
        parent.querySelector('.eye').src = '../images/icons/eye-closed.svg';
    }
}

const passwordTrigger = document.querySelectorAll('.eye');

passwordTrigger.forEach(el => {
    el.addEventListener('click', () => {
        const input = el.parentNode.querySelector('input');
        passwordVisible(input, el.parentNode);
    })
})