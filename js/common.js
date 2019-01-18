$(document).ready(function() {

/*************** Adaptive menu ***************/
    
    $('.menu__icon').on('click', function() {
        $(this).closest('.header__bottom').toggleClass('menu_state_open');
    });
     

    ///// Drop-down menu 

    $('.menu__drop-down').on('click', function() {
        $('.submenu').toggleClass('submenu--active');
        $('.menu__drop-down').toggleClass('menu__drop-down--active');
    });

/************* Fixed menu *************/

    if ($(window).width() > 992)   {
        $(window).scroll(function () {
            var scrolled = $(window).scrollTop();
            if (scrolled >= 1) {
                $('header').addClass('header__fixed');                      
            }
            else {
                if (scrolled < 180) {
                    $('header').removeClass('header__fixed');                                   
                }
            }
        });
    }

/************* Home-page/////Slider-main-section *************/

    $('.center').slick({
        centerMode: true,
        dots: true,
        autoplay: true,
        slidesToShow: 1,
    });
  
/************** Home-page/////Sponsors-section **************/

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

/************* Review-page///Drop-down *************/

    $('.review__button').on('click', function() {
        $(this).closest('.review__item').toggleClass('open');
    });

/*************** Donation-page///Drop-down ***************/

    $('.payment-main').on('click', function() {
        $('.payment-hidden').toggleClass('payment-display');
    });
          
});
