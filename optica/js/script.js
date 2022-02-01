$(function(){
    jQuery.fn.dropdown = function (options) {

        var settings = $.extend({
            arrow: '',
            prevent: true,
            onChange: ''
        }, options);
    
        return this.each(function () {
            var $this = $(this);
    
            if ($this.find('.selected').length > 0) {
                $this.find('span:eq(0)')
                    .html($this.find('.selected').text() + settings.arrow)
                    .end()
                    .find('input').val($this.find('.selected a').data('value'))
                    .end()
                    .find('.selected').closest('li').hide();
            }
    
            $this.on('click', '.overflow', function (e) {
                e.preventDefault();
    
                if (!$(this).closest('.dropdown').hasClass('dropdown-open')) {
                    $.when($('.dropdown').each(function () {
                        $(this).removeClass('dropdown-open').find('ul:eq(0)').slideUp();
                    })).then(function () {
                        $this.addClass('dropdown-open').find('ul:eq(0)').slideDown(function () {
                            var h = parseInt($(this).outerHeight(true, true)),
                                top = parseInt($(this).offset()['top']) - parseInt($(document).scrollTop()),
                                wh = parseInt($(window).height());
    
                            if (top + h > wh) {
                                $(this).css({
                                    'max-height': wh - top - 10
                                });
                            } else {
                                $(this).css({
                                    'max-height': 'auto'
                                });
                            }
                        });
                    });
                } else {
                    $this.removeClass('dropdown-open').find('ul:eq(0)').slideUp();
                }
            });
    
            $this.find('ul').eq(0).on('click', 'a', function (e) {
                e.preventDefault();
    
                if (!$(this).hasClass('disabled')) {
                    if (settings.prevent === false) {
                        window.location.href = $(this).attr('href');
                    } else {
                        $(this).closest('ul').find('.selected').removeClass('selected').show().end().end().closest('li').addClass('selected').hide();
                        $this.find('span:eq(0)').html($(this).text() + settings.arrow).end().find('input').val($(this).data('value'));
    
                        $this.removeClass('dropdown-open').find('ul:eq(0)').slideUp();
                        if ($.isFunction(settings.onChange)) settings.onChange($(this));
                    }
                }
            });
        });
    };

    let $shadow = $('.shadow') 

    function openElement(btn, element, includeShadow) {
        btn.on('click', function (e) {
            e.preventDefault();

            element.addClass('active');

            if(includeShadow === true) {
                $shadow.removeClass('hidden')  ;
                element.addClass('close_element');
            }
        })  
    }

    function closeAll() {
        $shadow.addClass('hidden');
        $('.close_element').removeClass('active');
        $('.close_element').removeClass('close_element');
    }

    $shadow.on('click', closeAll)
    $('.close_btn').on('click', closeAll)

    openElement( $('.open_menu'), $('.mob_menu'), true)

    function menuLinkOpen(links) {
        links.on('click', function (e) {
            if( $(this).next('ul').length !== 0) {
                e.preventDefault()
                $(this).toggleClass('active')
                $(this).next('ul').toggleClass('open_list');
            }
        })
    }

    openElement($('.open-doctor_form'), $('.doctor_form'), true);

    openElement($('.open_search'), $('.serch_from'), true)

    openElement($('.call_me'), $('.call_form'), true);

    menuLinkOpen($('.mob_nav').find('a'));
    menuLinkOpen($('.header_nav > ul > li > a'));

    $('.header_nav > ul > li > ul').addClass('animation');


    $('.form_dropdown').dropdown()

    $('.show_pass').on('click', function(e) {
        e.preventDefault();
        let passInput = $(this).parent('.form_input-wrap').find('input')
        if (passInput.attr('type') === 'password') {
            passInput.attr('type', 'text')
        } else {
            passInput.attr('type', 'password')
        }
    })

    $('.add_wish').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active')
    })
    
    $('.big_slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 4000,
        slidesToShow: 1,
    });

    $('.slim_banner').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 4000,
        slidesToShow: 1,
    });

    $('.product-inner').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        arrows: false,
        mobileFirst: true,
        responsive: [
            {
              breakpoint: 1260,
              settings: {
                arrows: true,
              }
            }
          ]
    });

    $('.services_slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        arrows: false,
        mobileFirst: true,
        responsive: [
            {
              breakpoint: 1260,
              settings: {
                arrows: true,
              }
            }
          ]
    });
    
    if ($(window).width() <= 1205) {
        $('.blog_preview-slider').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            variableWidth: true,
            arrows: false,
            mobileFirst: true,
        });
    }   
})
