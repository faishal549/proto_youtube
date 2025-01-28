import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        isMenuVisible: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuVisible = !state.isMenuVisible
        },
        defaultMenu: (state) => {
            state.isMenuVisible = false;
        }
    }
})

export const { toggleMenu, defaultMenu } = menuSlice.actions
export default menuSlice.reducer