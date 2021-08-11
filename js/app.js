new WOW().init();
$('.news .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('.banner_brand .owl-carousel').owlCarousel({
    loop: false,
    margin: 15,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 5
        },
        600: {
            items: 5
        },
        1000: {
            items: 5
        }
    }
})
$(window).on('scroll', function () {
    //console.log($(this).scrollTop());
    if ($(this).scrollTop() > 10) {
        $('.header_bottom').addClass('h-fixed animated fadeInDown');
    } else {
        $('.header_bottom').removeClass('h-fixed animated fadeInDown');
    }
});
/*menu_mobile*/
var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
(function ($) {
    var delay = 300;
    $('#mobile-nav>ul>.nav-item').each(function () {
        $(this).css('transition-delay', delay + 'ms');
        delay = delay + 100;
        $(".label-sub").addClass('arrowed');
    });
    $('#btn-toggle-sidebar').click(function () {
        closeOut();
    });
    $('#mobile-nav .arrowed').click(function () {
        $(this).toggleClass('selected').siblings().removeClass("selected");
        if ($(this).next('ul.sub-nav').is(':visible')) {
            $(this).next('ul.sub-nav').slideUp('slow');
        } else {
            $(this).next('ul.sub-nav').slideDown('slow');
        }
    });
}(jQuery));
function closeOut() {
    jQuery('body').toggleClass('scroll-jam').append("<div class='sidebar_overlay' onclick='closeSidebar()'></div>");
    jQuery('#sidebar').toggleClass('nav-slide');
    jQuery('#mobile-nav>ul>.nav-item').toggleClass('item-slide').removeClass('selected');
    jQuery('#mobile-nav>ul .sub-nav').each(function () {
        jQuery(this).hide();
    });
    jQuery(".label-sub").removeClass("selected");
}
function closeSidebar() {
    closeOut();
    jQuery(".sidebar_overlay").remove();
}