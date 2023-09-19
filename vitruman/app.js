const leftPane = document.querySelector('.main__nav');
const leftPaneBtn = document.querySelector('.main__nav_btn');
const leftPaneBtnIcon = document.querySelector('.main__nav_icon');
const navItems = document.querySelectorAll('.nav__item');
const slider = document.querySelector('.slider');
const slider2 = document.querySelector('.slider2');
const connectButtons = document.querySelectorAll('.connect__exchange_section_btn');
const exchangeButtons = document.querySelectorAll('.connect__exchange_items_btn');
const referralButtons = document.querySelectorAll('.referral__btn');
const referralButtonsMobile = document.querySelectorAll('.referral__btn_mobile');
const showPassword = document.querySelectorAll('.auth__input_show');
const selectPhone = document.querySelector('.input__select_value');
const balanceCheckbox = document.querySelector('.tokens__search_checkbox');
const replenishmentDropdown = document.querySelector('.replenishment__valute_dropdown_value');
const replenishmentSystem = document.querySelectorAll('.system__btn');
const transferButtons = document.querySelectorAll('.transfer__button');
const transferDropDownBtns = document.querySelectorAll('.transfer__input_dropdown_value');
const langBtn = document.querySelector('.header__lang');
const statisticBtn = document.querySelectorAll('.presents__header');
const statisticBtnHide = document.querySelectorAll('.presents__btn');
const dropDown = document.querySelectorAll('.dropdown');
const editorSelect = document.querySelector('.editor__auto_select');
const editorInfo = document.querySelector('.editor__valute_info');
const headerValute = document.querySelector('.header__value');
const educationTabs = document.querySelectorAll('.education__about_title');
const educationTasks = document.querySelectorAll('.education__task_header');
const educationSlider = document.querySelector('.education__slider');
const ranges = document.querySelectorAll('input[type="range"].slider-progress');

if(ranges && ranges.length > 0) {
    for (let e of ranges) {
        e.style.setProperty('--value', e.value);
        e.style.setProperty('--min', e.min == '' ? '0' : e.min);
        e.style.setProperty('--max', e.max == '' ? '100' : e.max);
        e.addEventListener('input', () => e.style.setProperty('--value', e.value));
    }
}


if(educationSlider) {
    const messages = {
        1: '1asdasdasdasdкоторый я когда-либо пила. Я также оценила уютную и гостеприимную атмосферу, которая заставила меня чувствовать себя прямо у себя дома. Я обязательно вернусь и очень рекомендую эту кофейню всем, кто ищетпервоклассный кофе. Спасибо за фантастическое время!',
        2: '2Это был 123123123ый я когда-либо пила. Я также оценила уютную и гостеприимную атмосферу, которая заставила меня чувствовать себя прямо у себя дома. Я обязательно вернусь и очень рекомендую эту кофейню всем, кто ищетпервоклассный кофе. Спасибо за фантастическое время!',
        3: '3Это быcvxcvvvа, который ру, которая заставила меня чувствовать себя прямо у себя дома. Я обязательно вернусь и очень рекомендую эту кофейню всем, кто ищетпервоклассный кофе. Спасибо за фантастическое время!',
        4: 'Это был самым  лучwerwerwerательно вернусь и очень рекомендую эту кофейню всем, кто ищетпервоклассный кофе. Спасибо за фантастическое время!',
        5: '4Это был самым  лучшим ча, который я когда-либо пила. Я также оценила уютную и гостеприимную атмосферу, которая заставила меня чувствовать себя прямо у себя дома. Я обязательно вернусь и очень рекомендую эту кофейню всем, кто ищетпервоклассный кофе. Спасибо за фантастическое время!',
        6: '5Это был самыasdasdads, которая заставила меня чувствовать себя прямо у себя дома. Я обязательно вернусь и очень рекомендую эту кофейню всем, кто ищетпервоклассный кофе. Спасибо за фантастическое время!',
        7: '6Это бfgdfgdfgdfgdfgdfgательно вернусь и очень рекомендую эту кофейню всем, кто ищетпервоклассный кофе. Спасибо за фантастическое время!',
    }

    const btnPrev = document.querySelector('.education__slider_arrow_prev');
    const btnNext= document.querySelector('.education__slider_arrow_next');

    btnPrev.addEventListener('click', () => {
        sliderAction('prev')
    })

    btnNext.addEventListener('click', () => {
        sliderAction('next')
    })

    function sliderAction(action) {
        const sliderItems = document.querySelectorAll('.education__slider_item');
        const sliderItemsContainer = document.querySelector('.education__slider_items');
        const sliderText = document.querySelector('.education__slider_text');
        let cache = null;
        let newItems = [];

        if(action === 'prev') {
            sliderItems.forEach((item, ind) => {
                item.classList.remove('education__slider_item_active');
                item.classList.add('slider__none');
                if(ind === sliderItems.length - 1) {
                    cache = item;
                } else {
                    newItems.push(item);
                }
            })
            newItems.unshift(cache);
            sliderItemsContainer.innerHTML = '';
            newItems.forEach((item, ind) => {
                if(ind === 3) {
                    item.classList.add('education__slider_item_active');
                };
                if(ind === 3 || ind === 4 || ind === 2){
                    item.classList.remove('slider__none');
                }
                sliderText.textContent = messages[item.id];
                sliderItemsContainer.appendChild(item);
            })
        } else {
            sliderItems.forEach((item, ind) => {
                item.classList.remove('education__slider_item_active');
                item.classList.add('slider__none');
                if(ind === 0) {
                    cache = item;
                } else {
                    newItems.push(item);
                }
            })
            newItems.push(cache);
            sliderItemsContainer.innerHTML = '';
            newItems.forEach((item, ind) => {
                if(ind === 3){
                    item.classList.add('education__slider_item_active');
                };
                if(ind === 3 || ind === 4 || ind === 2){
                    item.classList.remove('slider__none');
                }
                sliderText.textContent = messages[item.id];
                sliderItemsContainer.appendChild(item);
            })
        }
    }
}
const footerBtns = document.querySelectorAll('.footer__el');
const footerContent = document.querySelectorAll('.footer__el_content');
footerBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        footerContent[index].classList.toggle('active');
        if(footerContent[index].classList.contains('active')){
            btn.querySelector('img').style.transform = `rotate(180deg)`;
        } else{
            btn.querySelector('img').style.transform = `rotate(360deg)`;
        }
        
    })
})

