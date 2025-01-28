import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addChat: (state, action) => {
            // state.messages.splice(20, 1)
            state.messages.push(action.payload)

        },
        deleteChat: (state) => {
            if (state.messages.length > 25) {
                state.messages.shift()
            }
        }


    }
})
export const { addChat, deleteChat } = chatSlice.actions
export default chatSlice.reducer;