import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/usersSlice";
import articles from "./slices/articlesSlice";

export const store = configureStore({
    reducer : {
        articles,
        users
    }
})