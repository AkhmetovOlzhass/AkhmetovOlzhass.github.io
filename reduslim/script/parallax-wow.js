//polyfill foreach for IE
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
      }
  };
}


//check for IE
let userAgent = navigator.userAgent.toLowerCase();	
let Edge = /edge/i.test(userAgent);	
let InternetExplorer = false;
if((/mozilla/.test(userAgent) && !/firefox/.test(userAgent) && !/chrome/.test(userAgent) && !/safari/.test(userAgent) && !/opera/.test(userAgent)) || /msie/.test(userAgent)) {
  InternetExplorer = true;
}



//parallax starting
window.addEventListener("load", function() {
  if (!(InternetExplorer)) {
    let scene = document.querySelectorAll('.parallax');
    scene.forEach(function(sceneItem) {
      new Parallax(sceneItem);
    })
  };
})

//check for safari
let safariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);


//wow init
let wowInit = new WOW().init({
                live: true,
                mobile: false
              });
let flag = 0;

if (window.innerWidth >= 992 && flag === 0 && !InternetExplorer && !safariBrowser) {
  wowInit;
}

$(window).on('resize', function(e){
  let wowArray = $(".wow").each(function() {
    $(this);
  });

  if (window.innerWidth >= 992 && flag === 0 && !InternetExplorer && !safariBrowser) {
    wowInit;
    flag = 1;
  } else {
    wowArray.removeClass("wow");
    flag = 0;
  }
}).trigger('resize')