
import { useDispatch } from "react-redux";
import {useState} from "react";
import axios from "axios";
import Form from "./form";
import {addArticle, showAddArticleForm} from "../../../../store/slices/articlesSlice";

const AddArticleForm = () => {
    const [article , setArticle] = useState({})

    const dispatch = useDispatch()

    const formHandler = async (e) => {
        e.preventDefault()
        await axios.post("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_articles" , article);
        dispatch(addArticle(article))
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


export default AddArticleForm;