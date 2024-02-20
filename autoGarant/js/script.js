const arrow = document.querySelector(".arrow");
const hide = document.querySelector(".hide");

arrow.addEventListener("click", () => {


    if(hide.style.maxHeight){
        hide.style.maxHeight = null;
        hide.style.visibility = "hidden";
        arrow.querySelector('img').style.transform = "rotate(180deg)";
    } else{
        hide.style.maxHeight = hide.scrollHeight + 'px';
        hide.style.visibility = "visible";
        arrow.querySelector('img').style.transform = "rotate(0)";
    }
})

const historyBlocks =  document.querySelectorAll(".buy-history");
const financialBlocks =  document.querySelectorAll(".financial-history");

const historyView =  document.querySelector(".buy-view");
const financialView =  document.querySelector(".financial-view");

if(historyBlocks.length >= 5){
    historyView.classList.add("active");
    historyBlocks.forEach((el,i) => {
        if(i > 4){
            el.style.display = "none";
        }
    })
}

if(financialBlocks.length >= 3){
    financialView.classList.add("active");
    financialBlocks.forEach((el,i) => {
        if(i > 2){
            el.style.display = "none";
        }
    })
}

historyView.addEventListener('click', () => {
    historyView.classList.remove("active");
    historyBlocks.forEach((el,i) => {
        el.style.display = "block";
    })
})

financialView.addEventListener('click', () => {
    financialView.classList.remove("active");
    financialBlocks.forEach((el,i) => {
        el.style.display = "block";
    })
})