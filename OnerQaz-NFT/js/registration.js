const reg = document.querySelector(".registration__block form");

let avatars = [
  {
    color: "https://www.notion.so/images/page-cover/solid_red.png"
  },
  {
    color: "https://www.notion.so/images/page-cover/solid_yellow.png"
  },
  {
    color: "https://www.notion.so/images/page-cover/solid_blue.png"
  },
  {
    color: "https://www.notion.so/images/page-cover/solid_beige.png"
  },
  {
    color: "https://www.notion.so/images/page-cover/gradients_8.png"
  },
  {
    color: "https://www.notion.so/images/page-cover/gradients_4.png"
  },
  {
    color: "https://www.notion.so/images/page-cover/gradients_2.png"
  },
  {
    color: "https://www.notion.so/images/page-cover/gradients_11.jpg"
  },
  {
    color: "https://www.notion.so/images/page-cover/gradients_10.jpg"
  },
  {
    color: "https://www.notion.so/images/page-cover/gradients_5.png"
  }
]

if(reg){
  reg.addEventListener('submit', (e) => {
    e.preventDefault();
    let randomColor = Math.floor(Math.random() * 10);;
    randomColor = avatars[randomColor].color;
    let input = reg.querySelector("input");
    input = input.value;
    localStorage.setItem("user", input);
    localStorage.setItem("avatar", randomColor);
    reg.reset();
    window.location.href = "./main.html";
  })
}

let mainSlider = [
  {
    src: "img/promo/promo-1.png",
    title: "The Flower Girl",
    price: "0,03"
  },
  {
    src: "img/promo/promo-2.jpg",
    title: "The Flower Girl",
    price: "0,43"
  },
  {
    src: "img/promo/promo-3.jpg",
    title: "The Flower Girl",
    price: "0,03"
  },
  {
    src: "img/promo/promo-2.jpg",
    title: "The Flower Girl",
    price: "0,03"
  },
  {
    src: "img/promo/promo-1.png",
    title: "The Flower Girl",
    price: "0,03"
  },  
  {
    src: "img/promo/promo-1.png",
    title: "The Flower Girl",
    price: "0,03"
  },
  {
    src: "img/promo/promo-1.png",
    title: "The Flower Girl",
    price: "0,03"
  },  
  {
    src: "img/promo/promo-1.png",
    title: "The Flower Girl",
    price: "0,03"
  },  
]

let collection1 = [
  {
    src: "img/promo/promo-2.jpg",
    title: "Moon Bird",
    price: "10"
  },
  {
    src: "img/promo/promo-1.png",
    title: "Moon Bird",
    price: "1.65"
  },
  {
    src: "img/promo/promo-1.png",
    title: "Moon Bird",
    price: "1.25"
  },
  {
    src: "img/promo/promo-1.png",
    title: "Moon Bird",
    price: "1.65"
  },
  {
    src: "img/promo/promo-1.png",
    title: "Moon Bird",
    price: "1.65"
  },
  {
    src: "img/promo/promo-1.png",
    title: "Moon Bird",
    price: "1.65"
  },
  {
    src: "img/promo/promo-1.png",
    title: "Moon Bird",
    price: "1.65"
  },
  {
    src: "img/promo/promo-1.png",
    title: "Moon Bird",
    price: "1.65"
  },
]

let collection2 = [
  {
    src: "img/promo/promo-1.png",
    title: "Moon Bird",
    price: "1.65"
  },
  {
    src: "img/promo/promo-1.png",
    title: "Moon Bird",
    price: "1.65"
  },
  {
    src: "img/promo/promo-1.png",
    title: "Moon Bird",
    price: "1.25"
  },
  {
    src: "img/promo/promo-1.png",
    title: "Moon Bird",
    price: "1.65"
  },
  {
    src: "img/promo/promo-1.png",
    title: "Moon Bird",
    price: "1.65"
  },
  {
    src: "img/promo/promo-1.png",
    title: "Moon Bird",
    price: "1.65"
  },
  {
    src: "img/promo/promo-1.png",
    title: "Moon Bird",
    price: "1.65"
  },
  {
    src: "img/promo/promo-1.png",
    title: "Moon Bird",
    price: "1.65"
  },
]


