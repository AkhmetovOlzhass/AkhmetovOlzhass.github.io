const reg = document.querySelector(".registration__block form");

let avatars = [
  {
    color: "img/avas/man.jpg"
  },
  {
    color: "img/avas/man.jpg"
  },
  {
    color: "img/avas/man.jpg"
  },
  {
    color: "img/avas/man.jpg"
  },
  {
    color: "img/avas/man.jpg"
  },
  {
    color: "img/avas/woman-1.png"
  },
  {
    color: "img/avas/woman-1.png"
  },
  {
    color: "img/avas/woman-1.png"
  },
  {
    color: "img/avas/woman-1.png"
  },
  {
    color: "img/avas/woman-1.png"
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
    src: "img/promo/promo-3.jpg",
    title: "AIEL",
    price: "0,03"
  },
  {
    src: "img/promo/promo-1.png",
    title: "Gúl Qyz",
    price: "0,03"
  },
  {
    src: "img/promo/promo-9.avif",
    title: "Túimedaq",
    price: "0,43"
  },
  {
    src: "img/promo/promo-4.png",
    title: "Mysyq",
    price: "0,03"
  },
  {
    src: "img/promo/promo-5.avif",
    title: "Tabiǵat",
    price: "0,03"
  },  
  {
    src: "img/promo/promo-6.avif",
    title: "Eń Jaqsy Sátter",
    price: "0,03"
  },
  {
    src: "img/promo/promo-7.avif",
    title: "Biz Jaqsy Kóretin Oiyndar",
    price: "0,03"
  },  
  {
    src: "img/promo/promo-8.avif",
    title: "Qyzǵaldaq",
    price: "0,03"
  },  
]

let collection1 = [
  {
    src: "img/aiel-colection/ai-1.png",
    title: "AIEL: Aýyrtpalyq",
    price: "1.65"
  },
  {
    src: "img/aiel-colection/ai-2.jpg",
    title: "AIEL: Maqta Qyz",
    price: "1.65"
  },
  {
    src: "img/aiel-colection/ai-3.jpg",
    title: "AIEL: Qoshtasý",
    price: "1.25"
  },
  {
    src: "img/aiel-colection/ai-4.jpg",
    title: "AIEL: Altyn Áiel",
    price: "1.65"
  },
  {
    src: "img/aiel-colection/ai-5.jpg",
    title: "AIEL: Qansha Kese?",
    price: "1.65"
  },
  {
    src: "img/promo/promo-3.jpg",
    title: "AIEL: Aru Ana",
    price: "1.65"
  },
]

let collection2 = [
  {
    src: "img/tabigat/p-1.webp",
    title: "Tabiǵat 01",
    price: "1.65"
  },
  {
    src: "img/tabigat/p-2.avif",
    title: "Tabiǵat 02",
    price: "1.65"
  },
  {
    src: "img/tabigat/p-3.avif",
    title: "Tabiǵat 03",
    price: "1.25"
  },
  {
    src: "img/tabigat/p-4.avif",
    title: "Tabiǵat 04",
    price: "1.65"
  },
  {
    src: "img/tabigat/p-5.avif",
    title: "Tabiǵat 05",
    price: "1.65"
  },
  {
    src: "img/tabigat/p-6.avif",
    title: "Tabiǵat 06",
    price: "1.65"
  },
  {
    src: "img/tabigat/p-7.avif",
    title: "Tabiǵat 07",
    price: "1.65"
  },
  {
    src: "img/tabigat/p-8.avif",
    title: "Tabiǵat 08",
    price: "1.65"
  },
]


