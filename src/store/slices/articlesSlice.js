import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    articlesList : [],
    showingAddArticleForm : false,
};

const articlesSlice = createSlice({
    name : "articles",
    initialState,
    reducers : {
        getArticlesList : ( state, {payload} ) => {
          return {
              ...state,
              articlesList : [...payload],
          }
        },
        addArticle : ( state , { payload } ) => {
            return {
                ...state,
                showingAddArticleForm : false,
                articlesList: [
                    ...state.articlesList,
                    payload
                ]
            }
        },
        showAddArticleForm : ( state, {payload} ) => {
            return {
                ...state,
                showingAddArticleForm: !state.showingAddArticleForm,
            }
        }
    }
})

export const { getArticlesList, addArticle, showAddArticleForm } = articlesSlice.actions;

export default articlesSlice.reducer;