//모듈 추출
const socketIo = require('socket.io');
const express = require('express');
const http = require('http');

//객체를 선언
const app = express();
const server = http.createServer(app);
const io = socketIo.listen(server);

//미들웨어를 설정
app.use(express.static(`${__dirname}/public`));

//웹 소켓을 설정
io.sockets.on('connection', (socket) => {
    //socket객체가 가지는 메서드,
    // 위의 이벤트 핸들러 일때 발생하거나
    // 클라에서 window.~ 에서 io.connect 발생할때!

    //1초 마다 주고받도록 구성한다.
    setInterval(() => {
    socket.emit('ABCD', {
        message: 'FROM Server'
    });
    }, 1000);

    socket.on('ABCD', (data) => {
        console.log(data);
    });
    
});

server.listen(52273, () => {
    console.log('server running at http://localhost:52273');
});

