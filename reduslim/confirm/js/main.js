$(document).ready(function () {
    $('.more').click(function () {
        if ($(this).parent().find('.feed__more').hasClass('active')) {
            $(this).parent().find('.feed__more').removeClass('active');
            $(this).html('... lire la suite');
        } else {
            $(this).parent().find('.feed__more').addClass('active');
            $(this).html('... cacher');
        }



    });

});