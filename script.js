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