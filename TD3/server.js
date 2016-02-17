var http = require('http');
var md5 = require('MD5');

httpServer = http.createServer(function(req, res){
	console.log('Un utilisateur a affiche la page');
});

httpServer.listen(1337);

var io = require('socket.io').listen(httpServer);
var users = {};
var messages = [];
var history = 2;

io.sockets.on('connection', function(socket){

	var me = false;
	console.log('Nouveau utilisateur');

	for(var k in users){
		socket.emit('newusr', users[k]);
	}
	for(var k in messages){
		socket.emit('newmsg', messages[k]);
	}

	/**
	* On a reçu un message
	**/
	socket.on('newmsg', function(message){
		// Si le message est vide on ne fait rien
		if(message == ''){
			return false;
		}
		message.user = me;
		date = new Date();
		message.h = date.getHours();
		message.m = date.getMinutes();
		messages.push(message);
		if(messages.length > history){
			messages.shift();
		}
		io.sockets.emit('newmsg', message);
	});

	/**
	* Je me connecte
	**/
	socket.on('login', function(user){
		me = user;
		console.log(user.mail);
		me.id = md5(user.mail);	// On génère une clef unique par utilisateur (basé sur le mail)
		me.mail = 'null'; 		// On ne renvoit pas l'email publiquement
		me.avatar = 'https://gravatar.com/avatar/' + md5(user.mail) + '?s=50';
		socket.emit('logged');
		users[me.id] = me;
		io.sockets.emit('newusr', me);
	});

	/**
	* Je quitte le tchat
	**/
	socket.on('disconnect', function(){
		if(!me){
			return false;
		}
		delete users[me.id];
		io.sockets.emit('disusr', me);
	})

});
