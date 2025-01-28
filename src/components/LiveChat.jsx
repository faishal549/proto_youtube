
import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../Utils/chatSlice";
import randomNameGenerater, { randomMessageGenerater } from "../Utils/helper";


const LiveChat = () => {

    const dispatch = useDispatch()
    const chatMessage = useSelector((store) => store.chat.messages)
    useEffect(() => {
        const interval = setInterval(() => {
            // Assume Fetching Api Polling
            dispatch(addChat({
                name: randomNameGenerater(),
                message: randomMessageGenerater()
            }))
            dispatch(deleteChat())
        }, 2000)
        // cleanup function 
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <>
            <div className="">

                <div className=" px-4 py-2 my-2 shadow-lg ">

                    {
                        chatMessage.map((chat, index) => {
                            return <ChatMessage key={index} name={chat.name}
                                message={chat.message} />
                        })
                    }

                </div>

            </div>
        </>
    )
}

export default LiveChat;