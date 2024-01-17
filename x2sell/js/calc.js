const minus = document.querySelector('.calc-minus');
const plus = document.querySelector('.calc-plus');
const value = document.querySelector('.calc-value');
let price = document.querySelector('.price').innerHTML;
price = price.substr(0, price.length -1);

const sum = document.querySelector('.sum');

minus.addEventListener('click', () => {
    if(value.innerHTML > 1){
        value.innerHTML -= 1;
    }
    sum.innerHTML = price * value.innerHTML + "$";
});

plus.addEventListener('click', () => {
    value.innerHTML = +value.innerHTML +  1;
    sum.innerHTML = price * value.innerHTML + "$";
    
})