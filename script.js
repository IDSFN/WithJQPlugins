/*========================================================
=            Migrate a canvas into the header            =
========================================================*/

// Check if the minimum width of the browser is at least 800px
if (window.matchMedia('only screen and (min-width: 800px)').matches) {
   // Initialize the canvas
   function initCanvas() {
      ctx.canvas.width = $('header').innerWidth();
      ctx.canvas.height = $('header').innerHeight();
      ctx.beginPath();
      ctx.lineWidth = 0.02;
   }

   var mouseIn;
   var canvasPalette = ["#c0dfd9", "#e9ece5", "#fff"];
   var ctx = document.getElementsByTagName('canvas')[0].getContext('2d');
   initCanvas();
   // Draw into canvas
   $('canvas')
      .mousemove(function(e) {
         mouseIn = true;
         if (mouseIn) {
            ctx.strokeStyle = canvasPalette[Math.round(Math.random() * 3)];
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
         }
      })
      .mouseleave(function() {
         mouseIn = false;
      });

   // resize the canvas to the new header dimensions every time the browser get resized
   $(window).resize(function() {
      initCanvas();
   });
}


/*==================================================
=            fancy shit to the header               =
==================================================*/
var left = $('.prev');
var right = $('.next');
var down = $('.circleDown');
var desktopWidth = window.matchMedia('only screen and (min-width: 512px)').matches;

function whereAmi() {
   return $('header').children('div').filter(function(index, el) {
      return $(this).css('display') !== 'none'
   });
}

right.click(function() {
   var pos = whereAmi();
   var weDesktop = window.matchMedia('only screen and (min-width: 512px)').matches;

   if (!pos.hasClass('last') && weDesktop) {
      pos.css('display', 'none');
      pos.next().css('display', 'flex');
      if (pos.next().hasClass('last')) {
         $(window).on({
            scroll: function() {
               left.click();
               left.click();
               $(this).off()
            }
         });
      }
   }
});

left.click(function() {
   var pos = whereAmi();
   var weDesktop = window.matchMedia('only screen and (min-width: 512px)').matches;

   if (!pos.hasClass('first') && weDesktop) {
      pos.css('display', 'none');
      pos.prev().css('display', 'flex');
   }
});


$(window).resize(function() {
   desktopWidth = window.matchMedia('only screen and (min-width: 512px)').matches;

   if (!desktopWidth) $('header').off();
});

if (desktopWidth) {
   $('header').on({
      // Show and hide nex and prev and down
      mousemove: function(event) {
         var mouseX = (event.pageX / screen.width) * 100;
         var mouseY = (event.pageY / screen.height) * 100;

         if (mouseX <= 15)
            left.css('opacity', 0.4);

         else if (mouseX >= 80)
            right.css('opacity', 0.4);

         else if (mouseY >= 70)
            down.css('opacity', 0.8);

         else {
            left.css('opacity', 0);
            right.css('opacity', 0);
            down.css('opacity', 0);
         }
      },
      // Add a flash effect to the header
      click: function() {
         (new Audio('sounds/capture.wav')).play();
         $('.flash').fadeIn(30).fadeOut(100);
      }
   });
}

// Show and hide the header nav menu
$('.nav-btn').click(function () {
   var $this = $(this);
   var $menu = $this.next();

   if ($this.hasClass('fa-plus')) {
      $this.removeClass('fa-plus').addClass('fa-minus');
      $menu.fadeIn(500);
   }
   else {
      $this.removeClass('fa-minus').addClass('fa-plus');
      $menu.fadeOut(300);
   }
});


/*=================================
=            container            =
=================================*/
