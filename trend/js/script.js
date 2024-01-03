const assetsDB = [
    {
        month: "3.08%",
        price: "5 592.8$",
        deal: "0.0 USD"
    },
    {
        month: "5.08%",
        price: "592.8$",
        deal: "0.0 USD"
    },
    {
        month: "7.08%",
        price: "50 592.8$",
        deal: "0.0 USD"
    },
    {
        month: "9.08%",
        price: "1 592.8$",
        deal: "0.0 USD"
    },
    {
        month: "11.08%",
        price: "2 592.8$",
        deal: "0.0 USD"
    },
    {
        month: "13.08%",
        price: "6 592.8$",
        deal: "0.0 USD"
    },
    {
        month: "15.08%",
        price: "7 592.8$",
        deal: "0.0 USD"
    },
    {
        month: "17.08%",
        price: "9 592.8$",
        deal: "0.0 USD"
    },
]


function scrollAssets(elements, wrapper){
    let height = 0;
    let margin = window.getComputedStyle(elements[0]).marginBottom;
    margin = +margin.substring(0, 2);
    for(let i = 0; i< 4; i++){
        height += elements[i].scrollHeight + margin;
    }
    wrapper.style.maxHeight = `${height}px`;
}

function activateAssets(triggers, wrapper){
    wrapper.querySelector('.month').innerHTML = assetsDB[0].month;
    wrapper.querySelector('.price').innerHTML = assetsDB[0].price;
    wrapper.querySelector('.deal').innerHTML = assetsDB[0].deal;

    triggers.forEach((el, i) => {
        el.addEventListener('click', () => {
            triggers.forEach(k => {
                k.classList.remove('active');
            });
            el.classList.add("active");

            wrapper.querySelector('.month').innerHTML = assetsDB[i].month;
            wrapper.querySelector('.price').innerHTML = assetsDB[i].price;
            wrapper.querySelector('.deal').innerHTML = assetsDB[i].deal;
        })
    })
}

const scrollEl = document.querySelectorAll('.assets__elements-el');
const scrollWrap = document.querySelector('.assets__elements');
const contentWrap = document.querySelector('.assets__content-header-block');

scrollAssets(scrollEl, scrollWrap);
activateAssets(scrollEl, contentWrap);


$('.documents__slider').slick({
    dots: true,
    arrows: false
});

$('.team__block-img').slick({
    dots: true,
    arrows: false
});

const teamSlider = document.querySelector('.team__block-mobile .slick-slider');
const teamSlides = document.querySelectorAll('.team__block-mobile .team-slide');
const teamContnentActiveTitle = document.querySelector('.team__block-mobile .team__block-title');
const teamContnentActive = document.querySelector('.team__block-mobile .team__block-descr');
const teamContnentTitle = document.querySelectorAll('.team__block-title');
const teamContnent = document.querySelectorAll('.team__block-descr');

teamSlider.addEventListener('touchend', () => {
    setTimeout(() => {
        teamSlides.forEach((elem, i) => {
            if(elem.classList.contains('slick-active')){
                teamContnentActiveTitle.innerHTML = teamContnentTitle[i-1].innerHTML;
                teamContnentActive.innerHTML = teamContnent[i-1].innerHTML;
            }
        })
    }, 100);
});

$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});