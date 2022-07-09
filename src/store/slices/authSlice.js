import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
    name : "auth",
    initialState : {
        hasAccess : false,
    },
    reducers : {
        changeAccess : (state) => { hasAccess : !state.hasAccess}
    }
})

export const { changeAccess } = auth.actions;

export default auth.reducer;