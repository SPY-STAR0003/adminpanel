
import {createSlice} from "@reduxjs/toolkit";

let initialState = [];

const usersSlice = createSlice({
    name : "users",
    initialState,
    reducers : {
        getUsers : ( state , { payload } ) => {
            console.log(payload)
        }
    }
})

export const { getUsers } = usersSlice.actions

export default usersSlice.reducer;