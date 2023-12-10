const premiumLines = document.querySelectorAll('.premium-active');
const money = {
    moneyValue: 2500
}

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