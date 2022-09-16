import { EColor, Size } from "@defines/css"
import { useChat, getChatUser } from "./useChat";
import { Button } from "@components/common/button/button";
import { Input } from "@components/common/input/input";

interface ChatProps {
    width?: Size,
    height?: Size,
    background?: EColor,
}

export function Chat(props: ChatProps) {
    const {
        width = "200px",
        height = "200px",
        background = EColor.WHITE,
    } = props;

    // 원래 이 훅은 컴포넌트 말고 페이지에서 써야함!! 테스트용이여서 여기에다가 놓은거.
    const {join, leave, sendMessage, chatInfo} = useChat(getChatUser());

    return (
        <>
            <div className="chat-wrap">
                <div className="chat-head">
                    <div className="title">
                        채팅방
                    </div>
                    <div className="numberOfPeople">
                        {chatInfo.curNumberOfPeople}명
                    </div>
                </div>
                <div className="chat-body">
                    <div className="chat-content">
                        {chatInfo.curChat.map((chat) => {
                            return (
                                <div key={chat}>{chat}</div>
                            )
                        })}
                    </div>
                    <Button
                        onClick={() => {
                            join();
                        }}
                        children={"입장!"}
                    />
                    <Button 
                        onClick={() => {
                            leave();
                        }}
                        children={"퇴장!"}
                    />
                    <Input
                        buttonWidth="fit-content"
                        buttonChildren="send"
                        onButtonClick={sendMessage}
                    />
                </div>
            </div>
            <style jsx>
                {`
                    .chat-wrap {
                        width: ${width};
                        height: ${height};
                        background: ${EColor.INFO_LIGHT};
                        text-align: center;
                        border-radius: 4px;
                        border: 1px solid ${EColor.BLACK};
                    }
                    .chat-content {
                        height: 120px;
                        background: ${EColor.INFO_MAIN};
                        overflow-y: scroll;
                    }
                `}
            </style>
        </>
    )
}