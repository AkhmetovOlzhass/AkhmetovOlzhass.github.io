if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (let i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
      }
  };
}


let buttonArray = document.querySelectorAll(".ceremony__button");
let ceremonyNoteArray = document.querySelectorAll(".ceremony__paragraph");

buttonArray.forEach(function(toggleButton) {
  toggleButton.addEventListener("click", function(evt) {
    evt.preventDefault;

    let noteClass = toggleButton.getAttribute("data-note");
    let noteItem = document.querySelector("." + noteClass);

    noteItem.classList.toggle("ceremony__paragraph--active");
  })
})

