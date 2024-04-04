function activate(trigger){
    trigger.forEach((elem, i) => {
        elem.addEventListener('click', ()=>{
            elem.classList.toggle('active');
        })
    })
}

function activateDrop(elements, trigger){
    
    activate(trigger);
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

const btn = document.querySelectorAll('.answers__answer');
const content = document.querySelectorAll('.answers__content')

activateDrop(content, btn)

const articleBlocks = document.querySelectorAll('.article__block');

articleBlocks.forEach(el => {
    if(el.querySelector('h3').innerText.length >=41){
        el.querySelector('h3').innerText = el.querySelector('h3').innerText.substring(0, 40) + "..."
    }
})

const ham = document.querySelector('.hamburger');
const closeHam = document.querySelector('.close');

ham.addEventListener('click', () => {
    document.querySelector('.menu').classList.add('active');
})

closeHam.addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('active');
})