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
                    payload,
                    ...state.articlesList,
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
            let newArticlesList = state.articlesList.filter(article => article.id !== payload);
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
        editArticle : ( state, {payload}) => {

            let newArticlesList = state.articlesList.filter(item => item.id !== payload.id);
            newArticlesList.push(payload)

            return {
                ...state,
                articlesList : [...newArticlesList],
                showingEditArticleForm: !state.showingEditArticleForm,
                editingArticle: ""
            }
        }
    }
})

export const { getArticlesList, addArticle, showAddArticleForm, deleteArticle, showEditArticleForm, editArticle} = articlesSlice.actions;

export default articlesSlice.reducer;