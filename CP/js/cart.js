class MenuCard {
    constructor(src, alt, article,title, price, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.article = article;
        this.title = title;
        this.price = price;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');

        if (this.classes.length === 0) {
            this.classes = "col-md-2";
            element.classList.add(this.classes);
        } else {
            this.classes.forEach(className => element.classList.add(className));
        }

        element.innerHTML = `
            <div class="cart__block">
                <img class="cart__block-trash" src="img/icons/trash-can.svg" alt="trash-can">
                <img class="cart__block-img" src=${this.src} alt=${this.alt}>
                <p class="cart__article">Артикул товара ${this.article}</p>
                <p class="cart__block-title">${this.title}</p>
                <div class="cart__block-wrapper">
                    <p class="cart__block-wrapper-name">Цена</p>
                    <p class="cart__block-wrapper-name price"><span>${this.price}</span></p>
                </div>
                <div class="cart__block-wrapper">
                    <p class="cart__block-wrapper-name">Количество</p>
                    <div class="cart__block-wrapper-add">
                        <button class="minus"><img src="img/icons/minus.svg" alt="minus"></button>
                        <p class="cart__block-wrapper-value">1</p>
                        <button class="plus"><img src="img/icons/plus.svg" alt="minus"></button>
                    </div>
                </div>
                <div class="cart__block-wrapper">
                    <p class="cart__block-wrapper-name">Сумма</p>
                    <p class="cart__block-wrapper-name sum"><span></span></p>
                </div>
            </div>
        `;
        this.parent.append(element);
    }
}

getResource('http://localhost:3000/cart')
.then(data => {
    data.forEach(({img, altimg, article, title, price}) => {

        new MenuCard(img, altimg,article, title, price, ".cart .row").render();
    });
    const cards = document.querySelectorAll('.cart__block');
    let total = document.querySelector('.total');
    let prices = document.querySelectorAll('.sum span');
    let discountBlock = document.querySelector('.total-discount');
    let discount = document.querySelector('.discount-num');

    cards.forEach(el => {
        card(el, total);
    });
    getSumTotal(prices, total, discountBlock, discount);
    deleteCard(cards);
});

async function getResource(url) {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}


//cards add

function getSumCard(count, price, result){
    let thousands = price.innerHTML;
    thousands = thousands.substring(1, thousands.length-7);
    let hundreads = price.innerHTML;
    hundreads = hundreads.substring(hundreads.length - 6, hundreads.length -3);
    let total = +thousands*1000 + +hundreads;
    total = total * +count.innerHTML;
    
    thousands = Math.floor(total /1000);
    hundreads = total % 1000;

    hundreads = hundreads.toString();

    while(hundreads.length < 3){
        hundreads += '0';
    }
    
    result.innerHTML = `$${thousands},${hundreads}.00`
}

function getSumTotal(prices, totalBlock, discountBlock, discount){
    let mainTotal = 0;
    let discountTotal = 0;
    let discountNum = +discount.innerHTML.substring(1, discount.innerHTML.length-1);
    prices.forEach((el) => {
        let thousands = el.textContent;
        thousands = thousands.substring(1, thousands.length-7);
        let hundreads = el.innerHTML;
        hundreads = hundreads.substring(hundreads.length - 6, hundreads.length -3);
        let total = +thousands*1000 + +hundreads;
        mainTotal += total;
    });
    discountTotal = mainTotal - (mainTotal * discountNum /100);

    thousands = Math.floor(mainTotal /1000);
    hundreads = mainTotal % 1000;

    thousandsDiscount = Math.floor(discountTotal /1000);
    hundreadsDiscount = discountTotal % 1000;

    totalBlock.innerHTML = `$${thousands},${hundreads}.00`
    discountBlock.innerHTML = `$${thousandsDiscount},${hundreadsDiscount}.00`
}

function deleteCard(cards){
    cards.forEach(el => {
        const deleteBtn = el.querySelector('.cart__block-trash');
        deleteBtn.addEventListener('click', () => {
            el.parentNode.remove();
            let total = document.querySelector('.total');
            let prices = document.querySelectorAll('.sum span');
            let discountBlock = document.querySelector('.total-discount');
            let discount = document.querySelector('.discount-num');
            getSumTotal(prices, total, discountBlock, discount);
        })
    })
}

function card(card){
    const price = card.querySelector('.price span');
    const plus = card.querySelector('.plus');
    const minus = card.querySelector('.minus');
    const result = card.querySelector('.sum span');
    const count = card.querySelector('.cart__block-wrapper-value');

    getSumCard(count, price, result);

    plus.addEventListener('click', () => {
        count.innerHTML = count.innerHTML - 0 + 1;
        getSumCard(count, price, result);
        let total = document.querySelector('.total');
        let prices = document.querySelectorAll('.sum span');
        let discountBlock = document.querySelector('.total-discount');
        let discount = document.querySelector('.discount-num');
        getSumTotal(prices, total, discountBlock, discount);
    });

    minus.addEventListener('click', () => {
        if(count.innerHTML > 1){
            count.innerHTML = count.innerHTML - 0 - 1;
            getSumCard(count, price, result);
            let total = document.querySelector('.total');
            let prices = document.querySelectorAll('.sum span');
            let discountBlock = document.querySelector('.total-discount');
            let discount = document.querySelector('.discount-num');
            getSumTotal(prices, total, discountBlock, discount);
        }
    })
}

const cards = document.querySelectorAll('.cart__block');
let total = document.querySelector('.total');
let prices = document.querySelectorAll('.sum span');
let discountBlock = document.querySelector('.total-discount');
let discount = document.querySelector('.discount-num');


cards.forEach(el => {
    card(el, total);
});
getSumTotal(prices, total, discountBlock, discount);
deleteCard(cards);
