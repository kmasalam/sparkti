(function () {

    // Whole-script strict mode syntax
    'use strict';

    var zinimart_testimonial_carousel = $('.zinimart_testimonial_carousel');
    if (zinimart_testimonial_carousel.length > 0) {
        zinimart_testimonial_carousel.slick({
            dots: true,
            dotsClass: 'zinimart_dots',
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

    $('.zinimart_banner_carousel').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        prevArrow: '<div class="slick-prev"><i class="las la-angle-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="las la-angle-right"></i></div>',
        cssEase: 'linear'
      });

    // $('.zinimart_best_deal__content_carousel').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: true,
    //     dotsClass: 'zinimart_dots',
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.zinimart_best_deal_carousel_images'
        
    // });
    // $('.zinimart_best_deal_carousel_images').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.zinimart_best_deal__content_carousel',
    //     dots: false,
    //     vertical: true,
    //     arrows: false,
    //     centerMode: false,
    //     focusOnSelect: true,
    //     responsive: [
    //         {
    //           breakpoint: 1024,
    //           settings: {
    //           }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //             }
    //           },
    //         {
    //           breakpoint: 600,
    //           settings: {
    //             vertical: false,
    //           }
    //         },
    //         {
    //           breakpoint: 480,
    //           settings: {
    //             vertical: false,
    //           },
    //         },
    //           {
    //             breakpoint: 300,
    //             settings: {
    //               vertical: false,
    //             }
    //         }
    //         // You can unslick at a given breakpoint now by adding:
    //         // settings: "unslick"
    //         // instead of a settings object
    //       ]
    // });

    //  Product carousel 2
    $('.zinimart_best_deal_carousel_area').each(function(){
        var zinimart_best_deal__content_carousel = $(this).find('.zinimart_best_deal__content_carousel');
        var zinimart_best_deal_carousel_images = $(this).find('.zinimart_best_deal_carousel_images');

        zinimart_best_deal__content_carousel.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            dotsClass: 'zinimart_dots',
            arrows: false,
            fade: true,
            asNavFor: zinimart_best_deal_carousel_images
            
        });
        zinimart_best_deal_carousel_images.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: zinimart_best_deal__content_carousel,
            dots: false,
            vertical: true,
            arrows: false,
            centerMode: false,
            focusOnSelect: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                  }
                },
                {
                    breakpoint: 768,
                    settings: {
                    }
                  },
                {
                  breakpoint: 600,
                  settings: {
                    vertical: false,
                    dots: false
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    vertical: false,
                  },
                },
                  {
                    breakpoint: 300,
                    settings: {
                      vertical: false,
                      dots: false
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
        });

    });

   
    
    //  Product carousel 2

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
    var zinimart_brand_carousel = $('.zinimart_brand_carousel');
    if (zinimart_brand_carousel.length > 0) {
        zinimart_brand_carousel.slick({
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
    $(window).on('load', function () {

        // isotop initialize
        var grid = $('.pl_portfolio_item_grid');
        if (grid.length > 0) {
            grid.each(function (index, el) {
                $('.pl_portfolio_item_grid').isotope({
                    itemSelector: '.pl_portfolio_item'
                });

                $('.pl_portfolio__filter li').on('click', function () {
                    $(this).addClass('active').siblings().removeClass('active');
                    var filterValue = $(this).attr('data-filter');
                    $('.pl_portfolio_item_grid').isotope({
                        filter: filterValue
                    });
                });

            });
        }

    });
    $(document).ready(function () {

        // zoom lense
        //initiate the plugin and pass the id of the div containing gallery images
// $("#zoom_03").elevateZoom({
// 	gallery:'gallery_01',
//     cursor: 'pointer',
//     zoomType				: "inner",
//   easing : true,
// 	galleryActiveClass: 'active',
// 	imageCrossfade: true,
// });

// //pass the images to Fancybox
// $("#zoom_03").bind("click", function(e) {
// 	var ez = $('#zoom_03').data('elevateZoom');
// 	$.fancybox(ez.getGalleryList());
// 	return false;
// });



        $('.zinimart_offcanvas_btn').on('click', function (e) {
            e.preventDefault();
            //<i class="las la-times"></i>
            $(this).toggleClass('activated');
            $(this).children('.las').toggleClass('la-bars la-times');
            $(document).find('.zinimart_offcanvas_navigation').toggleClass('show');
        });


        if (jQuery('.kounty_countdown').length) {
            jQuery('.kounty_countdown').kounty();
        }
        $('.zinimart_set_color').each(function () {
            let checkcolor = $(this).attr('data-bg-color');
            if (checkcolor) {
                $(this).css({
                    backgroundColor: '#' + checkcolor
                })
            }
        });

        var allParent = $('.product_cart_range_options');
        allParent.each(function () {
            var totalItem = 70,
                buyItem = 40,
                itemcalc = (100 * buyItem) / totalItem,
                zinimart_sell_btn = $(this).find('.zinimart_sell_btn'),
                rangebar = $(this).find('.weekly_deals_product_stock_range__bar'),
                remaining = $(this).find('.remaining_item'),
                buy_item = $(this).find('.sold_item');
            upgradeRange(itemcalc);
            remainingItem(totalItem, buyItem);
            buyitemFunc(buyItem);
            zinimart_sell_btn.on('click', function (e) {
                e.preventDefault();
                buyItem += 1
                var itemcalc = (100 * buyItem) / totalItem;
                if (itemcalc <= 100) {
                    upgradeRange(itemcalc);
                    remainingItem(totalItem, buyItem);
                    buyitemFunc(buyItem);
                }

            })
            function upgradeRange(itemcalc) {
                rangebar.css({
                    width: itemcalc + '%'
                })
            }
            function buyitemFunc(buyItem) {
                buy_item.text(buyItem);
            }
            function remainingItem(totalItem, buyItem) {
                let remain = totalItem - buyItem;
                remaining.text(remain);
            }
        })

        // 
        $('.zinimart_modal').on('click',function(e){
            console.log(e);
            e.preventDefault();
            return false;
        });

        //
        var zinimart_popular_products__carousel = $('.zinimart_popular_products__carousel');
        if (zinimart_popular_products__carousel.length > 0) {
            zinimart_popular_products__carousel.slick({
                dots: true,
                dotsClass: 'zinimart_dots',
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

        // Modal
        $('.bd-example-modal-lg').modal('show');

        // sticky Search
        $(window).on('scroll',function(){
            //zinimart_navigation__content_center
            if($(this).scrollTop() > 120){
                $('.zinimart_navigation').addClass('sticky_nav');
            } else {
                $('.zinimart_navigation').removeClass('sticky_nav');
            }
        });


        // Zinimart Awesome Select

        jQuery.fn.hasAttr = function (name) {
            return this.attr(name) !== undefined && this.attr(name) !== '';
        };
        function ZinimartSelect(){
            var borbibi_awesome_select, selectlabel,multiselect;
            borbibi_awesome_select = $('.zinimart_awesome_select');
            if (borbibi_awesome_select.length > 0) {
                borbibi_awesome_select.each(function () {
                    if (jQuery(this).hasAttr('data-select-label')) {
                        selectlabel = jQuery(this).attr('data-select-label');
                    }
                    if (jQuery(this).hasAttr('data-multiple')) {
                        multiselect = jQuery(this).attr('data-multiple');
                    }
                    $(this).select2({
                        placeholder: selectlabel ? selectlabel : '',
                        multiple: multiselect ? true : false,
                        allowClear: true
                    }).on("select2:select", function (e) {
                        var selected_element = $(e.currentTarget);
                        var select_val = selected_element.val();
                        console.log(select_val);
                    });;
                    
                });
            }
        }
        ZinimartSelect();
        
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $('.zinimart_product_shopping_cart_options__quantity').each(function () {
        var PlusBtn = $(this).find('.shopping_cart_options_plus'),
            MinusBtn = $(this).find('.shopping_cart_options_minus'),
            Display = $(this).find('.shopping_cart_options_display'),
            DisplayVal = parseInt(Display.text());
        PlusBtn.on('click', function (e) {
            e.preventDefault();
            if (DisplayVal >= 0) {
                DisplayVal += 1
                Display.text(DisplayVal);
            }
        });
        MinusBtn.on('click', function (e) {
            e.preventDefault();
            if (DisplayVal > 0) {
                DisplayVal -= 1
                Display.text(DisplayVal);
            }
        });
    });
    // zinimart single cart
    $('.zinimart_single_cart').each(function () {
        var CancelBtn = $(this).find('.zinimart_single_cart_cancel');
        CancelBtn.on('click', function (e) {
            e.preventDefault();
            $(this).parents('.zinimart_single_cart').hide();
        });
    });



    // Offcanvas Nav
    var offcanvasNav, subMenu, hasDropdown;
    offcanvasNav = $('.zinimart_offcanvas_menu');

    offcanvasNav.find('li').children('ul').addClass('sub-menu');
    $('.zinimart_offcanvas_menu li').each(function () {
        if ($(this).children('ul').length > 0) {
            $(this).addClass('has-dropdown');
        }
    });
    $('.zinimart_offcanvas_menu .has-dropdown,.zinimart_offcanvas_menu .has-dropdown > a').on('click', function (e) {
        e = window.event || e;
        e.stopPropagation();
        // $(this).children('.sub-menu').addClass('test');
        $(this).children('.sub-menu').stop().slideToggle();
        $(this).siblings('li').find('.sub-menu').slideUp();
    });
    $('.zinimart_offcanvas_btn').on('click', function (e) {
        e.preventDefault();
        $('.zinimart_offcanvas_menu .has-dropdown').find('.sub-menu').slideUp();
    });

    $('.zinimart_scroll_top').on('click', function (e) {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });


    // Window Load Function
    $(window).on('scroll', function () {
        var documentHeight = $(document).height();
        var scrollableHeight = documentHeight / 1.70;
        var Content = $('.zinimart_scroll_top');
        if (Content.length > 0) {
            $('.zinimart_scroll_top').hide();
            if ($(this).scrollTop() > scrollableHeight) {
                $('.zinimart_scroll_top').show();
            } else {
                $('.zinimart_scroll_top').hide()
            }
        }
    });

    $('.zinimart_modal .close').on('click',function(e){
        e.preventDefault();
        var spinner = $('.zinimart_spinner');
        var CloneParent = $(this).parents('.zinimart_modal');
        var CloneParentWidth = $(this).parents('.zinimart_modal').width();
        if(CloneParent){
            var CloneParent = CloneParent.clone().offset({
                top: CloneParent.offset().top,
                left: CloneParent.offset().left + CloneParentWidth/2
                
            })
                .css({
                'opacity': '0.5',
                    'position': 'absolute',
                    'height': '300px',
                    'width': '300px',
                    'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                'top': spinner.offset().top + 0,
                    'left': spinner.offset().left + 0,
                    'width': 40,
                    'height': 40
            }, 1000);
            
            setTimeout(function () {
                spinner.css({
                    visibility: 'visible',
                    opacity: 1
                })
                $('.zinimart_spinner').tooltip('hide');
            }, 700);

            CloneParent.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
        }
    });


    $('.zinimart_offcanvas_navigation ').on('click', function () {
        jQuery('.zinimart_offcanvas_navigation').removeClass('show');
        $(document).find('.sub-menu').slideUp();
        $(document).find('.zinimart_offcanvas_btn ').removeClass('activated');
        $(document).find('.zinimart_offcanvas_btn ').children('.las').toggleClass('la-times la-bars');
    });

    $('.set_bg').each(function () {
        var thesrc = jQuery(this).attr('data-bg');
        if (thesrc) {
            jQuery(this).css("background-image", "url(" + thesrc + ")");
            jQuery(this).css("background-position", "center");
            jQuery(this).css("background-size", "cover");
            jQuery(this).css("background-repeat", "no-repeat");
            jQuery(this).removeAttr('data-bg');
        }
    });

    

})()