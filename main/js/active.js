// Custom JS code Start 
(function ($) {
    "use strict";

    // Variables
    var html_body = $('html, body');
    var $window = $(window);
    var $offset = 500;
    var $fh = $('.main_header')    
    var backToTop = $('.backToTop');
    var menu =  $('.menu');

    // Menu Show hide
    $('.navIcon').on('click', function () {
        menu.toggleClass('menuToggle');
    });

    // Mobile menu fix
    $('.menu ul li a').on('click', function(){
        menu.toggleClass('menuToggle');
    });

    // price part
    $(".priceBox").on('mouseenter', function () {
        $('.priceBox').removeClass('active');
        $(this).addClass('active');
    });

    //Scrollspy
    $('#nav').onePageNav({
        currentClass: 'active',
        changeHash: false
    });

    // Sticky Menu
    $window.on('scroll', function () {
        var y = $(this).scrollTop();
        if ( y > .5) {
            $fh.addClass('sticky');
        } else {
            $fh.removeClass('sticky');
        }
        if ( y > $offset) {
            backToTop.fadeIn(1000);
        } else {
            backToTop.fadeOut(1000);
        }
    });

    // Preloader
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });        
    });

    // Back To Top
    backToTop.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 600)
    });

    // Venobox Slider
    $('.venobox').venobox();

    // Counter Up
    $('.counterOne h4').counterUp({
        delay: 2,
        time: 1000
    });

    // Screenshot Slider js
    $('.scrnshotSlide').slick({
        dots: false,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        autoPlay: true,
        arrows: true,
        nextArrow: $('.scrnArrowRight'),
        prevArrow: $('.scrnArrowLeft'),
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    // Testimonial Slider js
    $('.testiSliding').slick({
        speed: 500,
        autoPlay: true,
        appendDots: $('.testiSliderControl'),  
        dots: true,
        dotsClass: 'sliderDots',
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }},
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }},
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    // Testimonial Slider js
    $('.priceSlider').slick({
        speed: 500,
        autoPlay: true,
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendDots: $('.priceSliderControl'),        
        dots: true,
        dotsClass: 'sliderDots',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    // Testimonial Slider js
    $('.teamSlider').slick({
        speed: 500,
        autoPlay: true,
        appendDots: $('.sliderControl'),        
        dots: true,
        dotsClass: 'sliderDots',
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
})(jQuery);
// Custom JS code End