// react & nextJS
import propTypes from 'prop-types';

// libraries
import { FaCheckCircle } from "react-icons/fa";

// redux
import { useDispatch, useSelector } from "react-redux";
import {showAddArticleForm, showEditArticleForm} from "../../../../store/slices/articlesSlice";

// components
import Textarea from "../../layout/formsLayout/textarea";
import Input from "../../layout/formsLayout/input";
import Select from "../../layout/formsLayout/select";

const Form = ({formHandler, inputHandler, isEditForm}) => {
    const editingArticle = useSelector(state => state.articles.editingArticle)

    const dispatch = useDispatch();

    return (
        <form onSubmit={e => formHandler(e)}>
            <div className={"container p-4"}>
                <div className={"row mt-1 mb-6"}>
                    <Input
                        inputName={"subject"}
                        inputSize={"w-5"}
                        labelValue={" عنوان مقاله :"}
                        onchange={inputHandler}
                        defaultValue={editingArticle.subject}
                    />
                    <Input
                        inputName={"time"}
                        inputSize={"w-3 mr-10"}
                        labelValue={" زمان تقریبی موردنیاز برای مطالعه مقاله :"}
                        onchange={inputHandler}
                        defaultValue={editingArticle.time}
                    />
                </div>
                <div className={"row mt-1 mb-6"}>
                    <Input
                        inputName={"hashtags"}
                        inputSize={"w-5"}
                        labelValue={" هشتگ های مقاله :"}
                        onchange={inputHandler}
                        defaultValue={editingArticle.hashtags}
                    />
                    <Select
                        selectName={"sort"}
                        selectSize={"w-3 mr-10"}
                        labelValue={" نوع مقاله :"}
                        onchange={inputHandler}
                        options={[
                            {key : 1, value : "آموزشی"},
                            {key : 2, value : "کاربردی"},
                            {key : 3, value : "کسب و کار"},
                            {key : 4, value : "بروزرسانی"},
                            {key : 5, value : "معرفی ابزار"},
                            {key : 6, value : "متفرقه"},
                        ]}
                    />
                </div>
                <div className={"row mt-1 mb-6"}>
                    <Textarea
                        textareaName={"content"}
                        textareaWidth={"w-9"}
                        labelValue={" متن مقاله :"}
                        onchange={inputHandler}
                        defaultValue={editingArticle.content}
                        textareaRows={10}
                    />
                </div>
            </div>
            <button
                type={"submit"}
                className={"pointer"}
            >
                <FaCheckCircle />
            </button>
            <span
                className={"closeBtn fs-30 pointer"}
                onClick={() =>isEditForm?dispatch(showEditArticleForm({})):dispatch(showAddArticleForm())}
            >
                +
            </span>
        </form>
    )
}

Form.propTypes = {
    formHandler : propTypes.func,
    inputHandler : propTypes.func,
    isEditForm : propTypes.bool
}

export default Form;