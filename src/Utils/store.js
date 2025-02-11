import { configureStore } from "@reduxjs/toolkit"
import menuSlice from "./menuSlice"
import chatSlice from "./chatSlice"
import cachedSlice from "./cachedSlice"

const store = configureStore({
    reducer: {
        menu: menuSlice,
        chat: chatSlice,
        cached: cachedSlice,


    }
})

export default store