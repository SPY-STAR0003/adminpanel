// React
import {useEffect, useState} from "react";

// libraries
import axios from "axios";

// components
import Form from "../addArticleForm/form";

// redux
import {addArticle, showAddArticleForm} from "../../../../store/slices/articlesSlice";
import { useDispatch } from "react-redux";

const EditArticleForm = () => {
    const [editedArticle , setEditedArticle] = useState({})

    const dispatch = useDispatch()

    const formHandler = async (e) => {
        e.preventDefault()
        await axios.post("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_articles" , editedArticle);
        dispatch(addArticle(editedArticle))
    }

    const inputHandler = (key,value) => {
        setEditedArticle({...editedArticle,clientId : Date.now(), [key] : value});
    }

    const hideForm = (e) => {
        if (e.target.classList.contains("fixedShadow")) {
            dispatch(showAddArticleForm())
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