if(educationTasks && educationTasks.length > 0) {
    const educationTasksHidden = document.querySelectorAll('.education__task_close');
    educationTasks.forEach(btn => {
        btn.addEventListener('click', e => {
            e.currentTarget.parentNode.querySelector('.education__task_content').classList.toggle('education__task_content_visible');
        })
    })

    educationTasksHidden.forEach(btn => {
        btn.addEventListener('click', e => {
            e.currentTarget.parentNode.parentNode.querySelector('.education__task_content').classList.remove('education__task_content_visible');
            e.currentTarget.parentNode.parentNode.querySelector('.education__task_title > button').style.display = 'flex';
        })
    })

}

if(educationTabs && educationTabs.length > 0) {
    educationTabs.forEach(item => {
        item.addEventListener('click', e => {
            const tab = e.currentTarget.parentNode.querySelector('.education__about_content');

            if(tab.classList.contains('education__about_content_visible')) {
                tab.classList.remove('education__about_content_visible');
                e.currentTarget.querySelector('.education__about_close').classList.remove('education__about_active');
                e.currentTarget.querySelector('.education__about_open').classList.add('education__about_active');
            } else {
                tab.classList.add('education__about_content_visible');
                e.currentTarget.querySelector('.education__about_close').classList.add('education__about_active');
                e.currentTarget.querySelector('.education__about_open').classList.remove('education__about_active');
            }
        })
    })
}



if(headerValute) {

    document.querySelector('body').addEventListener('click', (e) => {
        if(e.target.parentNode == headerValute){
            headerValute.querySelector('.header__value_dropdown').classList.toggle('header__value_dropdown_active');
        } else{
            headerValute.querySelector('.header__value_dropdown').classList.remove('header__value_dropdown_active');
        }
    })


    const itemsDropdown = document.querySelectorAll('.header__value_dropdown_item');

    itemsDropdown.forEach(item => {
        item.addEventListener('click', e => {
            const value = e.currentTarget.querySelector('.header__value_dropdown_value').textContent;
            const name = e.currentTarget.querySelector('.header__value_dropdown_name').textContent;
            e.currentTarget.parentNode.parentNode.querySelector('.header__value_item').textContent = value;
            e.currentTarget.parentNode.parentNode.querySelector('.header__value_name').textContent = name;

            itemsDropdown.forEach(elem => {
                if(elem !== e.currentTarget) {
                    elem.querySelector('svg').classList.add('header__value_dropdown_disabled');
                } else {
                    elem.querySelector('svg').classList.remove('header__value_dropdown_disabled');
                }
            })
        })
    })
}

if(editorInfo) {
    document.querySelector('.editor__valute_info_box_close').addEventListener('click', e => {
        e.currentTarget.parentNode.classList.remove('editor__valute_info_box_active');
    })

    editorInfo.addEventListener('click', e => {
        e.currentTarget.parentNode.parentNode.querySelector('.editor__valute_info_box').classList.add('editor__valute_info_box_active');
    })
}

if(editorSelect) {
    editorSelect.addEventListener('click', () => {
        editorSelect.classList.toggle('editor__auto_select_active');
    })
}

