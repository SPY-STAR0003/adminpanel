// React & NextJs
import {lazy, Suspense } from "react";

// redux
import { useSelector } from "react-redux";

// components
import AddFormBtn from "../../../components/adminPanel/layout/showFormsBtn";
import AdminPanelUsers from "../../../components/adminPanel/users/adminPanelUsers";

// design Patterns
import authenticated from "../auth";

// lazyLoading
const AddUserForm = lazy(() => import(/* webpackChunkName : "addUserForm" */"./addUserForm"));
const EditUserForm = lazy(() => import(/* webpackChunkName : "editUserForm" */"./editUserForm"));

const UsersPage = () => {
    
    const showEditForm = useSelector( state => state.users.showEditUserForm);
    const showAddForm =  useSelector( state => state.users.showAddUserForm);

    return (
        <>
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

export default authenticated(UsersPage);