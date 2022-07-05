import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    articlesList : [],
    showingAddArticleForm : false,
    showingEditArticleForm : false,
    editingArticle : {}
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
        },
        deleteArticle : ( state, {payload}) => {
            let newArticlesList = state.articlesList.filter(article => article.clientId !== payload);
            return {
                ...state,
                articlesList : [...newArticlesList]
            }
        },
        showEditArticleForm : (state , {payload}) => {
            return {
                ...state,
                showingEditArticleForm: !state.showingEditArticleForm,
                editingArticle: payload
            }
        },
    }
})

export const { getArticlesList, addArticle, showAddArticleForm, deleteArticle, showEditArticleForm} = articlesSlice.actions;

export default articlesSlice.reducer;