if(dropDown && dropDown.length > 0) {
    const dropdownItems = document.querySelectorAll('.dropdown__item');

    dropDown.forEach(btn => {
        btn.addEventListener('click', e => {
            dropDown.forEach(item => {
                if(item !== e.currentTarget) {
                    item.querySelector('.dropdown__box').classList.remove('dropdown__box_active');
                }
            });
            e.currentTarget.querySelector('.dropdown__box').classList.toggle('dropdown__box_active');
        })
    })

    dropdownItems.forEach(btn => {
        btn.addEventListener('click', e => {
            e.currentTarget.parentNode.parentNode.querySelector('.dropdown__value').textContent = e.currentTarget.textContent;
        })
    })
}

if (leftPaneBtn) leftPaneBtn.addEventListener('click', () => {
    if(leftPane.classList.contains('main__nav_active')) {
        leftPaneBtnIcon.classList.add('main__nav_icon_collapse');
        leftPane.classList.remove('main__nav_active');
    } else {
        leftPaneBtnIcon.classList.remove('main__nav_icon_collapse');
        leftPane.classList.add('main__nav_active');
    }
})

if (navItems && navItems.length > 0) navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        const subMenu = item.querySelector('.nav__sub_menu');
        if(subMenu) {
            subMenu.classList.add('nav__sub_menu_active');
        }
    })

    item.addEventListener('mouseout', () => {
        const subMenu = item.querySelector('.nav__sub_menu');
        if(subMenu) {
            subMenu.classList.remove('nav__sub_menu_active');
        }
    })
})

if(slider) {
    const sliderContent = slider.querySelector('.slider__content');
    const images = sliderContent.querySelectorAll('img');
    const buttonBox = slider.querySelector('.slider__buttons');
    images.forEach((item, ind) => {
        const btn = document.createElement('div');
        btn.classList.add('slider__button');
        if(ind === 0) btn.classList.add('slider__button_active');
        btn.addEventListener('click', () => {
            const sliderBoxWidth = slider.querySelector('.slider__box').getBoundingClientRect().width;
            buttonBox.querySelectorAll('.slider__button').forEach((btn, index) => {
                if(ind !== index) btn.classList.remove('slider__button_active');
                else btn.classList.add('slider__button_active');
                sliderContent.style.transform = `translate(${-ind * sliderBoxWidth}px)`;
            })
        })
        buttonBox.append(btn);
    })
    let ind = 1;
    setInterval(() => {
        if(ind>images.length-1){
            ind = 0;
        } else if(ind <0){
            ind = images.length-1;
        }
        const sliderBoxWidth = slider.querySelector('.slider__box').getBoundingClientRect().width;
        buttonBox.querySelectorAll('.slider__button').forEach((btn, index) => {
            if(ind !== index) btn.classList.remove('slider__button_active');
            else btn.classList.add('slider__button_active');
            sliderContent.style.transform = `translate(${-ind * sliderBoxWidth}px)`;
        })
        ind +=1;
    }, 5000);
}

if(slider2) {
    const sliderContent2 = slider2.querySelector('.slider__content2');
    const images = sliderContent2.querySelectorAll('img');
    const buttonBox2 = slider2.querySelector('.slider__buttons2');
    images.forEach((item, ind) => {
        const btn2 = document.createElement('div');
        btn2.classList.add('slider__button2');
        if(ind === 0) btn2.classList.add('slider__button_active2');
        btn2.addEventListener('click', () => {
            const sliderBoxWidth2 = slider2.querySelector('.slider__box2').getBoundingClientRect().width;
            buttonBox2.querySelectorAll('.slider__button2').forEach((btn, index) => {
                if(ind !== index) btn.classList.remove('slider__button_active2');
                else btn.classList.add('slider__button_active2');
                sliderContent2.style.transform = `translate(${-ind * 100}%)`;
            })
        })
        buttonBox2.append(btn2);
    })
    let ind = 1;
    setInterval(() => {
        if(ind>images.length-1){
            ind = 0;
        } else if(ind <0){
            ind = images.length-1;
        }
        const sliderBoxWidth2 = slider2.querySelector('.slider__box2').getBoundingClientRect().width;
        buttonBox2.querySelectorAll('.slider__button2').forEach((btn, index) => {
            if(ind !== index) btn.classList.remove('slider__button_active2');
            else btn.classList.add('slider__button_active2');
            sliderContent2.style.transform = `translate(${-ind * 100}%)`;
        })
        ind +=1;
    }, 5000);
}
const noConnect = document.querySelector('.not-connect');
if(connectButtons && connectButtons.length > 0 && !noConnect) {
    const containerContentWidth = document.querySelector('.connect__exchange_box').getBoundingClientRect().width;
    const contentBox = document.querySelector('.connect__exchange_container');

    connectButtons.forEach((btn, ind) => {
        btn.addEventListener('click', () => {
            connectButtons.forEach((item, index) => {
                if(ind !== index) item.classList.remove('connect__exchange_section_btn_action');
                else item.classList.add('connect__exchange_section_btn_action');
            })
            contentBox.style.transform = `translate(${-ind * 100}%)`;
        })
    })
}

