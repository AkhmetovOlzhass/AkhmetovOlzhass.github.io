const observerLeft = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
      // если элемент появился
      if (entry.isIntersecting) {
        // добавить ему CSS-класс
        entry.target.classList.add('animate__bounceInLeft');
        entry.target.style.opacity = 1;
      }
    });
});

const observerRight = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
      // если элемент появился
      if (entry.isIntersecting) {
        // добавить ему CSS-класс
        entry.target.classList.add('animate__bounceInRight');
        entry.target.style.opacity = 1;
      }
    });
});

observerLeft.observe(document.querySelectorAll('.security__wrap')[0]);
observerRight.observe(document.querySelectorAll('.security__wrap')[1]);
  