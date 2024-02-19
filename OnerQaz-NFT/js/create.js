const form = document.querySelector(".registration__block form");
const inputSrc = document.querySelector(".registration__block input#src");
const inputTitle = document.querySelector(".registration__block input#title");
const inputPrice = document.querySelector(".registration__block input#price");

let createdElem;
if(!localStorage.getItem("created")){
    createdElem = [];
} else{
    createdElem = JSON.parse(localStorage.getItem("created"));
}

var temp = {};
var fileReader;

inputSrc.addEventListener("change", (e) => {

    var target = e.target;

    if (!FileReader) {
        alert('FileReader не поддерживается — облом');
        return;
    } else if (!target.files.length) {
        alert('Ничего не загружено');
        return;
    } else{
        document.querySelector(".create__img p").innerHTML = "Sýret qosyldy";
        document.querySelector(".create__img p").style.color = "#fff";
    }

    fileReader = new FileReader();

    fileReader.readAsDataURL(target.files[0]);
})

form.addEventListener("submit", (event) => {
    temp.src = fileReader.result;
    temp.title = inputTitle.value;
    temp.price = inputPrice.value;
    createdElem.push(temp);
    localStorage.setItem("created", JSON.stringify(createdElem));
    form.reset();
    document.querySelector(".create__img p").innerHTML = "Sýretti tańdańyz";
    document.querySelector(".create__img p").style.color = "#919191";
})