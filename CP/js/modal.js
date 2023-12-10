function modalSwitch(modal, trigger, close, overlay){
    trigger.forEach((el, i) => {
        el.addEventListener('click', () => {
            modal[i].classList.add('active');
            overlay.classList.add('active');
        });
        overlay.addEventListener('click', () => {
            modal[i].classList.remove('active');
            overlay.classList.remove('active');
        });
    });
    close.forEach((el, i) => {
        el.addEventListener('click', () => {
            modal[i].classList.remove('active');
            overlay.classList.remove('active');
        })
    });
}

function modalSwitch(modal, trigger, close, overlay, reset){
    trigger.forEach((el, i) => {
        el.addEventListener('click', () => {
            modal[i].classList.add('active');
            overlay.classList.add('active');
        });
        overlay.addEventListener('click', () => {
            modal[i].classList.remove('active');
            overlay.classList.remove('active');
        });
    });
    if(reset){
        reset.forEach((el, i) => {
            el.addEventListener('click', () => {
                modal[i].classList.remove('active');
                overlay.classList.remove('active');
            })
        });
    }
    close.forEach((el, i) => {
        el.addEventListener('click', () => {
            modal[i].classList.remove('active');
            overlay.classList.remove('active');
        })
    });
}

const thanksModal = document.querySelectorAll('.thanks');
const thanksTrigger = document.querySelectorAll('.info__button');
const thanksClose = document.querySelectorAll('.thanks-close');
const overlayModal = document.querySelector('.overlay-modal');

const authorizationModal = document.querySelectorAll('.authorization');
const authorizationTrigger = document.querySelectorAll('.sign-in');
const authorizationClose = document.querySelectorAll('.authorization-close');

const resetModal = document.querySelectorAll('.reset');
const resetTrigger = document.querySelectorAll('.reset-trigger');
const resetClose = document.querySelectorAll('.reset-close');

modalSwitch(thanksModal, thanksTrigger, thanksClose, overlayModal);
modalSwitch(authorizationModal, authorizationTrigger, authorizationClose, overlayModal, resetTrigger);
modalSwitch(resetModal, resetTrigger, resetClose, overlayModal);