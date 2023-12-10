// menu

const menuTrigger = document.querySelector('.menu-trigger');
const menuBlock = document.querySelector('.menu__block');
const menuClose = document.querySelector('.menu__close');
const menuOverlay = document.querySelector('.overlay');

menuTrigger.addEventListener('click', () => {
    menuBlock.classList.add('active');
    document.querySelector('body').style.overflow = "hidden";
})

menuClose.addEventListener('click', () => {
    menuBlock.classList.remove('active');
    document.querySelector('body').style.overflow = "auto";
})

menuOverlay.addEventListener('click', () => {
    menuBlock.classList.remove('active');
    document.querySelector('body').style.overflow = "auto";
})

//menu mobile

const menuCatalogBtn = document.querySelector('.menu-catalog');
const menuCatalogBlock = document.querySelector('.catalog__mobile');
const menuCatalogClose = document.querySelector('.catalog__mobile .menu__close');
const menuCatalogOverlay = document.querySelector('.catalog__mobile .overlay');

menuCatalogBtn.addEventListener('click', () => {
    menuCatalogBlock.classList.add('active');
    document.querySelector('body').style.overflow = "hidden";
})

menuCatalogClose.addEventListener('click', () => {
    menuCatalogBlock.classList.remove('active');
    document.querySelector('body').style.overflow = "auto";
})

menuCatalogOverlay.addEventListener('click', () => {
    menuCatalogBlock.classList.remove('active');
    document.querySelector('body').style.overflow = "auto";
})

//search

const searchForm = document.querySelector('.search-btn-pc');
const searchInput = document.querySelector('.search-text-pc');

const searchFormMobile = document.querySelector('.search-btn-mobile');
const searchInputMobile = document.querySelector('.search-text-mobile');

function searchActive(input, form){
    input.onfocus = function(){
        form.classList.add('active');
    }
    
    input.onblur = function(){
        form.classList.remove('active');
    }
}

searchActive(searchInput, searchForm);
searchActive(searchInputMobile, searchFormMobile);

