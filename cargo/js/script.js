var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var img = document.getElementById("main__block-img2");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
};
function test(){
    $('.form-first').fadeIn('fast');
    $('.main__block-img2').fadeIn('fast');
    img.style.display = 'block';
}
function test2(){
    $('.main__block-img1').fadeIn('fast');
    $('.form-second').fadeIn('fast');
    img.style.display = 'none';
}
$('.btn-go').on('click', function() {
    $('.main__block-img1').fadeOut('fast');
    $('.form-second').fadeOut('fast');
    setTimeout(test, 208);
});
$('.btn-back').on('click', function() {
    $('.main__block-img2').fadeOut('fast');
    $('.form-first').fadeOut('fast');
    setTimeout(test2, 208);
});
$("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});
$(document).ready(function(){
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $('form').find("input").val("");
            $('form').trigger('reset');
        });
        return false;
    });
});