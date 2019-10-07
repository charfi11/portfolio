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
    if ($(document).scrollTop() > 800) {
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
   $('.carddescfourth').hide();
   $('.carddescthird').hide();
});

$('.secondportimg').mouseover(function(){
    $('.carddescsecond').show('slow');
    $('.carddesc').hide();
    $('.carddescthird').hide();
    $('.carddescfourth').hide();
 });

 $('.thirdportimg').mouseover(function(){
    $('.carddescthird').show('slow');
    $('.carddesc').hide();
    $('.carddescsecond').hide();
    $('.carddescfourth').hide();
 });

 $('.fourthportimg').mouseover(function(){
    $('.carddescfourth').show('slow');
    $('.carddesc').hide();
    $('.carddescsecond').hide();
    $('.carddescthird').hide();
 });

 $('.profil').click(function(){
     $('.othermenu').slideToggle('slow');
     $('.profil').hide();
 })

 $('.othermenu').click(function(){
     $('.profil').show('slow');
     $('.othermenu').hide();
 })