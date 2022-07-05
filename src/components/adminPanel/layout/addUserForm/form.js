import Input from "../formsLayout/input";
import Select from "../formsLayout/select";
import {showAddUserForm, showEditUserForm} from "../../../../store/slices/usersSlice";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import propTypes from 'prop-types';

const Form = ({formHandler, inputHandler, isEditForm}) => {
    let editingUserInState = useSelector(state => state.users.editingUser) || "";

    const dispatch = useDispatch();

    return (
        <form onSubmit={e => formHandler(e)}>
            <div className={"container p-4"}>
                <div className={"row mt-1 mb-6"}>
                    <Input
                        inputName={"name"}
                        inputSize={"w-5"}
                        labelValue={" نام و نام خانوادگی :"}
                        onchange={inputHandler}
                        defaultValue={editingUserInState.name}
                    />
                    <Input
                        inputName={"year"}
                        inputSize={"w-3 mr-10"}
                        labelValue={" سال تولد :"}
                        onchange={inputHandler}
                        defaultValue={editingUserInState.year}
                    />
                </div>
                <div className={"row mt-1 mb-6"}>
                    <Input
                        inputName={"code"}
                        inputSize={"w-5"}
                        labelValue={" کد ملی :"}
                        onchange={inputHandler}
                        defaultValue={editingUserInState.code}
                    />
                    <Select
                        selectName={"gender"}
                        selectSize={"w-3 mr-10"}
                        labelValue={" جنسیت :"}
                        onchange={inputHandler}
                        options={[
                            {key : 1, value : "مرد"},
                            {key : 2, value : "زن"},
                        ]}
                    />
                </div>
                <div className={"row mt-1 mb-6"}>
                    <Input
                        inputName={"email"}
                        inputSize={"w-5"}
                        labelValue={" ایمیل :"}
                        onchange={inputHandler}
                        defaultValue={editingUserInState.email}
                    />
                    <Select
                        selectName={"role"}
                        selectSize={"w-3 mr-10"}
                        labelValue={"وظیفه :"}
                        onchange={inputHandler}
                        options={[
                            {key : 1, value : "سازنده"},
                            {key : 2, value : "مدیر"},
                            {key : 3, value : "مشاور"},
                            {key : 4, value : "عضو ساده"},
                        ]}
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
                onClick={() =>isEditForm?dispatch(showEditUserForm()):dispatch(showAddUserForm())}
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