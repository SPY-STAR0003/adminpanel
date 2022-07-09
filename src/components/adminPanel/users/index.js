// React & NextJs
import {lazy, Suspense } from "react";

// redux
import { useSelector } from "react-redux";

// components
import AddFormBtn from "../../../components/adminPanel/layout/showFormsBtn";
import AdminPanelUsers from "../../../components/adminPanel/users/adminPanelUsers";

// design Patterns
import { authenticated } from "../auth/notAccess";

// lazyLoading
const AddUserForm = lazy(() => import(/* webpackChunkName : "addUserForm" */"./addUserForm"));
const EditUserForm = lazy(() => import(/* webpackChunkName : "editUserForm" */"./editUserForm"));

const UsersPage = () => {

    // let res = await fetch("https://62b6ea7b76028b55ae716ba0.endapi.io/auth" , {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/JSON"  
    //     },
    //     body: JSON.stringify({hasAccess: false})
    // })

    // console.log(res)
    
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