const questions = document.querySelectorAll('.question__title');
const questionsTexts = document.querySelectorAll('.question__descr');

questions.forEach((el, i) => {
    el.addEventListener('click', () => {

        let counter = el.querySelector('.arrow').style.transform.substring(7, 10);
        if(counter == '180'){
            el.querySelector('.arrow').style.transform = `rotate(${0}deg)`;
        } else{
            el.querySelector('.arrow').style.transform = `rotate(${180}deg)`;
        }

        if(questionsTexts[i].style.maxHeight){
            questionsTexts[i].style.maxHeight = null;
            questionsTexts[i].style.visibility = 'hidden';
            questionsTexts[i].style.opacity = '0';
            questionsTexts[i].style.marginTop = '0';
        } else{
            questionsTexts[i].style.maxHeight = questionsTexts[i].scrollHeight + 'px';
            questionsTexts[i].style.visibility = 'visible';
            questionsTexts[i].style.opacity = '1';
            questionsTexts[i].style.marginTop = '20px';
        }
    })
})