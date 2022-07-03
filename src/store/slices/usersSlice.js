
import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    usersList : [],
    showAddUserForm : false,
};

const usersSlice = createSlice({
    name : "users",
    initialState,
    reducers : {
        getUsers : ( state , { payload } ) => {
            return {
                ...state,
                usersList : [...payload]
            }
        },
        addUser : ( state , { payload } ) => {
            return {
                ...state,
                usersList : [
                    ...state.usersList,
                    payload
                ]
            }
        },
        deleteUser : ( state , { payload } ) => {
            let usersList = state.usersList.filter( user => user.id !== payload )
            return {
                ...state,
                usersList
            }
        },
        showAddUserForm : ( state , { payload } ) => {
          return {
              ...state,
              showAddUserForm: !state.showAddUserForm,
          }
        }
    }
})

export const { getUsers, addUser, deleteUser, showAddUserForm } = usersSlice.actions

export default usersSlice.reducer;