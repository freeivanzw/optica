$(function(){
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

    menuLinkOpen($('.mob_nav').find('a'))
    menuLinkOpen($('.header_nav > ul > li > a'))

})