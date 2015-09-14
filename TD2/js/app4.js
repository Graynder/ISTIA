$(document).ready(function() {

  /* Etape 1: Code JS */
  var canvas = document.getElementById('myCanvas')
  var ctx = canvas.getContext('2d');

  $("#button_draw_triangle").click(function() {
    //   clearCanvas();
      translate();
  });

  $("#button_draw_rotated_triangle").click(function() {
    // clearCanvas();
    rotate();
  });

  $("#button_clear_canvas").click(function() {
    /* Etape 4 : code JS */
    clearCanvas();
  });

  function draw() {

      ctx.fillStyle = "#FF0000";
      ctx.lineWidth = 3;

      ctx.beginPath();
      ctx.moveTo(0,-90);
      ctx.lineTo(90,90);
      ctx.lineTo(-90,90);
      ctx.lineTo(0,-90);
      ctx.closePath();

      ctx.stroke();
      ctx.fill();

  }

    function translate() {

        ctx.save();
        ctx.translate(canvas.width/2,canvas.height/2);
        draw()
        ctx.restore();
    }

  function rotate() {
      ctx.save();

      ctx.translate(canvas.width/2,canvas.height/2);
      //faut faire la rotation mais ca marche pas T_T
      ctx.rotate(40*Math.PI/180);
      draw();
      ctx.restore();
  }

  function clearCanvas() {
      ctx.clearRect(0,0, canvas.width, canvas.height);
  }

});
