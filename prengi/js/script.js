$(document).ready(function(){
    $('.main-carousel__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png" alt="#"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.png" alt="#"></button>'
    });
    $('.industry__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/industry_left.png" alt="#"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/industry_right.png" alt="#"></button>'
    });

    //Modal
    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #thanks').fadeOut('slow');
    });
    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type:'POST',
            url: 'mailer/smart.php',
            data: $(this).serialize()
        }).done(function() {
            $(this).find('input').val("");
            $('#consultation').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false
    });

    //smooth scroll
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});
