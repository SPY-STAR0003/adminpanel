// React & NextJs
import Head from 'next/head';
import {useEffect} from "react";

// redux
import { useDispatch  } from "react-redux";
import {getUsers} from "../../../store/slices/usersSlice";

// components
import UsersPage from '../../../components/adminPanel/users';


const Users = ({usersList}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(usersList.data))
    }, [dispatch, usersList.data])

    return (
        <>
            <Head>
                <title> پنل مدیریت - لیست کاربران </title>
            </Head>
            <UsersPage />
        </>
    )
}

export const getServerSideProps = async () => {

    let res = await fetch("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_users");
    let usersList = await res.json();

    return {
        props : {
            usersList,
        }
    }
}

export default Users;