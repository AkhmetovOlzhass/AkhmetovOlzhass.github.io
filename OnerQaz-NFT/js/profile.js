


const avatarImg = document.querySelector(".profile-bg__circle");


let avatarImgCircle = document.createElement("img");

avatarImgCircle.src = localStorage.getItem("avatar");


avatarImg.append(avatarImgCircle);

const userName = document.querySelector(".profile-content .title");

userName.innerHTML = localStorage.getItem("user");



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
                    <span class="info">Baǵasy</span>
                    <p><span class="value">${el.price}</span> ETH</p>
                </div>
            </div>
        </div>
        `
        slider.append(block);
    })
}
  
  
const collectionSlider = document.querySelectorAll(".collections__wrapper");

if(localStorage.getItem("sold")){
    const profileSold = JSON.parse(localStorage.getItem("sold"));
    createCollection(collectionSlider[0], profileSold);
}

if(localStorage.getItem("created")){
    const profileCreated = JSON.parse(localStorage.getItem("created"));
    createCollection(collectionSlider[1], profileCreated);
}


$('.collections__wrapper').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1
});