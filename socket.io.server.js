var express = require('express');
var app = express();
var http = require('http').server(app);
var server = require('http').createServer(app);
var fs = require('file-system');
var io = require('socket.io')(server);

//debug설정
var debug = require('debug')('socket.io');

//web server 생성
app.get('/', function(req, res) {
    fs.readFile('HTMLPage.html', function(err, data){
        res.writeHead(200, { 'Content-Type':'text/html' });
        res.end(data);
    });
});

server.listen(52273, function() {
    console.log('server running at http://127.0.0.1:52273');
});

// var server = http.createServer(function(req, res) {
//     //html 파일을 읽는다.
//     fs.readFile('HTMLPage.html', function(err, data){
//         res.writeHead(200, { 'Content-Type':'text/html' });
//         res.end(data);
//     });
// }).listen(52273, function(){
//     console.log('server running at http://127.0.0.1:52273');
// });

//소켓 서버를 생성 및 실행
//connection 이벤트를 연결시킨다. connection 이벤트는 클라가 웹 소켓 서버에 접속할때 발생한다.
// var io = socketio.listen(server);
// io.sockets.on
io.on('connection', function (socket) {
    console.log('connection is succeed');
});