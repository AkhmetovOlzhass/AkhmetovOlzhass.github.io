document.addEventListener("DOMContentLoaded", function() {

    let loader = document.getElementById("loading-bar-spinner");
    let background = document.getElementById("loader-background");
    loader.style.display = "block";
    background.style.display = "block";

    setTimeout(function() {
        loader.style.display = "none";
        background.style.display = "none";
    }, 2000);
});