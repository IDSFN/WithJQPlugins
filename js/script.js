// 
// Slider addon
// 
// // the big slider
$(".sliders").slick({
   adaptiveHeight: true,
   autoplay: true,
   autoplaySpeed: 1000,
   dots: true,
   mobileFirst: true,
   swipeToSlide: true,
   fade: true,
   arrows: false
});

// the facs slider aka team slider
var faces = $(".teamFaces").slick({
   autoplay: true,
   autoplaySpeed: 500,
   mobileFirst: true,
   swipeToSlide: true,
   arrows: false
});



function facesInCarousel(num) {
   faces.slick("slickSetOption", "slidesToShow", num, true);
}

function setFacesCrousel() {
   if (window.matchMedia("(min-width: 1020px)").matches)
      facesInCarousel(3);
   else if (window.matchMedia("(min-width: 720px)").matches)
      facesInCarousel(2);
   else {
      facesInCarousel(1);
      $("header").unstick();
      $(".testo").unstick();
   }
};

// set how many faces will appear and listen for window resize
setFacesCrousel();
$(window).resize(function() {
   setFacesCrousel();
});

// 
// Sticky addon
// 
$("header").sticky({topSpacing: 0});
$(".testo").sticky({
   topSpacing: $("header").innerHeight()
});

$(".testo").on("sticky-start", function() {
   $(this).html("like i said we create art, Check our <strong>portfolio</strong> to blow your mind!");
});

$(".testo").on("sticky-end", function() {
   $(this).html("like i said we create art");
});

// 
// Animsation
// 
$(".animsition").animsition({
   inClass: 'fade-in-up',
   outClass: 'fade-out-up',
   inDuration: 1500,
   outDuration: 800,
   linkElement: '.animsition-link',
       loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url;}
});