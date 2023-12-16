

const header = document.querySelector('header');
const body = document.querySelector('main');

body.style.paddingTop = header.scrollHeight + "px";

const sliders = document.querySelectorAll('.content-page-yachts__el');

sliders.forEach(el => {
    $(`.${el.classList}`).slick({
        dots: true,
        infinite: false
    });
})

const locationBtn = document.querySelector('.countries-btn');
const locationContent = document.querySelector('.countries-content');
const locationClose = document.querySelector('.countries-content__header svg');
const locationOverlay = document.querySelector('.overlay');


locationBtn.addEventListener('click', () => {
    locationContent.classList.toggle('active');
    locationOverlay.classList.toggle('active');
})

locationClose.addEventListener('click', () => {
    locationContent.classList.remove('active');
    locationOverlay.classList.remove('active');
})

locationOverlay.addEventListener('click', () => {
    locationContent.classList.remove('active');
    locationOverlay.classList.remove('active');
})

const prices = document.querySelectorAll('.value');
const newPrices = document.querySelectorAll('.new-value');

prices.forEach((el, i) => {
    let num = +el.innerHTML;
    newPrices[i].innerHTML = Math.round(num* 0.6) ;

})

//timer

let d = new Date();
d.setHours(d.getHours() + 1);
// const deadline = '2023-12-10';
const deadline = d;

function getTimeRenaining(endtime){
    const t = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor(t/(1000*60*60*24)),
    hours = Math.floor(t/(1000*60*60)% 24),
    minutes = Math.floor(t/(1000*60)%60),
    seconds = Math.floor(t/1000 %60);
    return {
        'total': t,
        'days':days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getZero(num){
    if(num>=0 && num<10){
        return `0${num}`;
    } else{
        return num;        
    }
}

function setClock(selector, endtime){
    const timer = document.querySelector(selector),
    days = timer.querySelector('#days'),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds'),
    timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock(){
        const t = getTimeRenaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if(t.total <=0){
            clearInterval(timeInterval);
        }
    }
}
setClock('.timer', deadline);