if(noConnect){
    connectButtons.forEach((btn, ind) => {
        btn.addEventListener('click', () => {
            connectButtons.forEach((item, index) => {
                if(ind !== index) item.classList.remove('connect__exchange_section_btn_action');
                else item.classList.add('connect__exchange_section_btn_action');
            })
        })
    })
}

if(exchangeButtons && exchangeButtons.length > 0) {
    exchangeButtons.forEach(btnActive => {
        btnActive.addEventListener('click', e => {
            exchangeButtons.forEach(btn => {
                if(e.currentTarget === btn) e.currentTarget.classList.add('connect__exchange_items_btn_active');
                else btn.classList.remove('connect__exchange_items_btn_active');
            })
        })
    })
}

if(referralButtons && referralButtons.length > 0) {
    const referralButtonsHide = document.querySelectorAll('.referral__content_btn');

    referralButtons.forEach(btn => {
        btn.addEventListener('click', e => {
            e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.referral__content').classList.remove('referral__content_hide');
            e.target.style.display = 'none';
        })
    });

    referralButtonsHide.forEach(btn => {
        btn.addEventListener('click', e => {
            const container = e.target.parentNode.parentNode.parentNode;
            container.querySelector('.referral__btn').style.display = 'block';
            container.querySelector('.referral__content').classList.add('referral__content_hide');
        })
    })
}

if(referralButtonsMobile && referralButtonsMobile.length > 0) {
    const referralButtonsHide = document.querySelectorAll('.referral__content_btn');

    referralButtonsMobile.forEach(btn => {
        btn.addEventListener('click', e => {
            e.target.parentNode.parentNode.parentNode.querySelector('.referral__content').classList.remove('referral__content_hide');
            e.target.style.display = 'none';
        })
    });

    referralButtonsHide.forEach(btn => {
        btn.addEventListener('click', e => {
            const container = e.target.parentNode.parentNode.parentNode;
            container.querySelector('.referral__btn_mobile').style.display = 'block';
            container.querySelector('.referral__content').classList.add('referral__content_hide');
        })
    })
}

if(showPassword && showPassword.length > 0) {
    let h = 0;
    const im = document.querySelector(".auth__input_show img");
    showPassword.forEach(btn => {
        btn.addEventListener('click', () => {
            if(h==0){
                im.src = "../../img/auth/show-1.svg";
                h++;
            } else if(h>=1){
                im.src = "../../img/auth/show.svg";
                h=0;
            }
            const inputPass = btn.parentNode.querySelector('.auth__input_pass');
            if(inputPass.getAttribute('type') === 'text') inputPass.setAttribute('type', 'password');
            else inputPass.setAttribute('type', 'text');
        })
    })
}

if(selectPhone) {
    const phoneList = document.querySelector('.input__select_list');
    const phoneItems = document.querySelectorAll('.input__select_item');
    selectPhone.addEventListener('click', () => {
        phoneList.classList.toggle('input__select_list_hidden');
    })
    phoneItems.forEach(item => {
        item.addEventListener('click', e => {
            const imgUrl = e.target.querySelector('img').getAttribute('src');
            selectPhone.querySelector('img').setAttribute('src', imgUrl);
            selectPhone.querySelector('.input__select_num').textContent = e.target.textContent;
            phoneList.classList.add('input__select_list_hidden');
        })
    })
}

if(balanceCheckbox) {
    balanceCheckbox.addEventListener('click', e => {
        e.currentTarget.querySelector('.tokens__search_checkbox_checked').classList.toggle('tokens__search_checkbox_off');
    })
}

if(replenishmentDropdown) {
    const dropdownList = document.querySelector('.replenishment__valute_dropdown_list');
    const arrow = replenishmentDropdown.querySelector('svg');
    const listItems = document.querySelectorAll('.replenishment__valute_dropdown_item');
    replenishmentDropdown.addEventListener('click', () => {
        if(dropdownList.classList.contains('replenishment__valute_dropdown_list_active')) {
            dropdownList.classList.remove('replenishment__valute_dropdown_list_active');
            arrow.style.transform = 'rotate(0deg)';
        } else {
            dropdownList.classList.add('replenishment__valute_dropdown_list_active');
            arrow.style.transform = 'rotate(180deg)';
        }
    })

    listItems.forEach(item => {
        item.addEventListener('click', e => {
            e.currentTarget.querySelector('.replenishment__valute_dropdown_check').classList.add('replenishment__valute_dropdown_check_active');
            replenishmentDropdown.querySelector('.replenishment__valute_dropdown_title').textContent = e.currentTarget.querySelector('.replenishment__valute_dropdown_title').textContent;
            replenishmentDropdown.querySelector('.replenishment__valute_dropdown_name').textContent = e.currentTarget.querySelector('.replenishment__valute_dropdown_name').textContent;
            const imgUrl = e.currentTarget.querySelector('.replenishment__valute_dropdown_img').getAttribute('src');
            replenishmentDropdown.querySelector('.replenishment__valute_dropdown_img').setAttribute('src', imgUrl);
            dropdownList.classList.remove('replenishment__valute_dropdown_list_active');
            arrow.style.transform = 'rotate(0deg)';
            listItems.forEach(elem => {
                if(elem !== e.currentTarget) {
                    elem.querySelector('.replenishment__valute_dropdown_check').classList.remove('replenishment__valute_dropdown_check_active');
                }
            })
        })
    })
}

