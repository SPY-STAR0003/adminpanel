import Head from 'next/head';
import SideNavbar from "../../../components/adminPanel/layout/sideNavbar";
import PagesHeader from "../../../components/adminPanel/layout/pagesHeader";
import axios from "axios";

const Articles = () => {
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
                </div>
            </main>
        </>
    )
}

// export const getServerSideProps = () => {
//
//     let res = axios.get()
//
//     return {
//         props : {
//
//         }
//     }
// }

export default Articles;