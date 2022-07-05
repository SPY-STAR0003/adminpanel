import Head from 'next/head'
import SideNavbar from "../../../components/adminPanel/layout/sideNavbar";
import PagesHeader from "../../../components/adminPanel/layout/pagesHeader";
import HomeContent from "../../../components/adminPanel/home";
import axios from "axios";

export default function Home({usersList, articlesList}) {
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
                    <HomeContent usersList={usersList} articlesList={articlesList} />
                </div>
            </main>
        </>
    )
}

export const getServerSideProps = async () => {
    let resUsers = await axios.get("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_users");
    let resArticles = await axios.get("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_articles");
    let usersList = resUsers.data.data;
    let articlesList = resArticles.data.data;

    return {
        props : {
            usersList,
            articlesList
        }
    }
}