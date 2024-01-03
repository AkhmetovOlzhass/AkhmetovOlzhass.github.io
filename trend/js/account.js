function activate(trigger, element){
    trigger.forEach((el,i) => {
        el.addEventListener('click', () => {
            element.forEach(elem => {
                elem.classList.remove('active');
            })

            element[i].classList.add('active');
        })
    })
}

function deactivate(trigger, element){
    trigger.forEach((el,i) => {
        el.addEventListener('click', () => {
            element[i].classList.remove('active');
        })
    })
}

const creditCard = document.querySelectorAll('.credit-card__wrapper');
const creditBtn = document.querySelectorAll('.credit-card__activate');
const creditDeactivate = document.querySelectorAll('.credit-card__wrapper-close');

const creditTheme = document.querySelectorAll('.credit-card__wrapper-theme');
const creditCheck = document.querySelectorAll('.credit-cars__check');

const coinElem = document.querySelectorAll('.coin-row');

const navDate = document.querySelectorAll('.account-content__menu-item');
const navSubDate = document.querySelectorAll('.account-content__submenu-item');

const withdrawBlock = document.querySelectorAll('.withdraw-message');
const withdrawTrigger = document.querySelectorAll('.card-number__btn');
const withdrawClose = document.querySelectorAll('.withdraw-message img');

const settingsTrigger = document.querySelectorAll('.settings-link');

activate(creditBtn, creditCard);
deactivate(creditDeactivate, creditCard);

activate(creditTheme, creditCheck);

activate(coinElem, coinElem);

activate(navDate, navDate);
activate(navSubDate, navSubDate);

activate(withdrawTrigger, withdrawBlock);
deactivate(withdrawClose, withdrawBlock);

activate(settingsTrigger, withdrawBlock);

const sessionBtns = document.querySelectorAll('.session-info');
const sessionWrapper = document.querySelectorAll('.account-content__table-block');

sessionBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('button__close');
        if(btn.classList.contains('button__close')){
            btn.innerHTML = "Закрыть";
            btn.parentNode.parentNode.style.background = '#96E5C8';
            sessionWrapper[i].classList.add('active');
            sessionWrapper[i].style.maxHeight = sessionWrapper[i].scrollHeight + 'px';
        } else{
            btn.innerHTML = "Подробнее";
            console.log(2);
            btn.parentNode.parentNode.style.background = 'transparent';
            sessionWrapper[i].classList.remove('active');
            sessionWrapper[i].style.maxHeight = null;
        }
    })
})

function scrollAssets(wrappers){
    wrappers.forEach((el, i) => {
        let height = 0;
        let elements = el.querySelectorAll('.account-content__table-row');
        let margin = window.getComputedStyle(elements[0]).marginTop;
        
        margin = +margin.substring(0, 2);
        for(let i = 0; i< 6; i++){
            height += elements[i].scrollHeight + margin;
        }
        wrappers[i].style.maxHeight = `${height}px`;
    })

}

const tableWrappers = document.querySelectorAll('.account-content__table-wrapper .account-content__table');

scrollAssets(tableWrappers);

