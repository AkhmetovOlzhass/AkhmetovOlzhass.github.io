var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}
function test(){
    $('.main__block-2').fadeIn('fast');
}
function test2(){
    $('.main__block-1').fadeIn('fast');
}
$('.btn-go').on('click', function() {
    $('.main__block-1').fadeOut('fast');
    setTimeout(test, 208);
});
$('.btn-back').on('click', function() {
    $('.main__block-2').fadeOut('fast');
    setTimeout(test2, 208);
});