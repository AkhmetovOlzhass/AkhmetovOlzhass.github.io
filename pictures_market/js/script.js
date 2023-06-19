/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const accordion = triggersSelector => {
  const btns = document.querySelectorAll(triggersSelector);
  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      btns.forEach(btn => {
        if (!this.classList.contains('active-style')) {
          btn.classList.remove('active-style');
          btn.nextElementSibling.classList.remove('active-content');
          btn.nextElementSibling.style.maxHeight = 0 + 'px';
        }
      });
      this.classList.toggle('active-style');
      this.nextElementSibling.classList.toggle('active-content');
      if (this.classList.contains('active-style')) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
      } else {
        this.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const burger = (menuSelector, burgerSelector) => {
  const menuElem = document.querySelector(menuSelector),
    burgerElem = document.querySelector(burgerSelector);
  menuElem.style.display = 'none';
  burgerElem.addEventListener('click', () => {
    if (menuElem.style.display == "none") {
      menuElem.style.display = 'block';
    } else {
      menuElem.style.display = 'none';
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const calc = (size, material, options, promocode, result) => {
  const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionsBlock = document.querySelector(options),
    promocodeBlock = document.querySelector(promocode),
    resultBlock = document.querySelector(result);
  let sum = 0;
  const calcFunction = () => {
    sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);
    if (sizeBlock.value == '' || materialBlock.value == '') {
      resultBlock.textContent = "Заполните размер и материал!";
    } else if (promocodeBlock.value === "IWANTPOPART") {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  };
  sizeBlock.addEventListener("change", calcFunction);
  materialBlock.addEventListener("change", calcFunction);
  optionsBlock.addEventListener("change", calcFunction);
  promocodeBlock.addEventListener("input", calcFunction);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkTextInputs = selector => {
  const txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(input => {
    input.addEventListener('keypress', function (e) {
      if (e.key.match(/[^а-яё 0-9]/ig)) {
        e.preventDefault();
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
    items = menu.querySelectorAll('li'),
    btnAll = menu.querySelector('.all'),
    btnLovers = menu.querySelector('.lovers'),
    btnChef = menu.querySelector('.chef'),
    btnGirl = menu.querySelector('.girl'),
    btnGuy = menu.querySelector('.guy'),
    btnGrandmother = menu.querySelector('.grandmother'),
    btnGranddad = menu.querySelector('.granddad'),
    wrapper = document.querySelector('.portfolio-wrapper'),
    markAll = wrapper.querySelectorAll('.all'),
    markGirl = wrapper.querySelectorAll('.girl'),
    markLovers = wrapper.querySelectorAll('.lovers'),
    markChef = wrapper.querySelectorAll('.chef'),
    markGuy = wrapper.querySelectorAll('.guy'),
    no = document.querySelector('.portfolio-no');
  const typeFilter = markType => {
    markAll.forEach(mark => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });
    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');
    if (markType) {
      markType.forEach(mark => {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = 'block';
      no.classList.add('animated', 'fadeIn');
    }
  };
  btnAll.addEventListener('click', () => {
    typeFilter(markAll);
  });
  btnLovers.addEventListener('click', () => {
    typeFilter(markLovers);
  });
  btnChef.addEventListener('click', () => {
    typeFilter(markChef);
  });
  btnGuy.addEventListener('click', () => {
    typeFilter(markGuy);
  });
  btnGirl.addEventListener('click', () => {
    typeFilter(markGirl);
  });
  btnGrandmother.addEventListener('click', () => {
    typeFilter();
  });
  btnGranddad.addEventListener('click', () => {
    typeFilter();
  });
  menu.addEventListener('click', e => {
    let target = e.target;
    if (target && target.tagName == "LI") {
      items.forEach(btn => btn.classList.remove('active'));
      target.classList.add('active');
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const forms = () => {
  const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    upload = document.querySelectorAll('[name="upload"]');
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };
  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
  };
  const postData = async (url, data) => {
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  };
  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = "Файл не выбран";
    });
  };
  upload.forEach(item => {
    item.addEventListener('input', () => {
      console.log(item.files[0]);
      let dots;
      const arr = item.files[0].name.split('.');
      arr[0].length > 6 ? dots = "..." : dots = '.';
      const name = arr[0].substring(0, 6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  });
  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.appendChild(statusMessage);
      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400);
      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      const formData = new FormData(item);
      let api;
      item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
      console.log(api);
      postData(api, formData).then(res => {
        console.log(res);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failure;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
          item.style.display = 'block';
          item.classList.remove('fadeOutUp');
          item.classList.add('fadeInUp');
        }, 5000);
      });
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mask = selector => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  function createMask(event) {
    let matrix = '+7 (___) ___ __ __',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }
  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modals = () => {
  let btnPressed;
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    let destroy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]'),
      scroll = calcScroll();
    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }
        btnPressed = true;
        if (destroy) {
          item.remove();
        }
        windows.forEach(item => {
          item.style.display = 'none';
          item.classList.add('animated', 'fadeIn');
        });
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });
    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      }
    });
  }
  function showModalByTime(selector, time) {
    setTimeout(function () {
      let display;
      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display !== 'none') {
          display = "block";
        }
      });
      if (!display) {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = "hidden";
      }
    }, time);
  }
  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
  function openByScroll(selector) {
    window.addEventListener("scroll", () => {
      if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        document.querySelector(selector).click();
      }
    });
  }
  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  openByScroll('.fixed-gift');
  showModalByTime('.popup-consultation', 50000);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ }),

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pictureSize = imgSelector => {
  const blocks = document.querySelectorAll(imgSelector);
  function showImg(block) {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -4) + '-1.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'none';
    });
  }
  function hideImg(block) {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -6) + '.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'block';
    });
  }
  blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
      showImg(block);
    });
    block.addEventListener('mouseout', () => {
      hideImg(block);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pictureSize);

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scrolling = upSelector => {
  const upElem = document.querySelector(upSelector);
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add('animated', 'fadeIn');
      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('fadeIn');
    }
  });

  // Scrolling with raf

  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.1;
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      let widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) {
          start = time;
        }
        let progress = time - start,
          r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, r);
        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrolling);

