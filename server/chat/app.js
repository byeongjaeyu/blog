// -------------------------------------express서버 선언-------------------------------------
const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:8080",
  },
});
// ------------------------------------socket채팅 이벤트---------------------------------------
const userList = {};

io.sockets.on('connect', function(socket) {
    socket.on('addUser', function(userParam) {
        const { userId, userName } = userParam;
        let isConnected = false;
        for (user in userList) {
            if (user === userId) {
                isConnected = !isConnected;
                break
            }
        };
        userList[userId] = { userName, userId }
        socket.join("room")
        socket.broadcast.to("room").emit('joinUser', userName);
        !isConnected ? socket.emit('updateUser', userList) : socket.emit('alreadyExist');
        console.log(`${(new Date()).toString()} - name: ${userName}(id: ${userId})님이 입장하셨습니다.`)
    })

    socket.on('disconnect', function(userParam) {
        const { userId, userName } = userParam;
        delete userList[userId];
        socket.leave("room");
        socket.broadcast.to("room").emit('leaveUser', userName);
        socket.emit('updateUser', userList);
        console.log(`${(new Date()).toString()} - name: ${userName}(id: ${userId})님이 퇴장하셨습니다.`)
    })
})