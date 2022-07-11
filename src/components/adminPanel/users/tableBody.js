// react & nextJS

// libraries
import {FaUserEdit , FaUserSlash} from "react-icons/fa";
import { toast } from "react-toastify";

// design Patterns
import observable from "../../observable";

// redux
import { useSelector, useDispatch } from "react-redux";
import {deleteUser, showEditUserForm} from "../../../store/slices/usersSlice";

// components

const TableBody = () => {
    const dispatch = useDispatch()

    const usersList = useSelector( state => state.users.usersList )

    const deleteHandler = async (user) => {
        await fetch(`https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_users/${user.id}` , {
            method : "DELETE",
            headers: {
                "Content-Type": "application/JSON"
            }
        });
        dispatch(deleteUser(user.id));
        observable.notify(`کاربر ${user.name} با موفقیت حذف شد . ` , "error");
    }

    return (
        <tbody>
        {
            usersList.map( user => {
                return (
                    <tr className={"pointer"} key={user.id}>
                        <td> {user.name} </td>
                        <td> {user.code} </td>
                        <td> {user.year} </td>
                        <td> {user.role} </td>
                        <td>
                            <span
                                className={"redHover fs-12 mrl-2"}
                                onClick={() => deleteHandler(user)}
                            >
                                <FaUserSlash />
                            </span>
                            <span
                                className={"blueHover fs-12 mrl-2"}
                                onClick={() => dispatch(showEditUserForm(user))}
                            >
                                <FaUserEdit />
                            </span>
                        </td>
                    </tr>
                )
            })
        }
        </tbody>
    )
}

export default TableBody;