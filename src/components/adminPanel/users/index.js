import SideNavbar from "../layout/sideNavbar";
import PagesHeader from "../layout/pagesHeader";
import AddUserForm from "../layout/addUserForm";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import EditUserForm from "../layout/editUserForm";
import { useSelector } from "react-redux";

const AdminPanelUsers = () => {

    const showEditForm = useSelector( state => state.users.showEditUserForm);
    const showAddForm =  useSelector( state => state.users.showAddUserForm);

    return (
        <main className={"dFlex"}>
            <aside>
                <SideNavbar />
            </aside>
            <div className={"w-10 m-4"}>
                <header className={"flexCenter"}>
                    <PagesHeader headerTitle={"لیست کاربران سایت آسان بیاموز"} />
                </header>
                <div className={"flexCenter flexColumn"}>
                    <table className={"showUsersTable w-9 white textCenter"}>
                        <TableHeader />
                        <TableBody />
                    </table>
                </div>
            </div>
            {
                showAddForm?<AddUserForm />:null
            }
            {
                showEditForm?<EditUserForm />:null
            }
        </main>
    )
}

export default AdminPanelUsers;