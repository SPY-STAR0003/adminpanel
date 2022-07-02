import Head from 'next/head'
import SideNavbar from "../components/adminPanel/layout/sideNavbar";
import PagesHeader from "../components/adminPanel/layout/pagesHeader";

export default function Home() {
  return (
    <>
        <Head>
            <title> پنل مدیریت </title>
        </Head>
        <SideNavbar />
        <PagesHeader headerTitle={"پنل مدیریت وبلاگ آسان بیاموز"} />
    </>
  )
}
