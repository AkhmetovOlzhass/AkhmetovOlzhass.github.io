function drop(elements, content, wrapper, btn){
    elements.forEach((el, i) => {
        el.addEventListener('click', () => {
            wrapper[i].classList.toggle('active');
            if(content[i].style.maxHeight){
                content[i].style.maxHeight = null;
                btn[i].innerHTML = "+";
            } else{
                content[i].style.maxHeight = content[i].scrollHeight + 'px';
                btn[i].innerHTML = "-";
            }
        })
    })
}

const questionTitle = document.querySelectorAll('.questions__question-title');
const questionContent = document.querySelectorAll('.questions__question-content');
const questionWrapper = document.querySelectorAll('.questions__question');
const questionBtn = document.querySelectorAll('.questions__question-title span');

drop(questionTitle, questionContent, questionWrapper, questionBtn);

const searchGo = document.querySelector('.header__top-search-btn');
const searchInput = document.querySelector('.input-trigger');

function activateSearch(trigger, element){
    trigger.addEventListener('input', function() {
        if(this.value.length > 0){
            element.classList.add('active');
        } else{
            element.classList.remove('active');
        }
    })
}

activateSearch(searchInput, searchGo);

function activateFooter(elements,wrapper, content, btn){
    elements.forEach((el, i) => {
        el.addEventListener('click', () => {
            wrapper[i].classList.toggle('active');
            if(content[i].style.maxHeight){
                content[i].style.maxHeight = null;
                btn[i].style.transform = 'rotate(0deg)'
            } else{
                content[i].style.maxHeight = content[i].scrollHeight*2 + 'px';
                btn[i].style.transform = 'rotate(180deg)'
            }
            console.log(content[i].scrollHeight);
        })
    })
}

const footerTitle = document.querySelectorAll('.footer-drop__header');
const footerWrapper = document.querySelectorAll('.footer-drop');
const footerContent = document.querySelectorAll('.footer-drop__content');
const footerBtn = document.querySelectorAll('.footer-drop__header svg');

activateFooter(footerTitle,footerWrapper, footerContent, footerBtn)