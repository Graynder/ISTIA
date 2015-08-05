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

});
