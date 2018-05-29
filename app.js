var express = express();
var app = express();
var socketio = require('socket.io');

//web server 생성
var server = http.createServer(function(req, res) {
    //html 파일을 읽는다.
    fs.readFile('HTMLPage.html', function(err, data){
        res.writeHead(200, { 'Content-Type':'text/html' });
        res.end(data);
    });
}).listen(52273, function(){
    console.log('server running at http://127.0.0.1:52273');
});

//소켓 서버를 생성 및 실행
var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
    
});