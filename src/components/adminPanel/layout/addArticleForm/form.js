import Input from "../formsLayout/input";
import Select from "../formsLayout/select";
import {showAddUserForm, showEditUserForm} from "../../../../store/slices/usersSlice";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import propTypes from 'prop-types';
import {showAddArticleForm} from "../../../../store/slices/articlesSlice";
import Textarea from "../formsLayout/textarea";

const Form = ({formHandler, inputHandler, isEditForm}) => {
    let editingUserInState = useSelector(state => state.users.editingUser) || "";

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
                        defaultValue={editingUserInState.name}
                    />
                    <Input
                        inputName={"time"}
                        inputSize={"w-3 mr-10"}
                        labelValue={" زمان تقریبی موردنیاز برای مطالعه مقاله :"}
                        onchange={inputHandler}
                        defaultValue={editingUserInState.year}
                    />
                </div>
                <div className={"row mt-1 mb-6"}>
                    <Input
                        inputName={"hashtags"}
                        inputSize={"w-5"}
                        labelValue={" هشتگ های مقاله :"}
                        onchange={inputHandler}
                        defaultValue={editingUserInState.code}
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
                        defaultValue={editingUserInState.code}
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
                onClick={() =>isEditForm?dispatch(showEditUserForm()):dispatch(showAddArticleForm())}
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