if(replenishmentSystem && replenishmentSystem.length > 0) {
    replenishmentSystem.forEach(btn => {
        btn.addEventListener('click', e => {
            if(e.target.parentNode.querySelector('.system__list').classList.contains('system__list_active')) {
                e.target.querySelector('svg').style.transform = 'rotate(0deg)';
                e.target.parentNode.querySelector('.system__list').classList.remove('system__list_active');
            } else {
                e.target.querySelector('svg').style.transform = 'rotate(180deg)';
                e.target.parentNode.querySelector('.system__list').classList.add('system__list_active');
            }
        })
    });

    const systemValues = document.querySelectorAll('.system__list_box');

    systemValues.forEach(btn => {
        btn.addEventListener('click', e => {
            systemValues.forEach(item => {
                e.currentTarget.querySelector('.replenishment__valute_dropdown_check').classList.add('replenishment__valute_dropdown_check_active');
                if(item !== btn) {
                    item.querySelector('.replenishment__valute_dropdown_check').classList.remove('replenishment__valute_dropdown_check_active');
                }
            })
        })
    })
}

if(transferButtons && transferButtons.length > 0) {
    transferButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            transferButtons.forEach(item => {
                if(item !== btn) {
                    item.classList.remove('transfer__button_active');
                } else {
                    item.classList.add('transfer__button_active');
                }
            })
        })
    })
}

if(transferDropDownBtns && transferDropDownBtns.length > 0) {

    const transferList = document.querySelectorAll('.transfer__input_dropdown_list');
    const transferTrigger = document.querySelectorAll('.transfer__input_dropdown_value');

    document.querySelector('body').addEventListener('click', (e) => {
        if(e.target != transferTrigger[0]){
            if(e.target.parentNode.parentNode != transferTrigger[0]){
                transferList[0].classList.remove('transfer__input_dropdown_list_active');
            }

        }
    })
    if(transferTrigger.length >1 && transferList.length >1){
        document.querySelector('body').addEventListener('click', (e) => {
            if(e.target != transferTrigger[1]){
                transferList[1].classList.remove('transfer__input_dropdown_list_active');
            }
        })
    }


    transferDropDownBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            
            const transferList = e.currentTarget.parentNode.querySelector('.transfer__input_dropdown_list');
            
            const transferArrow = e.currentTarget.querySelector('.transfer__input_dropdown_value_arrow');
            if(transferList.classList.contains('transfer__input_dropdown_list_active')) {
                transferList.classList.remove('transfer__input_dropdown_list_active');
                transferArrow.querySelector('svg').style.transform = 'rotate(0deg)';
            } else {
                
                transferList.classList.add('transfer__input_dropdown_list_active');
                transferArrow.querySelector('svg').style.transform = 'rotate(180deg)';
            }
        })
    })

    const transferValues = document.querySelectorAll('.transfer__input_dropdown_item');

    transferValues.forEach(item => {
        item.addEventListener('click', e => {
            const imgUrl = e.currentTarget.querySelector('.transfer__input_dropdown_item_img').getAttribute('src');
            e.currentTarget.parentNode.parentNode.querySelector('.transfer__input_dropdown_value_box > p').textContent = e.currentTarget.querySelector('p').textContent;
            e.currentTarget.parentNode.parentNode.querySelector('.transfer__input_dropdown_value_box > img').setAttribute('src', imgUrl);
            transferValues.forEach(box => {
                if(box !== item) {
                    box.querySelector('.transfer__input_dropdown_item_check').classList.remove('transfer__input_dropdown_item_check_active');
                } else {
                    box.querySelector('.transfer__input_dropdown_item_check').classList.add('transfer__input_dropdown_item_check_active');
                }
            })
        })
    })

}

