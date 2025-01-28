const ChatMessage = ({ name, message }) => {
    return (
        <div className="flex">
            <div className="flex gap-2 my-2 p-2 shadow-lg">
                <img src="https://static.vecteezy.com/system/resources/previews/007/407/996/non_2x/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg"
                    alt="userIcon"
                    className="h-6"
                />

                <h1 className="font-bold">{name}</h1>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default ChatMessage; 