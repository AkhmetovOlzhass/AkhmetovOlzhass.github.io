function swapModal(modal1, modal2){
    modal1.classList.remove("active");
    modal2.classList.add('active');
}

const registrationBtns = document.querySelectorAll(".registrationTrigger");
const registrationModal = document.querySelector(".modal");
const registrationModalBlocks = document.querySelectorAll(".modal__block");

const modalOverlay = document.querySelector(".overlay");

const signUpLink = document.querySelector('#sign-in');
const signInLink = document.querySelector('#sign-up');

registrationBtns.forEach(el => {
    el.addEventListener('click', () => {
        registrationModal.classList.add('active');
        registrationModalBlocks[0].classList.add('active');
    })
})

modalOverlay.addEventListener('click', (e) => {
    registrationModal.classList.remove('active');
    registrationModalBlocks.forEach(el => {
        el.classList.remove('active');
    })
})

document.querySelector('#modal-sign-up').addEventListener('click', () => {
    swapModal(signUpLink, signInLink);
})

document.querySelector('#modal-sign-in').addEventListener('click', () => {
    swapModal(signInLink, signUpLink);
})

const registrationChoose = document.querySelectorAll('.input-wrap');
const checkRegistration = document.getElementsByName('to-be');
const nextRegistration = document.querySelector('#registration-next');
registrationChoose.forEach((el, i) => {
    el.addEventListener('click', () => {
        if(i == 0){
            nextRegistration.href = "./registration-pages/executor-step1.html";
        }else if(i == 1){
            nextRegistration.href = "./registration-pages/customer-step1.html";
        }
        
    })
})
