// react & nextJS
import {useState} from "react";

// libraries

// redux
import { useSelector , useDispatch } from "react-redux";
import {updateUsersList, showEditUserForm} from "../../../../store/slices/usersSlice";

// components
import Form from "../addUserForm/form";

const EditUserForm = () => {

    const [editingUser , setEditingUser] = useState({});

    const dispatch = useDispatch();
    const editingUserId = useSelector(state => state.users.editingUser.id)

    const formHandler = async (e) => {
        e.preventDefault()
        await fetch(`https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_users/${editingUserId}` , {
            method : "PUT",
            headers: {
                "content-type": "application/JSON"
            },
            body : JSON.stringify(editingUser)
        })
        let usersList = await fetch("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_users")
        dispatch(updateUsersList(usersList.data.data))
        dispatch(showEditUserForm())
    }

    const inputHandler = (key,value) => {
        setEditingUser({...editingUser , [key] : value});
    }

    const hideForm = (e) => {
        if (e.target.classList.contains("fixedShadow")) {
            dispatch(showEditUserForm())
        }
    }

    return (
        <div className={"fixedShadow highZIndex"} onClick={e => hideForm(e)}>
            <div className={"addUserForm glassDiv radius-8"}>
                <header className={"textCenter fs-14 bold-7 mt-8 mb-4"}>
                    فرم ویرایش مشخصات کاربر
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

export default EditUserForm;

