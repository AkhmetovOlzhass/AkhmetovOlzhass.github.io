function activate(elements, trigger){
    trigger.forEach((elem, i) => {
        elem.addEventListener('click', ()=>{
            elements[i].classList.toggle('active');

        })
    })
}

function activateDrop(elements, trigger){
    
    activate(elements, trigger);
    trigger.forEach((el, i) => {
        el.addEventListener('click', () => {
            let counter = el.querySelector('.arrow').style.transform.substring(7, 10);
            if(counter == '180'){
                el.querySelector('.arrow').style.transform = `rotate(${0}deg)`;
            } else{
                el.querySelector('.arrow').style.transform = `rotate(${180}deg)`;
            }
           

            if(elements[i].style.maxHeight){
                elements[i].style.maxHeight = null;
            } else{
                elements[i].style.maxHeight = elements[i].scrollHeight + 'px';
            }
        })
    })

}

function counter(values, plus, minus, results){
    plus.forEach((el, i) => {
        let res = results[i].innerHTML;
        el.addEventListener('click', () => {
            values[i].innerHTML = values[i].innerHTML - 0 + 1;
            results[i].innerHTML = values[i].innerHTML * res;
        });
    });
    minus.forEach((el, i) => {
        let res = results[i].innerHTML;
        el.addEventListener('click', () => {
            if(values[i].innerHTML > 1){
                values[i].innerHTML -= 1;
                results[i].innerHTML -= res;
            }
        });
    });
}

function passwordVisible(input) {
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

function checkSwitch(){
    const checkbox = document.querySelector('#fluency');
    const switchOff = document.querySelector('.switch-off');
    const switchOn = document.querySelector('.switch-on');
    if(checkbox.checked != true){
        switchOff.style.display = 'block';
        switchOn.style.display = 'none';
    } else {
        switchOn.style.display = 'block';
        switchOff.style.display = 'none';
    }
}

//dropdown

//register
const dropBtn = document.querySelectorAll('.wrapper__block-drop');
const dropContent = document.querySelectorAll('.wrapper__block-content');
//main page
const dropDashboardBtn = document.querySelectorAll('.content__block.active .content__block-wrapper');
const dropDashboardContent = document.querySelectorAll('.content__block.active .content__block-plans');

const dropInvoicesBtn = document.querySelectorAll('.invoices .content__block-wrapper');
const dropInvoicesContent = document.querySelectorAll('.invoices .content__block-plans');

//support
const dropSupportBtn = document.querySelectorAll('.question__title');
const dropSupportContent = document.querySelectorAll('.question__descr');

//counter

const counterValues = document.querySelectorAll('.value');
const counterMinus = document.querySelectorAll('.minus');
const counterPlus = document.querySelectorAll('.plus');
const counterResults = document.querySelectorAll('.result');

//passwordVisible
const passwordInput = document.querySelectorAll('.password');
const passwordTrigger = document.querySelectorAll('.wrapper__block-input svg');

try{
    passwordTrigger.forEach((el, i) => {
        el.addEventListener('click', () => {
            passwordVisible(passwordInput[i]);
        });
    })
}catch{}


activateDrop(dropContent, dropBtn);
activateDrop(dropDashboardContent, dropDashboardBtn);
activateDrop(dropInvoicesContent, dropInvoicesBtn);
activateDrop(dropSupportContent, dropSupportBtn);
counter(counterValues,counterPlus, counterMinus, counterResults);

const packageBlock = document.querySelector('.package');

if(packageBlock){
    dropBtn.forEach(el => {
        el.addEventListener('click', () => {
            if(packageBlock.classList.contains('active')){
                packageBlock.style.maxHeight = packageBlock.scrollHeight + 50 + 'px';
            }
        })
    })
    
}