if(langBtn) {
    const sliderBox = document.querySelector('.header__lang_dropdown');
    const langItems = document.querySelectorAll('.header__lang_dropdown_item');
    
    document.querySelector('body').addEventListener('click', (e) => {
        if(e.target.parentNode == langBtn){
            sliderBox.classList.toggle('header__lang_dropdown_active');
        } else{
            sliderBox.classList.remove('header__lang_dropdown_active');
        }
    })

    langItems.forEach(item => {
        item.addEventListener('click', e => {
            langBtn.querySelector('span').textContent = e.currentTarget.querySelector('span').textContent;
            langItems.forEach(elem => {
                if(elem !== item) elem.querySelector('svg').classList.add('header__lang_dropdown_disabled');
                else elem.querySelector('svg').classList.remove('header__lang_dropdown_disabled');
            })
        })
    })
}

if(statisticBtn && statisticBtn.length > 0) {

    statisticBtnHide.forEach(btn => {
        btn.addEventListener('click', e => {
            e.currentTarget.parentNode.classList.toggle('presents__box_active');
            e.currentTarget.parentNode.parentNode.querySelector('.presents__button').classList.toggle('presents__button_hide');
        })

    })

    statisticBtn.forEach(btn => {
        btn.addEventListener('click', e => {
            if(!e.target.classList.contains('presents__input')){
                e.currentTarget.querySelector('.presents__button').classList.toggle('presents__button_hide');
                e.currentTarget.parentNode.querySelector('.presents__box').classList.toggle('presents__box_active');
            }
        })
    })
}

try{
    var sheet = document.createElement('style'),  
  $rangeInput = $('.range input'),
  prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);

var getTrackStyle = function (el) {  
  var curVal = el.value,
      val = (curVal - 1) * 25,
      style = '';
  
  // Set active label
  $('.range-labels li').removeClass('active selected');
  
  var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');
  
  curLabel.addClass('active selected');
  curLabel.prevAll().addClass('selected');
  
  // Change background gradient
  for (var i = 0; i < prefs.length; i++) {
    style += '.range {background: linear-gradient(to right, #b2b2b2 0%, #b2b2b2 ' + val + '%, #fff ' + val + '%, #b2b2b2 100%)}';
    style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #b2b2b2 0%, #b2b2b2 ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
  }

  return style;
}

$rangeInput.on('input', function () {
  sheet.textContent = getTrackStyle(this);
});

// Change input value on label click
$('.range-labels li').on('click', function () {
  var index = $(this).index();
  
  $rangeInput.val(index + 1).trigger('input');
  
});
}
catch{}


//Дроп меню
const buyBtn = document.querySelectorAll('.statistics__accurate_filter_item_offers-btn_buy');
const typeBtn = document.querySelectorAll('.statistics__accurate_filter_item_offers-btn_type');

const buyBlock = document.querySelectorAll('.market__active_buy');
const typeBlock = document.querySelectorAll('.market__active_type');

if(buyBtn){
    document.querySelector('body').addEventListener('click', (e) => {
        // if((e.target == buyBtn || e.target.parentNode.parentNode == buyBtn  || e.target.parentNode.parentNode.parentNode == buyBtn)){
        //     buyBlock.classList.toggle('market__active_visible');
        // } else if(!(e.target == buyBlock || e.target.parentNode == buyBlock  || e.target.parentNode.parentNode == buyBlock)){
        //     buyBlock.classList.remove('market__active_visible');
        // }
        buyBtn.forEach((item, i) => {
            if((e.target == item || e.target.parentNode == item  || e.target.parentNode.parentNode == item || e.target.parentNode.parentNode.parentNode == item)){
                buyBlock[i].classList.toggle('market__active_visible');
            } else if(!(e.target == buyBlock[i] || e.target.parentNode == buyBlock[i]  || e.target.parentNode.parentNode == buyBlock[i] || e.target.parentNode.parentNode.parentNode == buyBlock[i])){
                buyBlock[i].classList.remove('market__active_visible');
            }
        })
    })
}
if(typeBtn){
    document.querySelector('body').addEventListener('click', (e) => {

        typeBtn.forEach((item, i) => {
            if(e.target == item || e.target.parentNode == item  || e.target.parentNode.parentNode == item || e.target.parentNode.parentNode.parentNode == item){
                typeBlock[i].classList.toggle('market__active_visible');
            } else if(!(e.target == typeBlock[i] || e.target.parentNode == typeBlock[i]  || e.target.parentNode.parentNode == typeBlock[i] || e.target.parentNode.parentNode.parentNode == typeBlock[i])){
                typeBlock[i].classList.remove('market__active_visible');
            }
        })
    })

}


//footer cookie

const footerCookie = document.querySelector('.footer__cookie');
const footerCookieClose = document.querySelector('.footer__cookie_btn');

if(footerCookie){
    footerCookieClose.addEventListener('click', () => {
        footerCookie.remove();
    })
}

const partners__tabs = document.querySelectorAll('.statistics__general_title_tab_btn')

