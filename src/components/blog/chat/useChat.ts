import { useEffect, useState } from "react"
import { io, Socket } from 'socket.io-client';

export interface IUseChat {
    join: () => void,
    leave: () => void,
}

export interface IChatProps {
    userName: string,
    userId: number,
}

export function getChatUser(): IChatProps {
    // 로컬이든, 세션이든, 쿠키든에서 user에 관련된 정보를 가져와서 반환해주는 함수
    // 임시로 병재이름, 1234번호 리턴
    return {
        userName: "병재",
        userId: 1234,
    }
}

export function useChat({userName, userId}: IChatProps) {

    const socket: Socket = io('http://localhost:8080');

    const [userInfo, setUserInfo] = useState<IChatProps>({
        userName: "",
        userId: 0,
    })

    useEffect(() => {
        let newUserInfo = { ...userInfo };
        newUserInfo = {userName, userId};
        setUserInfo(newUserInfo);
        return () => {
            socket.emit('leave', {
                userName,
                userId
            })
        }
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

    // 후 sendchat 이런 메소드들도 추가하기...

    return {
        join,
        leave
    }
}