$(document).ready(function() {

  /* Etape 1: Votre code JS doit être ici */
  $(function(){
      // TODO: ajouter des options
      $("#date").datepicker();
  });

  /* Etape 2: Votre code JS doit être ici */
  $(function () {
      $("#selectable").selectable();
  })

  /* Etape 3: Votre code JS doit être ici */
  $(function () {
      $("#sortable").sortable();
      $("#sortable").disableSelection();
  })
  /* Etape 4: Votre code JS doit être ici */
  $(document).tooltip({
      items: "[title], [class]",
      content: function() {
         var element = $(this);
         if (element.is("[title]")){
            return element.attr("title");
         }
         if (element.is("[class]")){
            if (element.attr("class") == "ui-state-default") {
               var text = element.text();
               return "<div class='color_swatch' style='background:" + text + "'></div>"
            }
         }
      }
  });
});
