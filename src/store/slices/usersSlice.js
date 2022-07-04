
import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    usersList : [],
    showAddUserForm : false,
    showEditUserForm : false,
    editingUser : {}
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
        updateUsersList : ( state , { payload } ) => {
            return {
                ...state,
                usersList : [...payload]
            }
        },
        deleteUser : ( state , { payload } ) => {
            let usersList = state.usersList.filter( user => user.id !== payload )
            return {
                ...state,
                usersList
            }
        },
        showAddUserForm : state => {
          return {
              ...state,
              showAddUserForm: !state.showAddUserForm,
          }
        },
        showEditUserForm : (state , {payload}) => {
            return {
                ...state,
                showEditUserForm : !state.showEditUserForm,
                editingUser : payload
            }
        }
    }
})

export const { getUsers, deleteUser, showAddUserForm, showEditUserForm, updateUsersList } = usersSlice.actions

export default usersSlice.reducer;