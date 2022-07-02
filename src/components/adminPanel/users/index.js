import propTypes from "prop-types";
import SideNavbar from "../layout/sideNavbar";
import PagesHeader from "../layout/pagesHeader";

const AdminPanelUsers = ({data}) => {
    return (
        <main className={"dFlex"}>
            <aside>
                <SideNavbar />
            </aside>
            <div className={"w-10 m-4"}>
                <header className={"flexCenter"}>
                    <PagesHeader headerTitle={"پنل مدیریت وبلاگ آسان بیاموز"} />
                </header>
                <div className={"flexCenter flexColumn"}>
                    <h2 className={"w-6 mt-6 textCenter bold-5 fs-13 white"}>
                        لیست کاربران ثبت نام شده در سایت
                    </h2>
                    <table className={"showUsersTable w-9 white textCenter"}>
                        <thead>
                        <tr>
                            <th> نام و نام خانوادگی </th>
                            <th> سن </th>
                            <th> محل زندگی </th>
                            <th> وظیفه </th>
                            <th> عملکرد </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.map( user => {
                                return (
                                    <tr className={"pointer"} key={user.id}>
                                        <td> {user.name} </td>
                                        <td> {user.age} </td>
                                        <td> {user.city} </td>
                                        <td> {user.role} </td>
                                        <td className={"dFlex flexSpaceAround actions"}>
                                            <span> حذف </span>
                                            <span> ویرایش </span>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}

AdminPanelUsers.propTypes = {
    data : propTypes.string
}

AdminPanelUsers.defaultProps = {
    data : []
}

export default AdminPanelUsers;