import { EColor, Size } from "@defines/css"
import { useChat, getChatUser } from "./useChat";
import { Input } from "@components/common/input/input";

interface ChatCssProps {
    width?: Size,
    height?: Size,
    background?: EColor,
}

export function Chat(props: ChatCssProps) {
    const {
        width = "200px",
        height = "200px",
        background = EColor.WHITE,
    } = props;

    // 원래 이 훅은 컴포넌트 말고 페이지에서 써야함!! 테스트용이여서 여기에다가 놓은거.
    const {join, leave} = useChat(getChatUser());

    return (
        <>
            <div className="chat-wrap">
                <div className="chat-head">
                    <div className="title">
                        채팅방
                    </div>
                    <div className="numberOfPeople">
                        xx명
                    </div>
                </div>
                <div className="chat-body">
                    <div className="chat-content">

                    </div>
                    <Input 
                        onButtonClick={() => {
                            join();
                        }}
                        buttonChildren={"입장!"}
                    />
                    <Input 
                        onButtonClick={() => {
                            leave();
                        }}
                        buttonChildren={"퇴장!"}
                    />
                </div>
            </div>
            <style jsx>
                {`
                    .chat-wrap {
                        width: ${width};
                        height: ${height};
                        background: ${background};
                    }
                `}
            </style>
        </>
    )
}