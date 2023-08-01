const partnersTabs = document.querySelectorAll('.tab__menu_btn')
const partnersTabBox = document.querySelectorAll('.tab__box')
const partnersReferal = document.querySelector('.referral')
const partnersTables = document.querySelectorAll('.investors__window_data_box')
const partnersArrows = document.querySelectorAll('.investors__window_arrow')
const partnersLine= document.querySelectorAll('.investors__window_line')
const textLinc = document.getElementById('referral__link')
const copyBtn = document.getElementById('referral__copy_link')
const successReferral = document.querySelector('.copy-confirmation-referral')
const textDeposits = document.getElementById('partners__text-one')
const copyDeposits = document.getElementById('partners__text_btn-one')
const textCredit = document.getElementById('partners__text-two')
const copyCredit = document.getElementById('partners__text_btn-two')
const textCrypt = document.getElementById('partners__text-three')
const copyCrypt = document.getElementById('partners__text_btn-three')
const success = document.querySelector('.copy-confirmation')
const successTwo = document.querySelector('.copy-confirmation-two')
const successThree = document.querySelector('.copy-confirmation-three')
const offerOne = document.getElementById('ali__link')
const btnOne = document.getElementById('offers__btn_copy')
const successFour = document.querySelector('.copy-confirmation-offer')
const offerTwo = document.getElementById('ali__link_two')
const btnTwo = document.getElementById('offers__btn_copy_two')
const successFive = document.querySelector('.copy-confirmation-offer-two')
const offerThree = document.getElementById('ali__link_three')
const btnThree = document.getElementById('offers__btn_copy_three')
const successSix = document.querySelector('.copy-confirmation-offer-three')


partnersTabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        document.querySelector('.tab__menu_btn_active').classList.remove('tab__menu_btn_active')
        e.currentTarget.classList.add('tab__menu_btn_active')
        if (index === 0 )partnersReferal.classList.remove('referral__hide')
        else partnersReferal.classList.add('referral__hide')
        partnersTabBox.forEach((tabBox, ind) => {
            if (index === ind) tabBox.classList.add('tab__box_active')
            else tabBox.classList.remove('tab__box_active')
        })
    })
})

partnersLine.forEach((line, i) => {
    line.addEventListener('click', (e) => {
        e.currentTarget.querySelector('img').classList.toggle('investors__window_arrow_active');
        partnersTables.forEach((table, ind) => {
            if (i === ind) table.classList.toggle('investors__window_data_active');
        })
    })
})

// Скопировать "Ваша ссылка"

try{
    copyBtn.addEventListener('click', function() {
        textLinc.select()
        textLinc.setSelectionRange(0, 99999)
        document.execCommand('copy')
        successReferral.classList.add('copy-confirmation-referral_active')
        setTimeout(function(){
            successReferral.classList.remove('copy-confirmation-referral_active')
        }, 1000)
    
        console.log('copy successful')
    })
    copyDeposits.addEventListener('click', function() {
        textDeposits.select()
        textDeposits.setSelectionRange(0, 99999)
        document.execCommand('copy')
        success.classList.add('copy-confirmation_active')
        setTimeout(function(){
            success.classList.remove('copy-confirmation_active')
        }, 1000)
    
        console.log('copy successful')
    })
} catch{}

try{
    textLinc.addEventListener('click', function() {
        textLinc.select()
        textLinc.setSelectionRange(0, 99999)
        document.execCommand('copy')
        successReferral.classList.add('copy-confirmation-referral_active')
        setTimeout(function(){
            successReferral.classList.remove('copy-confirmation-referral_active')
        }, 1000)
    
        console.log('copy successful')
    })
    copyDeposits.addEventListener('click', function() {
        copyDeposits.select()
        copyDeposits.setSelectionRange(0, 99999)
        document.execCommand('copy')
        success.classList.add('copy-confirmation-referral_active')
        setTimeout(function(){
            success.classList.remove('copy-confirmation-referral_active')
        }, 1000)
    
        console.log('copy successful')
    })

} catch{}

// Скопировать "Лендинг 1"

try{
    // Скопировать "Лендинг 2"
    
    copyCredit.addEventListener('click', function() {
        textCredit.select()
        textCredit.setSelectionRange(0, 99999)
        document.execCommand('copy')
        successTwo.classList.add('copy-confirmation-two_active')
        setTimeout(function(){
            successTwo.classList.remove('copy-confirmation-two_active')
        }, 1000)
        
        console.log('copy successful')
    })
    
    // Скопировать "Лендинг 3"
    
    copyCrypt.addEventListener('click', function() {
        textCrypt.select()
        textCrypt.setSelectionRange(0, 99999)
        document.execCommand('copy')
        successThree.classList.add('copy-confirmation-three_active')
        setTimeout(function(){
            successThree.classList.remove('copy-confirmation-three_active')
        }, 1000)
        
        console.log('copy successful')
    })
    
    btnOne.addEventListener('click', function() {
        offerOne.select()
        offerOne.setSelectionRange(0, 99999)
        document.execCommand('copy')
        successFour.classList.add('copy-confirmation-offer_active')
        setTimeout(function(){
            successFour.classList.remove('copy-confirmation-offer_active')
        }, 1000)
    
        console.log('copy successful')
    })
    
    btnTwo.addEventListener('click', function() {
        offerTwo.select()
        offerTwo.setSelectionRange(0, 99999)
        document.execCommand('copy')
        successFive.classList.add('copy-confirmation-offer-two_active')
        setTimeout(function(){
            successFive.classList.remove('copy-confirmation-offer-two_active')
        }, 1000)
        
        console.log('copy successful')
    })
    
    btnThree.addEventListener('click', function() {
        offerThree.select()
        offerThree.setSelectionRange(0, 99999)
        document.execCommand('copy')
        successSix.classList.add('copy-confirmation-offer-three_active')
        setTimeout(function(){
            successSix.classList.remove('copy-confirmation-offer-three_active')
        }, 1000)
        
        console.log('copy successful')
    })
} catch{}

try{
    const copyBtns = document.querySelectorAll('.copy-info');
const copyContent = document.querySelectorAll('.copy-block');

copyBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        copyContent[index].classList.add('copy-confirmation-referral_active')
        setTimeout(function(){
            copyContent[index].classList.remove('copy-confirmation-referral_active')
        }, 1000)
    })
})
} catch{}