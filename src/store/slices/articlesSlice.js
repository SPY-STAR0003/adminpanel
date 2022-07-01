import {createSlice} from "@reduxjs/toolkit";

let initialState = [];

const articlesSlice = createSlice({
    name : "articles",
    initialState,
    reducers : {
        getArticles : ( state , { payload } ) => {
            console.log(payload)
        }
    }
})

export const { getArticles } = articlesSlice.actions;

export default articlesSlice.reducer;