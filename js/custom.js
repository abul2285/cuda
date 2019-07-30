$(document).ready(function(){
    $('.counter__number').counterUp({
         delay: 10,
         time: 1000
     });
     $(".navbar__toggler").click(function(){
         $(".navbar__menu").toggleClass("navbar__menu--open",1000)
         $(this).toggleClass("navbar__toggler--open");
     });
     $(".tabBar__links").click(function(){
         var tabs = $(this).attr('data-toggle');
         $('.tabBar__links,.tabBar__content--item').removeClass('active');
         $(this).addClass('active')
         $('#'+tabs).addClass('active');
     });
     $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
     $('.slider-1__box').slick({
         speed: 300,
         autoplay: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         prevArrow: '<i class="fas fa-arrow-circle-left arrow"></i>',
         nextArrow: '<i class="fas fa-arrow-circle-right arrow"></i>',
         responsive: [
             {
             breakpoint: 1024,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 
             }
             },
             {
             breakpoint: 600,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
             },
             {
             breakpoint: 480,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
             }
             // You can unslick at a given breakpoint now by adding:
             // settings: "unslick"
             // instead of a settings object
         ]
     });
     $('.slider-2-box').slick({
         speed: 300,
         autoplay: true,
         slidesToShow: 5,
         slidesToScroll: 4,
         prevArrow: '<i class="fas fa-arrow-circle-left arrow"></i>',
         nextArrow: '<i class="fas fa-arrow-circle-right arrow"></i>',
         responsive: [
             {
             breakpoint: 1024,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 
             }
             },
             {
             breakpoint: 600,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
             },
             {
             breakpoint: 480,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
             }
             // You can unslick at a given breakpoint now by adding:
             // settings: "unslick"
             // instead of a settings object
         ]
     });
     $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "bounceIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 2000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });
 })