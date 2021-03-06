// react & nextJS
import Head from 'next/head';

// components
import SideNavbar from "../../../components/adminPanel/layout/sideNavbar";
import PagesHeader from "../../../components/adminPanel/layout/pagesHeader";

const Profile = () => {
    return (
        <>
            <Head>
                <title> پنل مدیریت </title>
            </Head>
            <main className={"dFlex"}>
                <aside>
                    <SideNavbar />
                </aside>
                <div className={"w-10 m-4"}>
                    <header className={"flexCenter"}>
                        <PagesHeader headerTitle={"قسمت پروفایل در کامیت های بعدی فعال خواهد شد ..."} />
                    </header>
                </div>
            </main>
        </>
    )
}

export default Profile;