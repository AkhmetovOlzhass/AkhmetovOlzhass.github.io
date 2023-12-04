
if (window.matchMedia("(min-width: 768px)").matches) {
    const headerBottom = document.querySelector('.header__bottom');
    const headerContainer = document.querySelector('.header-container-blue');
    const headerContainerWidth = headerContainer.scrollWidth;
    window.addEventListener('scroll', function() {
        if(scrollY >= document.querySelector('.header__top').scrollHeight){
            headerBottom.style.position = 'fixed';
            headerBottom.style.top = '0';
            headerContainer.style.maxWidth = '100%';
            headerContainer.style.width = 'auto';
        } else{
            headerBottom.style.position = 'absolute';
            headerBottom.style.top = document.querySelector('.header__top').scrollHeight + 'px';
            headerContainer.style.maxWidth = headerContainerWidth-50 + 'px';
            headerContainer.style.width = '100%';
        }
        
    });
  }

const modalTriggers = document.querySelectorAll('.modal-trigger');
const modalClose = document.querySelector('.modal__close');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

modalTriggers.forEach((el) => {
    el.addEventListener('click', () => {
        modal.classList.add('active');
        overlay.classList.add('active');
        document.querySelector('html').style.overflow = 'hidden';
    })
})

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.querySelector('html').style.overflow = 'auto';
});

overlay.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.querySelector('html').style.overflow = 'auto';
});