$(document).ready(function(){
 


    $(window).on('scroll', function(){
        var scroll = $(window).scrollTop()
      if(scroll>=50){
       $(".sticky").addClass("stickyadd")
      }else{
        $(".sticky").removeClass("stickyadd")
      }
    });

     var typed = new Typed('#element', {
      strings: ['<i>John Doe', 'A Developer', 'A Designer', 'A Bussinessman'],
      smartBackspace: true,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      startDelay:1000
    });


   

    var waypoint = new Waypoint({
  element: document.getElementById('exp-id'),
  handler: function() {
    var p = document.querySelectorAll('.progress-bar');
    p[0].setAttribute("style", "width:100%;transition:1s all" )
    p[1].setAttribute("style", "width:95%;transition:1.5s all" )
    p[2].setAttribute("style", "width:85%;transition:1.7s all" )
    p[3].setAttribute("style", "width:99%;transition:2s all" )
    p[4].setAttribute("style", "width:85%;transition:2.3s all" )
    p[5].setAttribute("style", "width:95%;transition:2.5s all" )

  },
  offset:'90%'
})
 
// Owl Carousel

 $('.owl-carousel').owlCarousel({
    loop: true,              
    margin: 20,              
    nav: true,   
    autoplay:true,
    autoplayTimeout:2000,
    items:1,            
    dots: true,              
    
});


// Filterizr

  var filterizd = $('.filter-container').filterizr({
    animationDuration: .5,
  });



 console.log(typeof jQuery);


})

// Yeh code document.ready ke bahar likho
$(window).on('load', function() {
  setTimeout(function() {
    $('.preloader').addClass('complete');
    console.log("Preloader complete class added ✅");
  }, 800);
});
