$(document).ready(function () {

    const $mainSlider = $('.slider-for');
    const $thumbSlider = $('.slider-nav');

    const mainCount = $mainSlider.find('.slide-item').length;
    const thumbCount = $thumbSlider.find('.thumb-item').length;


    if (mainCount > 0 && mainCount <= 5 && mainCount === thumbCount) {

        for (let i = 0; i < 2; i++) {
            $mainSlider.children().clone().appendTo($mainSlider);
            $thumbSlider.children().clone().appendTo($thumbSlider);
        }
    }

    $mainSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        fade: true,
        arrows: true,
        prevArrow: $('.custom-prev'),
        nextArrow: $('.custom-next'),
        asNavFor: '.slider-nav',
        infinite: true
    });

    $thumbSlider.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 2,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 4,
                    infinite: false,
                    centerMode: false
                }
            }
        ]
    });

    // full screen просмотр с крестиком закрытия
    if ($.fn.slickLightbox) {
        $mainSlider.slickLightbox({
            itemSelector: '.slide-item a',
            src: 'href'
        });
    }

});