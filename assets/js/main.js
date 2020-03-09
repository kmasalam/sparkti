(function () {

    // Whole-script strict mode syntax
    'use strict';

    var sparkti_testimonial_carousel = $('.sparkti_testimonial_carousel');
    if (sparkti_testimonial_carousel.length > 0) {
        sparkti_testimonial_carousel.slick({
            dots: true,
            dotsClass: 'sparkti_dots',
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

    $('.sparkti_best_deal__content_carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      dotsClass: 'sparkti_dots',
      arrows: false,
      fade: true,
      asNavFor: '.sparkti_best_deal_carousel_images'
    });
    $('.sparkti_best_deal_carousel_images').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.sparkti_best_deal__content_carousel',
      dots: false,
      vertical: true,
      arrows: false,
      centerMode: false,
      focusOnSelect: true
    });

    
    var ClientsCarousel = $('.pl_clients_carousel');
    if (ClientsCarousel.length > 0) {
        ClientsCarousel.slick({
            dots: false,
            dotsClass: 'pl_dots',
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
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
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
    $(document).ready(function(){
        $('.sparkti_offcanvas_btn').on('click',function(e){
            e.preventDefault();
            //<i class="las la-times"></i>
            $(this).children('.las').toggleClass('la-bars la-times')
            $(document).find('.sparkti_offcanvas_navigation').toggleClass('show');
        });


      if (jQuery('.kounty_countdown').length) {
          jQuery('.kounty_countdown').kounty();
      }
      $('.sparkti_set_color').each(function(){
            let checkcolor = $(this).attr('data-bg-color');
            if(checkcolor){
                $(this).css({
                    backgroundColor: '#' + checkcolor
                })
            }
      });
        
        var allParent = $('.product_cart_range_options');
        allParent.each(function(){
        var totalItem = 70,
            buyItem = 40,
            itemcalc = (100 * buyItem) / totalItem,
            sparkti_sell_btn = $(this).find('.sparkti_sell_btn'),
            rangebar = $(this).find('.weekly_deals_product_stock_range__bar'),
            remaining = $(this).find('.remaining_item'),
            buy_item = $(this).find('.sold_item');
        upgradeRange(itemcalc);
        remainingItem(totalItem,buyItem);
        buyitemFunc(buyItem);
        sparkti_sell_btn.on('click',function(e){
            e.preventDefault();
            buyItem +=1
            var itemcalc = (100 * buyItem) / totalItem;
            if(itemcalc<=100){
                upgradeRange(itemcalc);
                remainingItem(totalItem,buyItem);
                buyitemFunc(buyItem);
            }
            
        })
        function upgradeRange(itemcalc){
            rangebar.css({
                width: itemcalc + '%'
            })
        }
        function buyitemFunc(buyItem){
            buy_item.text(buyItem);
        }
        function remainingItem(totalItem,buyItem){
            let remain =  totalItem - buyItem;
            remaining.text(remain);
        }
    })
        });

        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
          })
        

})()