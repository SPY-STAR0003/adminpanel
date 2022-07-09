import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/usersSlice";
import articles from "./slices/articlesSlice";
import auth from "./slices/authSlice";

export const store = configureStore({
    reducer : {
        articles,
        users,
        auth
    }
})