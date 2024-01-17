function activate(elements, trigger){
    trigger.forEach((elem, i) => {
        elem.addEventListener('click', ()=>{
            elements[i].classList.toggle('active');
        })
    })
}

function disactivate(elements, trigger){
    trigger.forEach((elem, i) => {
        elem.addEventListener('click', ()=>{
            elements[i].classList.remove('active');
        })
    })
}

function activateFilterModal(elements, trigger){
    activate(elements, trigger);

    trigger[0].addEventListener('click', () => {
        if(elements[0].classList.contains('active')){
            trigger[0].querySelector('img').src = "../images/icons/cross-black.svg";
            trigger[0].style.borderRadius = "8px 8px 0 0"
            trigger[0].style.backgroundColor = "#DDD";
        } else{
            trigger[0].querySelector('img').src = "../images/icons/filter.svg";
            trigger[0].style.borderRadius = "8px"
            trigger[0].style.backgroundColor = "#F3F3F3";
        }
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
                elements[i].style.maxHeight = elements[i].scrollHeight + 25 + 'px';
            }
        })
    })
}

const NotificationsTrigger = document.querySelectorAll('.notifications__wrapper');
const NotificationsBlock = document.querySelectorAll('.notifications__block-info');

const menuTrigger = document.querySelectorAll('.menu-trigger');
const menu = document.querySelectorAll('.menu');
const menuClose = document.querySelectorAll('.menu__close');

const filterModalTrigger = document.querySelectorAll('.search__filter');
const filterModalBlock = document.querySelectorAll('.search__filter-modal');




menuTrigger[0].addEventListener('click', () => {
    if(document.querySelector('body').style.overflow == 'hidden'){
        document.querySelector('body').style.overflow = 'auto';
    } else{
        document.querySelector('body').style.overflow = 'hidden';
    }
    
});

menuClose[0].addEventListener('click', () => {
    document.querySelector('body').style.overflow = 'auto';
})

activateDrop(NotificationsBlock, NotificationsTrigger);
activate(menu, menuTrigger);
disactivate(menu, menuClose);
activateFilterModal(filterModalBlock, filterModalTrigger);


