$(document).ready(function() {

  // Slider-main-section

  $('.center').slick({
      centerMode: true,
      dots: true,
      autoplay: true,
      slidesToShow: 1,
  });
  
  // Sponsors-section

  $('.multiple-items').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,    
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,    
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,      
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,     
      }
    }
]
  });

  // Adaptive menu 

    (function($){
      $(function() {
        $('.menu__icon').on('click', function() {
          $(this).closest('.logo-bottom').toggleClass('menu_state_open');
          $(".btn-help").toggleClass('help-open');
        });
      });
    })(jQuery);

});
