
import { useSelector , useDispatch } from "react-redux";
import {updateUsersList, showEditUserForm} from "../../../../store/slices/usersSlice";
import {useState} from "react";
import axios from "axios";
import Form from "../form";

const EditUserForm = () => {
    const [editingUser , setEditingUser] = useState({});

    const dispatch = useDispatch();
    const editingUserId = useSelector(state => state.users.editingUser.id)

    const formHandler = async (e) => {
        e.preventDefault()
        await axios.put(`https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_users/${editingUserId}` , editingUser)
        let usersList = await axios.get("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_users")
        dispatch(updateUsersList(usersList.data.data))
        dispatch(showEditUserForm())
    }

    const inputHandler = (key,value) => {
        setEditingUser({...editingUser , [key] : value});
    }
    const textInput = useRef(null);

    const hideForm = (e) => {
        if (e.target.classList.contains("fixedShadow")) {
            dispatch(showEditUserForm())
        }
    }

    return (
        <div className={"fixedShadow highZIndex"} onClick={e => hideForm(e)}>
            <div className={"addUserForm glassDiv radius-8"}>
                <header className={"textCenter fs-14 bold-7 mt-8 mb-4"}>
                    فرم افزودن کاربر جدید
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

