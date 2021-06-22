$(function() {
    $('.responsive').slick({
        dots: false,
        speed: 300,
        autoplay: true,
        slidesToShow: 3,
        infinite: false,
        prevArrow: '<span class="slick-prev"><i class="fas fa-arrow-left"></i></span>',
        nextArrow: '<span class="slick-next"><i class="fas fa-arrow-right"></i></span>',
        // arrows: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrow: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrow: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});