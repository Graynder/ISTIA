(function($){

    var socket = io.connect('http://localhost:8080');
    var me;

    $('#loginform').submit(function(event){
        event.preventDefault();

        socket.emit('login', {
            username  : $('#username').val(),
            mail    : $('#mail').val()
        });
    })

    socket.on('newusr', function(user) {
        $('#listusers').append('<li id=' +user.id +'>'+ user.username + '</li>'); //on modifie le code de la liste en ajoutant un id pour la suppression
    });

    socket.on('logged',function(){
        $('#login').fadeOut();
        $('#form').fadeIn();
        $('#message').focus(); //met le focus pour la saisie du message
      });

    $('#form').submit(function(event) {
        event.preventDefault();
        socket.emit('newmsg', {message: $('#message').val()});
        $('#message').val(''); //pour éviter le flood...
        $('#message').focus(); //pour remettre le focus
    });

    socket.on('newmsg', function(message,mail){
        if(me === mail){
            var msgtpl = $('#msgtpl').html();

            $('#messages').append('<div class="Area"><div class="R"><a><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEyVlaWx0_FK_sz86j-CnUC_pfEqw_Xq_xZUm5CMIyEI_-X2hRUpx1BHL"/><div class="tooltip"><p><strong>{{user.username}}</strong></p></div></a></div><div class="text L textL"><p>{{message}}</p><br/><span class="date">{{h}}:{{m}}</span></div></div>' + Mustache.render(msgtpl,message) + '</div>');
        }
        else {
            var msgtpl = $('#msgtpl').html();


            $('#messages').append('<div class="Area"><div class="L"><a><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEyVlaWx0_FK_sz86j-CnUC_pfEqw_Xq_xZUm5CMIyEI_-X2hRUpx1BHL"/><div class="tooltip"><p><strong>{{user.username}}</strong></p></div></a></div><div class="text R textR"><p>{{message}}</p><br/><span class="date">{{h}}:{{m}}</span></div></div>' + Mustache.render(msgtpl,message) + '</div>');
        }

    });

})(jQuery);
