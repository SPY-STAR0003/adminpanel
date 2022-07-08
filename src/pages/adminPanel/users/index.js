// React & NextJs
import Head from 'next/head';
import {useEffect, lazy, Suspense } from "react";

// libraries
import axios from "axios";

// redux
import { useDispatch , useSelector } from "react-redux";
import {getUsers} from "../../../store/slices/usersSlice";

// components
import AddFormBtn from "../../../components/adminPanel/layout/showFormsBtn";
import AdminPanelUsers from "../../../components/adminPanel/users";

// lazyLoading
const AddUserForm = lazy(() => import(/* webpackChunkName : "addUserForm" */"../../../components/adminPanel/users/addUserForm"));
const EditUserForm = lazy(() => import(/* webpackChunkName : "editUserForm" */"../../../components/adminPanel/users/editUserForm"));

const Users = ({usersList}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(usersList))
    }, [dispatch, usersList])

    const showEditForm = useSelector( state => state.users.showEditUserForm);
    const showAddForm =  useSelector( state => state.users.showAddUserForm);

    return (
        <>
            <Head>
                <title> پنل مدیریت - لیست کاربران </title>
            </Head>
            <AdminPanelUsers />
            <AddFormBtn isUser={true} tooltipValue={"افزودن کاربر جدید"}/>
            <Suspense fallback={<p> loading ... </p>}>
                {
                    showAddForm?<AddUserForm />:null
                }
            </Suspense>
            <Suspense fallback={<p> loading ... </p>}>
                {
                    showEditForm?<EditUserForm />:null
                }
            </Suspense>
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