import { createSlice } from "@reduxjs/toolkit";

const cachedSlice = createSlice({
    name: "cached",
    initialState: {},
    reducers: {
        addToCache: (state, action) => {
            state = Object.assign(state, action.payload)
        }
    }
})
export const { addToCache } = cachedSlice.actions
export default cachedSlice.reducer