$(".pre_toform").click(function () {
  $("html, body").animate({
      scrollTop: $(".order__form").offset().top
  }, 700);
  return false;
});