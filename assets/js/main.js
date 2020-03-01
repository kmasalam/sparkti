(function () {

    // Whole-script strict mode syntax
    'use strict';

    var TestimonialCarousel = $('.pl_testimonial__carousel');
    if (TestimonialCarousel.length > 0) {
        TestimonialCarousel.slick({
            dots: true,
            dotsClass: 'pl_dots',
            infinite: true,
            speed: 500,
            arrows: false,
            fade: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            cssEase: 'linear'
        });
    }
    var ClientsCarousel = $('.pl_clients_carousel');
    if (ClientsCarousel.length > 0) {
        ClientsCarousel.slick({
            dots: false,
            dotsClass: 'pl_dots',
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 5,
            cssEase: 'linear',
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                }
              ]
        });
    }

    var TestimonialCarousel = $('.pl_testimonial__carousel');
    if (TestimonialCarousel.length > 0) {
        TestimonialCarousel.slick({
            dots: true,
            dotsClass: 'pl_dots',
            infinite: true,
            speed: 500,
            arrows: false,
            fade: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            cssEase: 'linear'
        });
    }
    //Brand carousel
    var sparkti_brand_carousel = $('.sparkti_brand_carousel');
    if (sparkti_brand_carousel.length > 0) {
      sparkti_brand_carousel.slick({
            dots: false,
            dotsClass: 'pl_dots',
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 6,
            cssEase: 'linear',
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                }
              ]
        });
    }

    //
    var sparkti_popular_products__carousel = $('.sparkti_popular_products__carousel');
    if (sparkti_popular_products__carousel.length > 0) {
        sparkti_popular_products__carousel.slick({
            dots: true,
            dotsClass: 'sparkti_dots',
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 2000,
            slidesToShow: 5,
            cssEase: 'linear',
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                }
              ]
        });
    }
    // 
    $(window).on('load', function() { 

        // isotop initialize
        var grid = $('.pl_portfolio_item_grid');
        if (grid.length > 0) {
            grid.each(function(index, el) {
                $('.pl_portfolio_item_grid').isotope({
                    itemSelector: '.pl_portfolio_item'

                });

                $('.pl_portfolio__filter li').on('click', function() {
                    $(this).addClass('active').siblings().removeClass('active');
                    var filterValue = $(this).attr('data-filter');
                    $('.pl_portfolio_item_grid').isotope({
                        filter: filterValue
                    });
                });

            });
        }

    });

})()