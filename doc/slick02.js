$(function(){
//-----------------------------------

//메인슬라이드
$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,

});

//제품슬라이드
$('.pr_slider').slick({
    arrows:false,
    autoplay:true,
    slidesToShow: 4,
    dots:true,
});

$('#content01 .btn i.xi-angle-left').on('click', function(){
    $('.pr_slider').slick('slickPrev')
});

$('#content01 .btn i.xi-angle-right').on('click', function(){
    $('.pr_slider').slick('slickNext')
});
//-----------------------------------
})