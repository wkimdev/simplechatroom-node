이 문서는 프로그래밍을 공부하고 개발하는 과정을 쓰는 일지다. 일지는 일기와 같은 뜻이다. 여기에는 날마다 나에게 주어진 과제를 풀고, 
프로그래밍 관련 리서치를 하고, 코딩을 한 것을 기록한다. 왜 이런 생각을 하게 되었는지, 어떻게 하게 되었는지를 기록해서 사고방식을 개발한다.

프로그래밍 공부한 내용을 쓴다.
프로그래밍 개발한 내용을 쓴다.
웹 검색, 리서치한 내용을 쓴다.
왜 이런 생각을 하게 되었는지, 어떻게 하게 되었는지를 기록한다.  
잘 안되는 경우는 왜, 어떻게 잘 안되었을까?  


#### 2018-05-29(30분)
#### 2018-05-30(40분)
#### 2018-05-31(60분)

1. 학습목표 : 웹소켓 개념에 대해 이해해보고 간단한 채팅서비스 만들어보기(node.js) - 간단히 빠르게 만들기위해 사용해본다. 개념이해에 중점을 둔다.(동작법)  

  
2. 웹소켓 : 간단히 말해서, 양방향 통신!, 실시간 양방향 통신을 위한 스펙.  
			- node.js를 사용하는 대표적인 이유는 바로 socket.io 모듈이 있기 때문.  

  
3. 구현하기위해 필요한 것들(개념 및 모듈)  
	a. socket.io 모듈 : 웹 소켓 서버를 쉽게 구현할 수 있게 도와주는 모듈.    
		원래 웹소켓은 HTML5부터 지원하므로 인터넷 익스플로러 8이하에서는 웹 소켓을 사용할 수 없다.  
		하지만 socket.io 모듈은 자체적인 웹 소켓을 별도로 제공하기 때문에 현존하는 웹 브라우저에서 대부분에서 
		웹소켓을 사용할 수 있게 한다.  
	
	b. npm install socket.io@1  
	c. 소켓서버 생성이후(var socketio = require('socket.io');) connection 이벤트를 걸어 소켓서버가   동작하도록 함.  
		- Socket.IO는 두가지로 이루어져 있음.
		> Node.js http서버에 통합되는 서버(기반해서) : socket.io
		> 브라우저에서 실행되는 클라이언트 라이브러리 : socket.io-client  
    
		- socket.io 는 클라이언트를 자동으로 제공해준다!

	d. 경로 핸들러를 위해 sendfile을 사용해 적용(index.html).
	e. nodemon으로 서버 자동 작동시킴.

  
4. 웹 소켓 이벤트  
	- socket.io 모듈의 이벤트 
		* connection : 클라이언트가 연결할때 발생
		* discnnect : 클라이언트가 연결을 해체할 때 발생.
	
	- socket.io 모듈의 메서드(Socket 객체 메서드)
		* on() : 소켓 이벤트를 연결한다.
		* emit() : 소켓 이벤트를 발생시킨다.  

5. 소켓 통신 종류
	- public : 자신을 **포함**한 모든 클라이언트에 데이터를 전달
	- broadcsae : 자신을 **제외**한 모든 클라이언트에 데이터를 전달
	- private : 특정 클라이언트에 데이터를 전달
  
6. ISSUE : SET DUBUG 모드가 작동되지 않는다.(로그가 올라오지 않음.)	  
	a.  npm install file-system --save 가 빠졌었음. fs.readefile을 동작하지 못해서 에러가 났었음.  
	서버를 직접 안띄우고 로그만 보고 있어서 몰랐음..(var fs = require('file-system'); 추가)  
	==> 그러나 안된당..!  
	   	0. npm debug --save를 설치하고 모듈 export를 시켜서 적용해보았다.
	   	1. SET DEBUG 를 윈도우 환경에서 어떻게 하는지 두개정도 문서를 보고 그대로 해봤지만 잘되지 않았다.
	   	2. 뒤로 돌아가서 실제 불러온 socket.io모듈이 정상 작동이 되고 있는지 의문이 들었다.
	   	3. 서버를 띄우고 개발자 도구로 들어가니 에러가 있었다.....
		4. visual studio code내의 터미널이 아닌 윈도우 CMD로 소스를 실행하니 DEBUG가 실행되었다!. 무슨차이일까?...

	b. 아무대로 책대로 되지 않아(10분정도 서칭..) 다른 글들을 참고 했다.
	   	- node socket모듈 적용 키워드로 검색해 적당한 글을 찾아 그대로 실행해보았다.[시작하기: 채팅 애플리케이션](https://okdevtv.com/kr/socket.io-chat-kr.html)
	   	- debug가 나오는건 확인못했지만 socket event가 발생하는 부분까지 순조롭게 확인할 수 있었다.(message까지)

		- 실행하니까 뭔가 pooling을 하고 있다?? 이게 뭐징????

	C. 유투브에 교재 인강이 있어 도움을 받고 진도를 조금 나갔다. 하지만 여전히 HTMLPage.html 화면이 아래 에러와 함께 불러와 지지 않는다...
	> Failed to load resource: the server responded with a status of 404(Not Found)
	> HTMLPage.html:1 Refused to execute script from 'http://127.0.0.1:52273/socket.io.server.js' because its MIME type   > ('text/html') is not executable, and strict MIME type checking is enabled.
	> HTMLPage.html:10 Uncaught ReferenceError: io is not defined at window.onload (HTMLPage.html:10)

	