/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showMoreStyles = (trigger, styles) => {
  const cards = document.querySelectorAll(styles),
    btn = document.querySelector(trigger);
  cards.forEach(item => {
    item.classList.add('animated', 'fadeInUp');
  });
  btn.addEventListener('click', () => {
    cards.forEach(item => {
      item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
      item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    });
    btn.style.display = "none";
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sliders = (slides, dir, prev, next) => {
  let slideIndex = 1,
    paused = false;
  const items = document.querySelectorAll(slides);
  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = items.length;
    }
    items.forEach(item => {
      item.classList.add("animated");
      item.style.display = "none";
    });
    items[slideIndex - 1].style.display = 'block';
  }
  showSlides(slideIndex);
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  try {
    const prevBtn = document.querySelector(prev),
      nextBtn = document.querySelector(next);
    prevBtn.addEventListener('click', () => {
      plusSlides(-1);
      items[slideIndex - 1].classList.remove('slideInLeft');
      items[slideIndex - 1].classList.add('slideInRight');
    });
    nextBtn.addEventListener('click', () => {
      plusSlides(1);
      items[slideIndex - 1].classList.remove('slideInRight');
      items[slideIndex - 1].classList.add('slideInLeft');
    });
  } catch (e) {}
  function activateAnimation() {
    if (dir === 'vertical') {
      paused = setInterval(function () {
        plusSlides(1);
        items[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    } else {
      paused = setInterval(function () {
        plusSlides(1);
        items[slideIndex - 1].classList.remove('slideInRight');
        items[slideIndex - 1].classList.add('slideInLeft');
      }, 3000);
    }
  }
  activateAnimation();
  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliders);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");












window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical');
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  (0,_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '.styles-2');
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])('#size', '#material', '#options', '.promocode', '.calc-price');
  (0,_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__["default"])('.sizes-block');
  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_9__["default"])('.accordion-heading');
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_10__["default"])('.burger-menu', '.burger');
  (0,_modules_scrolling__WEBPACK_IMPORTED_MODULE_11__["default"])('.pageup');
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map