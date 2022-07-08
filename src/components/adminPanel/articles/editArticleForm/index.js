// React
import {useEffect, useState} from "react";

// libraries

// components
import Form from "../addArticleForm/form";

// redux
import {addArticle, showEditArticleForm, editArticle} from "../../../../store/slices/articlesSlice";
import { useDispatch, useSelector } from "react-redux";

const EditArticleForm = () => {
    const [editedArticle , setEditedArticle] = useState({})

    const dispatch = useDispatch();
    const editingArticle = useSelector(state => state.articles.editingArticle)

    useEffect(() => {
        setEditedArticle(editingArticle)
    }, [])

    const formHandler = async (e) => {
        e.preventDefault()
        await fetch(`https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_articles/${editedArticle.id}` , {
            method : "PUT",
            headers : {
                "Content-Type": "application/JSON"
            },
            body : JSON.stringify(editedArticle)
        });
        dispatch(editArticle(editedArticle))
    }

    const inputHandler = (key,value) => {
        setEditedArticle({...editedArticle,clientId : Date.now(), [key] : value});
    }

    const hideForm = (e) => {
        if (e.target.classList.contains("fixedShadow")) {
            dispatch(showEditArticleForm())
        }
    }

    return (
        <div className={"fixedShadow highZIndex"} onClick={e => hideForm(e)}>
            <div className={"addUserForm glassDiv radius-8"}>
                <header className={"textCenter fs-14 bold-7 mt-8 mb-4"}>
                    فرم ویرایش مقاله
                </header>
                <Form
                    formHandler={formHandler}
                    inputHandler={inputHandler}
                    isEditForm={true}
                />
            </div>
        </div>
    )
}

export default EditArticleForm;