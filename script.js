// alert("fuck you world");
$(document).ready(function () {
    $('#toggle-btn').click(function () {
        $('.nav-links').slideToggle(3000);
    })
})

$(window).scroll(function () {
    let scroll = $(window).scrollTop();

    if (scroll >= 70) {
        $('#nav').addClass("new-nav");
    }  else {
        $('#nav').removeClass("new-nav");
    }
})

$('nav a').click(function(link){
    link.preventDefault();

    let target = $(this).attr('href');

    $('html, body').animate({
        scrollTop : $(target).offset().top},"slow");
})