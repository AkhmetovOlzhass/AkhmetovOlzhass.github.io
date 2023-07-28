const leftPane = document.querySelector('.main__nav');
const leftPaneBtn = document.querySelector('.main__nav_btn');
const leftPaneBtnIcon = document.querySelector('.main__nav_icon');
const navItems = document.querySelectorAll('.nav__item');
const slider = document.querySelector('.slider');
const connectButtons = document.querySelectorAll('.connect__exchange_section_btn');
const exchangeButtons = document.querySelectorAll('.connect__exchange_items_btn');
const referralButtons = document.querySelectorAll('.referral__btn');
const showPassword = document.querySelectorAll('.auth__input_show');
const selectPhone = document.querySelector('.input__select_value');
const balanceCheckbox = document.querySelector('.tokens__search_checkbox');
const replenishmentDropdown = document.querySelector('.replenishment__valute_dropdown_value');
const replenishmentSystem = document.querySelectorAll('.system__btn');
const transferButtons = document.querySelectorAll('.transfer__button');
const transferDropDownBtns = document.querySelectorAll('.transfer__input_dropdown_value');
const langBtn = document.querySelector('.header__lang');
const statisticBtn = document.querySelectorAll('.presents__button');
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
                if(ind === sliderItems.length - 1) {
                    cache = item;
                } else {
                    newItems.push(item);
                }
            })
            newItems.unshift(cache);
            sliderItemsContainer.innerHTML = '';
            newItems.forEach((item, ind) => {
                if(ind === 3) item.classList.add('education__slider_item_active');
                sliderText.textContent = messages[item.id];
                sliderItemsContainer.appendChild(item);
            })
        } else {
            sliderItems.forEach((item, ind) => {
                item.classList.remove('education__slider_item_active');
                if(ind === 0) {
                    cache = item;
                } else {
                    newItems.push(item);
                }
            })
            newItems.push(cache);
            sliderItemsContainer.innerHTML = '';
            newItems.forEach((item, ind) => {
                if(ind === 3) item.classList.add('education__slider_item_active');
                sliderText.textContent = messages[item.id];
                sliderItemsContainer.appendChild(item);
            })
        }
    }
}

if(educationTasks && educationTasks.length > 0) {
    const educationTasksHidden = document.querySelectorAll('.education__task_close');
    educationTasks.forEach(btn => {
        btn.addEventListener('click', e => {
            e.currentTarget.parentNode.querySelector('.education__task_content').classList.add('education__task_content_visible');
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
            contentBox.style.transform = `translate(${-ind * containerContentWidth}px)`;
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

if(showPassword && showPassword.length > 0) {
    showPassword.forEach(btn => {
        btn.addEventListener('click', () => {
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
            e.currentTarget.parentNode.classList.remove('presents__box_active');
            e.currentTarget.parentNode.parentNode.querySelector('.presents__button').classList.remove('presents__button_hide');
        })
    })

    statisticBtn.forEach(btn => {
        btn.addEventListener('click', e => {
            e.currentTarget.classList.add('presents__button_hide');
            e.currentTarget.parentNode.parentNode.parentNode.querySelector('.presents__box').classList.add('presents__box_active');
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