var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendfile('index.html');
});

//chat event
io.on('connection', function(socket) {
    console.log('a user connected');

    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });
    //각 소켓은 특별히 disconnect 이벤트를 발생시킨다.
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});

http.listen(3007, function(){
    console.log('listening on *:3007');
});