const input = document.querySelector(".verification");
const img = document.querySelector(".changeImg");
const btn = document.querySelector(".button-change");

input.addEventListener("input", () => {
    if(input.value.slice(0,1) == 5){
        img.src = "../img/masterCard.png";
        btn.classList.add("button-green");
    } else if(input.value.slice(0,1) == 4){
        img.src = "../img/visaCard.png";
        btn.classList.add("button-green");
    } else{
        img.src = "../img/error2.png";
        btn.classList.remove("button-green");
    }
})