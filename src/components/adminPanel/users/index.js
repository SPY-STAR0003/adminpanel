import SideNavbar from "../layout/sideNavbar";
import PagesHeader from "../layout/pagesHeader";
import AddUserForm from "../layout/addUserForm";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const AdminPanelUsers = () => (
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
        <AddUserForm />
    </main>
)

export default AdminPanelUsers;