if(partners__tabs){
    partners__tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            partners__tabs.forEach((el) => {
                el.classList.remove('statistics__general_title_tab_btn-active');
            });
            tab.classList.add('statistics__general_title_tab_btn-active');
        });
    });
}

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    document.querySelector('.menu__overlay').classList.add('active');
});

document.querySelector('.menu__overlay').addEventListener('click', () => {
    menu.classList.remove('active');
    document.querySelector('.menu__overlay').classList.remove('active');
});

document.querySelector('.menu__link').addEventListener('click', () => {
    menu.classList.remove('active');
    document.querySelector('.menu__overlay').classList.remove('active');
})

closeElem.addEventListener('click', (e) => {
    menu.classList.remove('active');
    document.querySelector('.menu__overlay').classList.remove('active');
    menu.style.bottom = -100 + "%";
    document.querySelector('body').style.overflow = 'auto';
});

drag(menu, closeElem, hamburger, document.querySelector('.menu__overlay'))

const menuLangBtns = document.querySelectorAll('.menu__lang_block_wrapper_btn');
const menuLinkBtn = document.querySelector('.menu__link_lang');
const menuLang = document.querySelector('.menu__lang');
const menuLangClose = document.querySelector('.menu__lang_close');
const menuLangBlocks = document.querySelectorAll('.menu__lang_block_content-lang');
const menuBlockLinkFirst = menuLangBlocks[0].querySelectorAll('.menu__lang_block_link');
const menuBlockLinkSecond = menuLangBlocks[1].querySelectorAll('.menu__lang_block_link');


menuLinkBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    menuLang.classList.add('active');
    document.querySelector('html').style.overflow = 'hidden';
})

menuLangClose.addEventListener('click', () => {
    menuLang.classList.remove('active');
    document.querySelector('html').style.overflow = 'auto';
    document.querySelector('.menu__overlay').classList.remove('active');
})

menuBlockLinkFirst.forEach(link => {
    link.addEventListener('click', () => {
        menuBlockLinkFirst.forEach(el => {
            el.classList.remove('active');
        })
        link.classList.add('active');
    })
});
menuBlockLinkSecond.forEach(link => {
    link.addEventListener('click', () => {
        menuBlockLinkSecond.forEach(el => {
            el.classList.remove('active');
        })
        link.classList.add('active');
    })
});

menuLangBtns.forEach((menuLangBtn, index) => {
    menuLangBtn.addEventListener('click', () => {
        menuLangBtns.forEach((menuLangBtn) => {
            menuLangBtn.classList.remove('menu__lang_block_wrapper_btn_active');
        })
        menuLangBlocks.forEach((menuLangBtn) => {
            menuLangBtn.classList.remove('active');
        })
        menuLangBtn.classList.add('menu__lang_block_wrapper_btn_active');
        menuLangBlocks[index].classList.add('active');
    })
})

const tokenBtns = document.querySelectorAll('.tokens__table_action_item-img');
const tokenTitle = document.querySelectorAll('.tokens__table_name_box');
const tokenOverflow = document.querySelector('.token__overflow');

if(tokenBtns && tokenOverflow){
    const tokenBlock = document.querySelectorAll('.token__block');
    const tokenClose = document.querySelectorAll('.token__close');

    tokenBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if(tokenBlock[index].querySelector('.token__title')){
                tokenBlock[index].querySelector('.token__title').innerHTML = tokenTitle[index].querySelector('span').innerHTML;
                tokenBlock[index].querySelector('.token__subtitle').innerHTML = tokenTitle[index].querySelector('p').innerHTML;
                tokenBlock[index].style.bottom = 0 + "%";
                tokenOverflow.classList.add('active');
                document.querySelector('body').style.overflow = 'hidden';
            }else{
                tokenBlock[index].style.bottom = 0 + "%";
                tokenOverflow.classList.add('active');
                document.querySelector('body').style.overflow = 'hidden';
            }

        })
    })
    
    tokenOverflow.addEventListener('click', () => {
        tokenBlock.forEach(el =>{
            el.style.bottom = -100 + "%";
        })
        tokenOverflow.classList.remove('active');
        document.querySelector('body').style.overflow = 'auto';
    })
    
    tokenClose.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            tokenBlock[index].style.bottom = -100 + "%";
            tokenOverflow.classList.remove('active');
            document.querySelector('body').style.overflow = 'auto';
        })
        
    })

}

const balanceTokenBtns = document.querySelectorAll(".data");

if(balanceTokenBtns){
    const tokenBlock = document.querySelectorAll('.token__block-detals');
    const tokenClose = document.querySelectorAll('.token__close-detals');

    balanceTokenBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            tokenBlock[index].style.opacity = 1;
            tokenBlock[index].style.zIndex = 99999999999999;
            tokenOverflow.classList.add('active');
            document.querySelector('body').style.overflow = 'hidden';

        })
    })
    
    tokenOverflow.addEventListener('click', () => {
        tokenOverflow.classList.remove('active');
        tokenBlock.forEach(el=>{
            el.style.opacity = 0;
            el.style.zIndex = -1;
        })
        document.querySelector('body').style.overflow = 'auto';
    })
    
    tokenClose.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            tokenBlock[index].style.opacity = 0;
            tokenBlock[index].style.zIndex = -1;
            tokenOverflow.classList.remove('active');
            document.querySelector('body').style.overflow = 'auto';
        })
        
    })
}

