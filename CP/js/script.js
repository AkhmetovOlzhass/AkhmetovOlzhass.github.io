const sliders = document.querySelectorAll('.splide-products');

if(sliders.length >0){
    sliders.forEach((el)=>{
        new Splide(el, {
            type    : 'loop',
            perPage : 1,
            pagination: false
        }).mount();
    })
}

try{
    new Splide( "#promo-slider", {
        type    : 'loop',
        perPage : 1,
        autoplay: true,
        arrows: false
    }   ).mount();
} catch{}

try{
    new Splide( "#most-popular-slider", {
        type    : 'loop',
        perPage : 1,
        autoplay: true,
        pagination: false
    }   ).mount();
} catch{}

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



// premium lines

const premiumLines = document.querySelectorAll('.premium-active');
const money = {
    moneyValue: 2500
}

if(premiumLines.length > 0){
    const premiumNowValues = document.querySelectorAll('.main-value');
    const premiumMaxValues = document.querySelectorAll('.max-value');

    premiumNowValues.forEach((el, i) => {
        if(premiumMaxValues[i].innerHTML <= money.moneyValue){
            el.innerHTML = premiumMaxValues[i].innerHTML;
            
        } else{
            el.innerHTML = money.moneyValue;
        }
    });

    premiumLines.forEach((el, i) => {
        let num = premiumNowValues[i].innerHTML / premiumMaxValues[i].innerHTML * 100;
        el.style.width = `${num}%`;
    })

    let color = '#969696';
    let level = 0;
    for(let i = 0; i<premiumLines.length; i++){
        if(premiumLines[i].style.width != '100%'){
            if(i == 0){
                break;
            }
            color = premiumLines[i-1].style.background;
            level = i;
            break;
        }
        color = premiumLines[i].style.background;
        level = i+1;
    }

    const premiumLine = document.querySelectorAll('.premium-line svg rect');
    const premiumLineText = document.querySelector('.premium-line__title');

    premiumLine.forEach((el) => {
        el.style.fill = color;
    })
    if(level == 0){
        premiumLineText.innerHTML = `Ваш Premium не активен`;
    }else{
        premiumLineText.innerHTML = `Ваш Premium ${level} уровня`;
    }
}

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

