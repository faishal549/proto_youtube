import { useState } from "react";
import { useDispatch } from "react-redux";
import { addChat } from "../Utils/chatSlice";

const InputBox = () => {
    const [LiveChat, setLiveChat] = useState("")
    const dispatch = useDispatch()
    const handleSendMessage = (e) => {
        e.preventDefault()
        dispatch(addChat({
            name: "Faishal",
            message: LiveChat
        }))
        setLiveChat("")
    }
    return (
        <>
            <form onSubmit={handleSendMessage}>
                <input type='text'
                    value={LiveChat}
                    onChange={(e) => setLiveChat(e.target.value)}
                    className="w-78 px-2 py-2 ml-1 outline-0 border-0 bg-sky-200 rounded-lg "
                />
                <button type="submit" className="px-2 py-2 ml-1 bg-green-400 rounded-lg text-white font-bold cursor-pointer">send</button>
            </form>
        </>
    )
}

export default InputBox;