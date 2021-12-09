$(function(){
var $prev = $('.svg__prev');
var $next = $('.svg__next');
$('.slider__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $prev,
        nextArrow: $next,
        responsive: [
    {
      breakpoint: 1241,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 1071,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 801,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }

  ]
    });
    $('.header__menu-btn').on('click', function(){
        $('.header__menu').slideToggle();
    });
    $('.header__dropdown').on('click', function(){
        $(this).children('.dropdown__content').toggleClass('active');        
    });
    
});
