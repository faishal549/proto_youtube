import { configureStore } from "@reduxjs/toolkit"
import menuSlice from "./menuSlice"
import chatSlice from "./chatSlice"
const store = configureStore({
    reducer: {
        menu: menuSlice,
        chat: chatSlice,

    }
})

export default store