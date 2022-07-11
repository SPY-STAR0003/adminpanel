// react & nextJS
import {memo, useState} from "react";

// libraries

// redux
import { useDispatch } from "react-redux";
import {addArticle, showAddArticleForm} from "../../../../store/slices/articlesSlice";

// designPattern
import observable from "../../../observable";

// components
import Form from "./form";

const AddArticleForm = () => {
    const [article , setArticle] = useState({})

    const dispatch = useDispatch()

    const formHandler = async (e) => {
        e.preventDefault()
        await fetch("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_articles" , {
            method : "POST",
            headers: {
                "Content-Type": "application/JSON",
                "charset": "utf-8"
            },
            body : JSON.stringify(article)
        })
        dispatch(addArticle(article));
        observable.notify(` مقاله به لیست مقالات اضافه شد . ` , "success")
    }

    const inputHandler = (key,value) => {
        setArticle({...article,clientId : Date.now(), [key] : value});
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
                    فرم ایجاد مقاله جدید
                </header>
                <Form
                    formHandler={formHandler}
                    inputHandler={inputHandler}
                    isEditForm={false}
                />
            </div>
        </div>
    )
}


export default memo(AddArticleForm);