function drag(block, close, btns, overflow){
    var Ystart;
    var pageYel;
    if(btns.length>1){
        btns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                block.style.bottom = 0 + "%";
                overflow.classList.add('active');
                document.querySelector('body').style.overflow = 'hidden';
            })
        })
    } else{
        try{
            btns.addEventListener('click', () => {
                block.style.bottom = 0 + '%';
                overflow.classList.add('active');
                document.querySelector('body').style.overflow = 'hidden';
            })
        } catch{}
    }

    overflow.addEventListener('click', () => {
        block.style.bottom = -100 + "%";
        overflow.classList.remove('active');
        document.querySelector('body').style.overflow = 'auto';
    });
    if(close.length>1){
        close.forEach((close) => {
            close.addEventListener('click', () => {
                block.style.bottom = -100 + "%";
                overflow.classList.remove('active');
                document.querySelector('body').style.overflow = 'auto';
            })
        })
    } 


    function moveAt(Ystart, pageY) {
        pageYel = pageY;
        if(!(Ystart-pageYel >0)){
            block.style.bottom =Ystart - pageYel + 'px';
        }
    }

    block.addEventListener('touchstart', (event) => {
        Ystart = event.targetTouches[0].pageY;
    })
    block.addEventListener('touchmove', (event) => {
        moveAt(Ystart, event.targetTouches[0].pageY);
    })
    block.addEventListener('touchend', () => {
        if(Ystart-pageYel<= -block.offsetHeight +50){
            document.querySelector('body').style.overflow = 'auto';
            block.style.bottom = -100 + "%";
            overflow.classList.remove('active');
            Ystart = 0;
            pageYel = 0;
        } else if(Ystart-pageYel<= block.offsetHeight) {
            if(btns.length>1){
                block.style.bottom = 0 + '%';
            } else{
                block.style.bottom = 0 + '%';
            }
            
        }
    })
}


const questionBtns = document.querySelectorAll('.questions__block-btn');
const questionContent = document.querySelectorAll('.questions__block-text-descr');

if(questionBtns){
    let questionFullArr = [];
    questionContent.forEach((question) => {
        let fullContent = question.innerHTML;
        questionFullArr.push(fullContent);
        question.innerHTML = fullContent.slice(0, 109) + "...";
    })
    questionBtns.forEach((btn, index)=> {
        btn.addEventListener('click', () => {
            if(questionContent[index].innerHTML == questionFullArr[index]){
                questionContent[index].innerHTML = questionFullArr[index].slice(0, 109) + "...";
                btn.innerHTML = '+';
            } else{
                questionContent[index].innerHTML = questionFullArr[index];
                btn.innerHTML = '&#8722;';
            }
        })
    })
}

const varAct = document.querySelectorAll('.active__var-block');

if(varAct){
    let k = document.createElement('img');
    k.src = "../img/Check.png";
    varAct.forEach((el, i) => {
        el.addEventListener('click', () => {
            if(i == 0){
                varAct[i].classList.add('act');
                varAct[1].classList.remove('act');
                if(!varAct[i].querySelector('img')){
                    varAct[i].querySelector('.active__var-block-img-i').appendChild(k);
                    varAct[1].querySelector('img').remove();
                }
            } else{
                varAct[i].classList.add('act');
                varAct[0].classList.remove('act');
                if(!varAct[i].querySelector('img')){
                    varAct[i].querySelector('.active__var-block-img-i').appendChild(k);
                    varAct[0].querySelector('img').remove();
                }
            }
        })
    })
}

const edMob = document.querySelectorAll('.education-mobile__wrapper-block');
const edMobBtn = document.querySelector('.education-mobile__wrapper-btn');

if(edMob){
    let l = 0;
    edMobBtn.addEventListener('click', () => {
        if(l == 0){
            edMob.forEach((el) => {
                el.classList.add('active');
            });
            const k = document.createElement("img");
            k.src = "../img/partners/arrow_up.svg";
            edMobBtn.innerHTML = "Свернуть все";
            edMobBtn.appendChild(k);
            l = 1
        }else if (l==1){
            edMob.forEach((el) => {
                if(!el.classList.contains("tactive")){
                    el.classList.remove('active');
                }
            });
            const k = document.createElement("img");
            k.src = "../img/partners/arrow_bottom.svg";
            edMobBtn.innerHTML = "Показать все";
            edMobBtn.appendChild(k);
            l = 0;
        }
    })
}