$(document).ready(function() {

    $("#button_change").click(function(){
        //on recupere la valeur
        var color = $("#input_color").val();
        //on change la couleur et le text
        $(".cow_color").css("color", color);
        $(".cow_color").text(color);

    });
});
