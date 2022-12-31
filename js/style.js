(function($) {
    'use strict';

    // Banner Slider
    $('.banner-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
    });
    $('.js-tilt').tilt({
        scale: 1.2
    })



    
    $('#dark-blue').click(function(){
      $(':root').css("--mainColor1", "#001a57");
  });

  $('#red').click(function(){
      $(':root').css("--mainColor1", "#d9262f");
  });

  $('#green').click(function(){
      $(':root').css("--mainColor1", "#459f2d");
  });

  $('#sky').click(function(){
      $(':root').css("--mainColor1", "#4bc1f1");
  });



  
  if ($(this).scrollTop() > 100) {
    $('.navbar-light').addClass('menu-shrink');
} else {
    $('.navbar-light').removeClass('menu-shrink');
}


})($);
