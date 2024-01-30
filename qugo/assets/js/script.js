

// function disactivate(elements){
//     elements.forEach(el => {
//         el.classList.remove('active');
//     })
// }

// function toggle(elements){
//     elements.forEach(el => {
//         el.classList.toggle('active');
//     })
// }

function activateFAQ(triggers, contents){
    triggers.forEach((el, i) => {
        el.addEventListener('click', () => {
            contents[i].classList.toggle('active');

            let counter = el.querySelector('.arrow').style.transform.substring(7, 10);
            if(counter == '180'){
                el.querySelector('.arrow').style.transform = `rotate(${0}deg)`;
            } else{
                el.querySelector('.arrow').style.transform = `rotate(${180}deg)`;
            }

            if(contents[i].style.maxHeight){
                contents[i].style.maxHeight = null;
            } else{
                contents[i].style.maxHeight = contents[i].scrollHeight + 'px';
            }
        })
    })
}

function activateCalc(triggers, contents){
    triggers.forEach((el, i) => {
        el.addEventListener('click', () => {
            contents.forEach(elem => {
                elem.classList.toggle('active');
            })

            let counter = el.querySelector('.arrow').style.transform.substring(7, 10);
            if(counter == '180'){
                el.querySelector('.arrow').style.transform = `rotate(${0}deg)`;
            } else{
                el.querySelector('.arrow').style.transform = `rotate(${180}deg)`;
            }

            if(contents[i].style.maxHeight){
                contents[i].style.maxHeight = null;
            } else{
                contents[i].style.maxHeight = contents[i].scrollHeight + 'px';
            }
        })
    })
}






const FAQHeader = document.querySelectorAll('.FAQ__block-header');
const FAQBlock = document.querySelectorAll('.FAQ__block-content');

activateFAQ(FAQHeader, FAQBlock);

const CalcHeader1 = document.querySelectorAll('.calculator__header.header1 .trigger');
const CalcHeader2 = document.querySelectorAll('.calculator__header.header2 .trigger');
const CalcHeader3 = document.querySelectorAll('.calculator__header.header3 .trigger');

const CalcBlock1 = document.querySelectorAll('.calculator__hidden.wrapper1');
const CalcBlock2 = document.querySelectorAll('.calculator__hidden.wrapper2');
const CalcBlock3 = document.querySelectorAll('.calculator__hidden.wrapper3');

activateCalc(CalcHeader1, CalcBlock1);
activateCalc(CalcHeader2, CalcBlock2);
activateCalc(CalcHeader3, CalcBlock3);