import Head from 'next/head';
import axios from "axios";
import AddFormBtn from "../../../components/adminPanel/layout/addUserFormBtn";
import AdminPanelUsers from "../../../components/adminPanel/users";
import { useDispatch } from "react-redux";
import {getUsers} from "../../../store/slices/usersSlice";

const Users = ({usersList}) => {

    const dispatch = useDispatch()
    dispatch(getUsers(usersList))

    return (
        <>
            <Head>
                <title> پنل مدیریت - لیست کاربران </title>
            </Head>
            <AdminPanelUsers />
            <AddFormBtn />
        </>
    )
}

export const getServerSideProps = async () => {

    let res = await axios.get("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_users");
    let usersList = res.data.data

    return {
        props : {
            usersList,
        }
    }
}

export default Users;