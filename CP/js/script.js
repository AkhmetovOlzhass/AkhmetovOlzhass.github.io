const sliders = document.querySelectorAll('.splide-products');

if(sliders.length >0){
    sliders.forEach((el, i)=>{
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

//cart add

const cartBlocks = document.querySelectorAll('.cart__block');

if(cartBlocks.length > 0){
    let totalNum = 0;
    let totalNumDis = 0;
    let total = document.querySelector('.total');
    let discount = document.querySelector('.discount-num');
    let totalDiscount = document.querySelector('.total-discount');

    cartBlocks.forEach((el) => {
        const minus = el.querySelector('.minus');
        const plus = el.querySelector('.plus');
        const value = el.querySelector('.cart__block-wrapper-value');
        let sum = el.querySelector('.sum span');
        let price = el.querySelector('.price span');
        let thousand = price.innerHTML.substring(1, price.innerHTML.length -7);
        let nums = price.innerHTML.substring(thousand.length+2)
        price = +thousand*1000 + +nums;
        let result = price*value.innerHTML;

        result = result.toString();
        sum.innerHTML = `$${result.substring(0, result.length-3)},${+result%1000}.00`;

        minus.addEventListener('click', () => {
            if(value.innerHTML >1){
                value.innerHTML -= 1;
                result = price*value.innerHTML;
                if(totalNum > price){
                    totalNum = +totalNum - +price;
                }
                result = result.toString();

                let resultNum = +result%1000;
                resultNum = resultNum.toString();
                if(resultNum.length < 3){
                    for(let i = 0; i <= 3-resultNum.length; i++){
                        resultNum += '0';
                    }
                }
                sum.innerHTML = `$${result.substring(0, result.length-3)},${resultNum}.00`;

                totalNum = totalNum.toString();
                let totalRes = +totalNum%1000;
                totalRes = totalRes.toString();
                if(totalRes.length < 3){
                    for(let i = 0; i <= 3-totalRes.length; i++){
                        resultNum += '0';
                    }
                }
                total.innerHTML =  `$${totalNum.substring(0, totalNum.length-3)},${totalRes}.00`

                let discountNum = discount.innerHTML.substring(1, discount.innerHTML.length-1);
                discountNum = discountNum / 100;
                totalNumDis = +totalNum * +discountNum;
                totalNumDis = +totalNum - totalNumDis;
                totalNumDis = totalNumDis.toString();
                let totalResDis = +totalNumDis%1000;
                totalResDis = totalResDis.toString();
                if(totalResDis.length < 3){
                    for(let i = 0; i <= 3-totalResDis.length; i++){
                        totalNumDis += '0';
                    }
                }
                totalDiscount.innerHTML =  `$${totalNumDis.substring(0, totalNumDis.length-3)},${totalResDis}.00`

            }
        })

        
        plus.addEventListener('click', () => {
            value.innerHTML = +value.innerHTML + 1;
            result = price*value.innerHTML;
            totalNum = +totalNum + +price;
            result = result.toString();

            let resultNum = +result%1000;
            resultNum = resultNum.toString();
            if(resultNum.length < 3){
                for(let i = 0; i <= 3-resultNum.length; i++){
                    resultNum += '0';
                }
            }
            sum.innerHTML = `$${result.substring(0, result.length-3)},${resultNum}.00`;

            totalNum = totalNum.toString();
            let totalRes = +totalNum%1000;
            totalRes = totalRes.toString();
            if(totalRes.length < 3){
                for(let i = 0; i <= 3-totalRes.length; i++){
                    totalRes += '0';
                }
            }
            total.innerHTML =  `$${totalNum.substring(0, totalNum.length-3)},${totalRes}.00`

            let discountNum = discount.innerHTML.substring(1, discount.innerHTML.length-1);
            discountNum = discountNum / 100;
            totalNumDis = +totalNum * +discountNum;
            totalNumDis = +totalNum - totalNumDis;
            totalNumDis = totalNumDis.toString();
            let totalResDis = +totalNumDis%1000;
            totalResDis = totalResDis.toString();
            if(totalResDis.length < 3){
                for(let i = 0; i <= 3-totalResDis.length; i++){
                    totalNumDis += '0';
                }
            }
            totalDiscount.innerHTML =  `$${totalNumDis.substring(0, totalNumDis.length-3)},${totalResDis}.00`
        })
        totalNum = +totalNum + +result;
    })


    totalNum = totalNum.toString();
    let totalRes = +totalNum%1000;
    totalRes = totalRes.toString();
    if(totalRes.length < 3){
        for(let i = 0; i <= 3-totalRes.length; i++){
            totalNum += '0';
        }
    }
    total.innerHTML =  `$${totalNum.substring(0, totalNum.length-3)},${totalRes}.00`

    let discountNum = discount.innerHTML.substring(1, discount.innerHTML.length-1);
    discountNum = discountNum / 100;
    totalNumDis = +totalNum * +discountNum;
    totalNumDis = +totalNum - totalNumDis;
    totalNumDis = totalNumDis.toString();
    let totalResDis = +totalNumDis%1000;
    totalResDis = totalResDis.toString();
    if(totalResDis.length < 3){
        for(let i = 0; i <= 3-totalResDis.length; i++){
            totalNumDis += '0';
        }
    }
    totalDiscount.innerHTML =  `$${totalNumDis.substring(0, totalNumDis.length-3)},${totalResDis}.00`
}


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