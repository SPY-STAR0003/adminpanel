
import { useSelector , useDispatch } from "react-redux";
import {addUser, showAddUserForm} from "../../../../store/slices/usersSlice";
import {useState} from "react";
import axios from "axios";
import Form from "../form";

const AddUserForm = () => {
    const [user , setUser] = useState({})

    const dispatch = useDispatch()

    const showForm = useSelector( state => state.users.showAddUserForm)

    const formHandler = async (e) => {
        e.preventDefault()
        let sendUser = await axios.post("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_users" , user)
        dispatch(addUser(user))
        dispatch(showAddUserForm())
    }

    const inputHandler = (key,value) => {
        setUser({...user , [key] : value});
    }

    return (
        <div className={`fixedShadow highZIndex ${showForm?"dFlex":"dNone"}`}>
            <div className={"addUserForm glassDiv radius-8"}>
                <header className={"textCenter fs-14 bold-7 mt-8 mb-4"}>
                     فرم افزودن کاربر جدید
                </header>
                <Form formHandler={formHandler} inputHandler={inputHandler} />
            </div>
        </div>
    )
}


export default AddUserForm;