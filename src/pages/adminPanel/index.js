// React & NextJs
import Head from 'next/head';

// libraries

// redux

// components
import SideNavbar from "../../components/adminPanel/layout/sideNavbar";
import PagesHeader from "../../components/adminPanel/layout/pagesHeader";
import HomeContent from "../../components/adminPanel/home";

const AdminPanelHome = ({usersList , articlesList}) => {

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
                        <PagesHeader headerTitle={"پنل مدیریت وبلاگ آسان بیاموز"} />
                    </header>
                    <HomeContent usersList={usersList.data} articlesList={articlesList.data} />
                </div>
            </main>
        </>
    )
}

export const getServerSideProps = async () => {
    let resUsers = await fetch("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_users");
    let resArticles = await fetch("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_articles");
    let usersList = await resUsers.json();
    let articlesList = await resArticles.json();

    console.log(usersList)

    return {
        props : {
            usersList,
            articlesList
        }
    }
}

export default AdminPanelHome;