import {FaUserEdit , FaUserSlash} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {deleteUser} from "../../../store/slices/usersSlice";
import axios from "axios";

const TableBody = () => {
    const dispatch = useDispatch()

    const usersList = useSelector( state => state.users.usersList )

    const deleteHandler = async (id) => {
        await axios.delete(`https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_users/${id}`)
        dispatch(deleteUser(id))
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
                        <td className={"dFlex flexSpaceAround actions"}>
                            <span
                                className={"redHover fs-12"}
                                onClick={() => deleteHandler(user.id)}
                            >
                                <FaUserSlash />
                            </span>
                            <span
                                className={"blueHover fs-12"}
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