// Настройки плагина owlcarousel

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        nav: true,
        loop: true,
        dots: false,
        navText: [],
        responsive: {
            1024: {
                items: 3
            },
            768: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    });
});

// Открывание формы поиска по клику на input

$('.form-control').click(function(){
    $('.search').show( 'slow', function() {
    
    });
});

// Скрывание формы поиска при прокрутке окна

$(window).scroll(function(){
    $('.search').hide('slow', function(){
        
    });
});

(function ($) {
    $(function () {
        $('.icon').on('click', function (){
            $(this).closest('.menu').toggleClass('menu-open');
        });
    });
})(jQuery);