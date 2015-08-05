
var colorCardinal = "rgb(153, 51, 51)"


$(document).ready(function() {

    $("#button_toggle_colors").click(function() {
        $(".box").each(function(){
            if($(this).css("background-color") === colorCardinal)
                $(this).css("background-color", "white");
            else
                $(this).css("background-color", colorCardinal);
        });
    });

    $("#button_toggle_roundedges").click(function() {
    /* Étape 3*/
        $(".box").each(function(){
            if(! $(this).hasClass("round-edge"))
                $(this).addClass("round-edge");
            else
                $(this).removeClass("round-edge");
        });
    });

    $("#button_add_box").click(function() {
          var id = $(".box").length;
          var str = "<div id='box'"+ id +"' class='box outlined'></div>"
          $(".boxes").append(str);
    });
});
