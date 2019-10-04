$(window).scroll(function(){
$('.navbar').show('slow');
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 300) {
        $('.firstexp').show('slow');
    }
    else {
        $('.firstexp').fadeOut('slow');
    }
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 1000) {
        $('.firstport').show('slow');
    }
    else {
        $('.firstport').fadeOut('slow');
    }
});

$(document).ready(function(){
    setTimeout(function(){
    $('.card').show('slow');
    }, 500);
});

$(".exp").click(function() {
    $('html,body').animate({
        scrollTop: $(".clickexp").offset().top},
        'slow');
});

$(".home").click(function() {
    $('html,body').animate({
        scrollTop: $("body").offset().top},
        'slow');
});

$(".port").click(function() {
    $('html,body').animate({
        scrollTop: $(".clickport").offset().top},
        'slow');
});

$('.firstportimg').mouseover(function(){
   $('.carddesc').show('slow');
   $('.carddescsecond').hide();
});

$('.secondportimg').mouseover(function(){
    $('.carddescsecond').show('slow');
    $('.carddesc').hide();
 });