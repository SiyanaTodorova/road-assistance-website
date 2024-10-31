(function ($) { 

    "use strict";

    var testimonial = function ($scope, $) {
        
        
        //  Service Carousel
        if ($('.testimonial-carousel2').length) {
            $('.testimonial-carousel2').owlCarousel({
                loop: true,
                margin: 30,
                dots: false,
                nav: true,
                stagePadding: 0,
                singleItem:true,
                smartSpeed: 500,
                autoplay: true,
                autoplayTimeout:6000,
                navText: [ '<span class="flaticon-next left"></span>', '<span class="flaticon-next right"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    992:{
                        items:2
                    },
                    1399:{
                        items:3
                    }
                }
            });    		
        }

    }
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/testimonial.default', testimonial);
    });
})(window.jQuery);