import { useEffect, useState } from "react"
import { io, Socket } from 'socket.io-client';
import { IUseChat, IChatProps, IChatUser } from './chatDefine';


export function getChatUser(): IChatUser {
    // 로컬이든, 세션이든, 쿠키든에서 user에 관련된 정보를 가져와서 반환해주는 함수
    // 임시로 병재이름, 1234번호 리턴
    return {
        userName: "병재",
        userId: 1234,
    }
}

export function useChat({userName, userId}: IChatUser) {

    const socket: Socket = io('http://localhost:8080');

    const [userInfo, setUserInfo] = useState<IChatUser>({
        userName: "",
        userId: 0,
    })

    const [ chatInfo, setChatInfo ] = useState<IChatProps>({
        curNumberOfPeople: 0,
        curChat: [""]
    })

    socket.on('updateUser', function(userList) {
        console.log(userList);
    })
    socket.on('addMessage', function({userName, userId, message}){
        console.log(message);
        let newCurChat = [...chatInfo.curChat];
        newCurChat.push(message);
        setChatInfo({...chatInfo, curChat: newCurChat})
    })

    useEffect(() => {
        let newUserInfo = { ...userInfo };
        newUserInfo = {userName, userId};
        setUserInfo(newUserInfo);
    },[])

    const join = () => {
        console.log('join');
        socket.connect();
        socket.emit('addUser', {
            userName,
            userId
        })
    }

    const leave = () => {
        socket.emit('leave', {
            userName,
            userId
        })
    }

    const sendMessage = (message?: string) => {
        socket.emit('sendMessage', {
            userName,
            userId,
            message
        })
    }

    // 후 sendchat 이런 메소드들도 추가하기...

    return {
        join,
        leave,
        sendMessage,
        chatInfo,
    }
}