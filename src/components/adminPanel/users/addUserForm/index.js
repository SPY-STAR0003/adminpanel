// react & nextJS
import {useState} from "react";

// libraries

// redux
import { useDispatch } from "react-redux";
import {updateUsersList, showAddUserForm} from "../../../../store/slices/usersSlice";

// components
import Form from "./form";

const AddUserForm = () => {

    const [user , setUser] = useState({})

    const dispatch = useDispatch()

    const formHandler = async (e) => {
        e.preventDefault()
        await fetch("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_users" , {
            method : "POST",
            headers : {
                "Content-Type": "application/JSON"
            },
            body : JSON.stringify(user)
        })
        let resUsersList = await fetch("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_users");
        let usersList = await resUsersList.json();
        // next line make input forms empty
        e.target.reset()
        dispatch(updateUsersList(usersList.data))
        dispatch(showAddUserForm())
    }

    const inputHandler = (key,value) => {
        setUser({...user , [key] : value});
    }

    const hideForm = (e) => {
        if (e.target.classList.contains("fixedShadow")) {
            dispatch(showAddUserForm())
        }
    }

    return (
        <div className={"fixedShadow highZIndex"} onClick={e => hideForm(e)}>
            <div className={"addUserForm glassDiv radius-8"}>
                <header className={"textCenter fs-14 bold-7 mt-8 mb-4"}>
                     فرم افزودن کاربر جدید
                </header>
                <Form formHandler={formHandler}
                      inputHandler={inputHandler}
                      isEditForm={false}
                />
            </div>
        </div>
    )
}


export default AddUserForm;