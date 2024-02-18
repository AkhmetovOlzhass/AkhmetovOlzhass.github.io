let balance;

if(!localStorage.getItem("balance")){
  balance = 20;
} else{
  balance = localStorage.getItem("balance");
}

localStorage.setItem("balance", balance);


const cartBlock = document.querySelector(".cart-block");
const cartContent = document.querySelector(".cart-block__content");
const cartBtn = document.querySelector('.cart');
const cartClose = document.querySelector('.cross');

cartBtn.addEventListener("click", () => {
    cartBlock.classList.add("active");
});

cartClose.addEventListener("click", () => {
    cartBlock.classList.remove("active");
});

let sum = 0;


if(localStorage.getItem("sold")){
    const profileSold = JSON.parse(localStorage.getItem("sold"));
    profileSold.forEach((el, i) => {
        let cartWrap = document.createElement("div");
        cartWrap.classList.add("cart__wrapper");
        cartWrap.innerHTML = `
            <p class="cart__wrapper-title">${el.title}</p>
            <p class="cart__wrapper-price">${el.price} ETH</p>
        `;
    
        sum += el.price-0;
    
        cartContent.append(cartWrap);
    })
}

document.querySelector(".allPrice").innerHTML = sum.toFixed(2) + " ETH";


const balanceValue = document.querySelector(".balance span");
balanceValue.innerHTML = balance;

const avatarCircle = document.querySelector(".avatar__circle");
let avatarColor = document.createElement("img");
avatarColor.src = localStorage.getItem("avatar");
avatarCircle.append(avatarColor);

document.addEventListener('scroll', function() {
    if(document.documentElement.scrollTop > document.querySelector('header').scrollHeight){
      document.querySelector('header').style.backgroundColor = "#121212";
    } else{
      document.querySelector('header').style.backgroundColor = "transparent";
    }
  });