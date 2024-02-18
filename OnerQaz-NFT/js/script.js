const promoSlider = document.querySelector(".promo__wrapper");

function createMainSlider() {
  mainSlider.forEach((el, i) => {
    let block = document.createElement('div');
    block.classList.add("promo__block");
    block.innerHTML = `
      <img src=${el.src} alt="promo-slide">
      <h3 class="promo__block-title">
          ${el.title}
      </h3>
      <h4 class="promo__block-price">
          Floor: 
          <span>${el.price}</span> ETH
      </h4>
    `
    promoSlider.append(block);
  })
}

function createCollection(slider, db){
  db.forEach((el, i) => {
    let block = document.createElement('div');
    block.classList.add("promo__block");
    block.innerHTML = `
      <img src=${el.src} alt="promo-slide">
      <div class="promo__block-content">
          <h3 class="promo__block-content-title">${el.title}</h3>
          <div class="promo__block-content-wrap">
              <div class="promo__block-content-block">
                  <span class="info">Floor</span>
                  <p><span class="value">${el.price}</span> ETH</p>
              </div>
              <div class="promo__block-content-block">
                  <p class="button">Buy</p>
              </div>
          </div>
      </div>
    `
    slider.append(block);
  })
}

createMainSlider();

const collectionSlider = document.querySelectorAll(".collections__wrapper");
createCollection(collectionSlider[0], collection1);
createCollection(collectionSlider[1], collection2);




$('.promo__wrapper').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true
});

$('.collections__wrapper').slick({
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1
});


let sold;

if(!localStorage.getItem("sold")){
  sold = []
} else{
  sold = JSON.parse(localStorage.getItem("sold"));
}



function addSold(el) {
  let temp = {};
  temp.src = el.parentNode.parentNode.parentNode.parentNode.querySelector("img").src;
  temp.title = el.parentNode.parentNode.parentNode.parentNode.querySelector(".promo__block-content-title").innerHTML;
  temp.price = el.parentNode.parentNode.parentNode.parentNode.querySelector(".value").innerHTML;
  sold.push(temp);
}

let buyButtons = document.querySelectorAll('.promo__block-content-block .button');
let buyPrice = document.querySelectorAll('.value');
buyButtons.forEach((el, i) => {
  el.addEventListener("click", () => {
    if(balance-buyPrice[i].innerHTML >= 0){
      balance -= buyPrice[i].innerHTML;
      updateBalance(balance);
      addSold(el);
      localStorage.setItem("sold", JSON.stringify(sold));
      el.innerHTML = "SOLD";
      el.style.pointerEvents = "none";
    } else{
      alert("Недостаточно средств");
    }
    if(localStorage.getItem("sold")){
      const profileSold = JSON.parse(localStorage.getItem("sold"));
      cartContent.innerHTML = "";
      let sum = 0;
      profileSold.forEach((el, i) => {

          let cartWrap = document.createElement("div");
          cartWrap.classList.add("cart__wrapper");
          cartWrap.innerHTML = `
              <p class="cart__wrapper-title">${el.title}</p>
              <p class="cart__wrapper-price">${el.price} ETH</p>
          `;
          sum += el.price-0;
          cartContent.append(cartWrap);
          document.querySelector(".allPrice").innerHTML = sum.toFixed(2) + " ETH";
      })
    }

  })
})

function updateBalance(){
  const balanceValue = document.querySelector(".balance span");
  balanceValue.innerHTML = balance.toFixed(2);
  localStorage.setItem("balance", balance.toFixed(2));
}