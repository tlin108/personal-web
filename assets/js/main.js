jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });

    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('nav').addClass('fixed');
            $('.main-wrapper section').each(function(i) {
                if ($(this).position().top <= windscroll) {
                    $('nav li.active').removeClass('active');
                    $('nav li').eq(i).addClass('active');
                }
            });

        } else {

            $('nav').removeClass('fixed');
            $('nav a.active').removeClass('active');
            $('nav a:first').addClass('active');
        }

    }).scroll()

    $('nav a').on('click', function() {

        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 70;

        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);

        return false;

    })
});