// React & NextJs
import Head from 'next/head';
import {useEffect} from "react";

// libraries
import axios from "axios";

// redux
import { useDispatch } from "react-redux";
import {getUsers} from "../../../store/slices/usersSlice";

// components
import AddFormBtn from "../../../components/adminPanel/layout/showFormsBtn";
import AdminPanelUsers from "../../../components/adminPanel/users";

const Users = ({usersList}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(usersList))
    }, [dispatch, usersList])

    return (
        <>
            <Head>
                <title> پنل مدیریت - لیست کاربران </title>
            </Head>
            <AdminPanelUsers />
            <AddFormBtn isUser={true} tooltipValue={"اقزودن کاربر جدید"}/>
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