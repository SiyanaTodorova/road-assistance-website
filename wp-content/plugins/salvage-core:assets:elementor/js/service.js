(function ($) { 

    "use strict";

    var service_js = function ($scope, $) {
        
        
      //  Service Carousel
      if ($('.service-carousel').length) {
        $('.service-carousel').owlCarousel({
            loop: true,
            margin: 50,
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
                768:{
                    items:2
                },
                1199:{
                    items:4
                }
            }
        });    		
      }
    }
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/our_service.default', service_js);
    });
})(window.jQuery);