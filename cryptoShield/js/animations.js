const observer = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
      // если элемент появился
      if (entry.isIntersecting) {
        // добавить ему CSS-класс
        entry.target.classList.add('animate__fadeInUp');
      }
    });
  });

document.querySelectorAll('.promo__block').forEach(el => {
  observer.observe(el);
})
