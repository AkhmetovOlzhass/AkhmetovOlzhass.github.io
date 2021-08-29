$('.objects__wrapper').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev slick-prev-2 gray"><svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5823 0.833496L0.208374 13.2075L12.5823 25.5814L14.6459 23.5193L4.33254 13.2075L14.6459 2.89558L12.5823 0.833496Z" fill="#FD9800"/></svg></button>',
  nextArrow: '<button type="button" class="slick-next slick-next-2"><svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.34479 24.874L14.7188 12.5001L2.34479 0.126106L0.281251 2.18819L10.5946 12.5001L0.281251 22.8119L2.34479 24.874Z" fill="#FD9800"/></svg></button>'
});
var filtered = false;
$('.finished').on('click', function(){
  filtered = false;
  $('.objects__wrapper').slick('slickUnfilter');
  if (filtered === false) {
    $('.objects__wrapper').slick('slickFilter','.finished-elem');
    filtered = true;
  } else {
    filtered = true;
  }
  if ($('.socials').hasClass('active') || $('.all').hasClass('active')) {
    $('.socials').removeClass('active');
    $('.all').removeClass('active');
    $('.finished').addClass('active');
  }
  if ($('.slick-next').hasClass('slick-disabled')) {
    $('.slick-next').addClass('gray');
  } else {
    $('.slick-next').removeClass('gray');
  }
  if ($('.slick-prev').hasClass('slick-disabled')) {
    $('.slick-prev').addClass('gray');
  } else {
    $('.slick-prev').removeClass('gray');
  }
});
$('.all').on('click', function(){
  filtered = false;
  $('.objects__wrapper').slick('slickUnfilter');
  if (filtered === false) {
    $('.objects__wrapper').slick('slickFilter','.objects__wrapper-block');
    filtered = true;
  } else {
    filtered = true;
  }
  if ($('.socials').hasClass('active') || $('.finished').hasClass('active')) {
    $('.socials').removeClass('active');
    $('.finished').removeClass('active');
    $('.all').addClass('active');
  }
  if ($('.slick-next').hasClass('slick-disabled')) {
    $('.slick-next').addClass('gray');
  } else {
    $('.slick-next').removeClass('gray');
  }
  if ($('.slick-prev').hasClass('slick-disabled')) {
    $('.slick-prev').addClass('gray');
  } else {
    $('.slick-prev').removeClass('gray');
  }
});
$('.socials').on('click', function(){
  filtered = false;
  $('.objects__wrapper').slick('slickUnfilter');
  if (filtered === false) {
    $('.objects__wrapper').slick('slickFilter','.social-elem');
    filtered = true;
  } else {
    filtered = true;
  }
  if ($('.all').hasClass('active') || $('.finished').hasClass('active')) {
    $('.all').removeClass('active');
    $('.finished').removeClass('active');
    $('.socials').addClass('active');
  }
  if ($('.slick-next').hasClass('slick-disabled')) {
    $('.slick-next').addClass('gray');
  } else {
    $('.slick-next').removeClass('gray');
  }
  if ($('.slick-prev').hasClass('slick-disabled')) {
    $('.slick-prev').addClass('gray');
  } else {
    $('.slick-prev').removeClass('gray');
  }
});
$('.objects__wrapper').on('afterChange', function() {
  if ($('.slick-next').hasClass('slick-disabled')) {
    $('.slick-next').addClass('gray');
  } else {
    $('.slick-next').removeClass('gray');
  }
  if ($('.slick-prev').hasClass('slick-disabled')) {
    $('.slick-prev').addClass('gray');
  } else {
    $('.slick-prev').removeClass('gray');
  }
});