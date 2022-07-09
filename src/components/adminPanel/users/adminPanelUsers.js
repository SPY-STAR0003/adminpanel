// react & nextJS
import {memo} from "react";

// components
import SideNavbar from "../layout/sideNavbar";
import PagesHeader from "../layout/pagesHeader";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const AdminPanelUsers = () => {

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
        </main>
    )
}

export default memo(AdminPanelUsers);