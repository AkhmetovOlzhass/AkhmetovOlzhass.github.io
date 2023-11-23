const sliders = document.querySelectorAll('.splide-products');

sliders.forEach((el, i)=>{
    new Splide(el, {
        type    : 'loop',
        perPage : 1,
        pagination: false
    }).mount();
})

new Splide( "#promo-slider", {
    type    : 'loop',
    perPage : 1,
    autoplay: true,
    arrows: false
}   ).mount();

new Splide( "#most-popular-slider", {
    type    : 'loop',
    perPage : 1,
    autoplay: true,
    pagination: false
}   ).mount();
// menu

const menuTrigger = document.querySelector('.menu-trigger');
const menuBlock = document.querySelector('.menu__block');
const menuClose = document.querySelector('.menu__close');
const menuOverlay = document.querySelector('.overlay');

menuTrigger.addEventListener('click', () => {
    menuBlock.classList.add('active');
})

menuClose.addEventListener('click', () => {
    menuBlock.classList.remove('active');
})

menuOverlay.addEventListener('click', () => {
    menuBlock.classList.remove('active');
})