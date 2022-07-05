import Head from 'next/head';
import ArticlesContent from "../../../components/adminPanel/articles";
import axios from "axios";
import AddUserFormBtn from "../../../components/adminPanel/layout/addUserFormBtn";

const Articles = ({articlesList}) => {
    return (
        <>
            <Head>
                <title> پنل مدیریت - لیست مقالات </title>
            </Head>
            <ArticlesContent articlesList={articlesList} />
            <AddUserFormBtn isUser={false} tooltipValue={"افزودن مقاله جدید"} />
        </>
    )
}

export const getServerSideProps = async () => {

    let resArticles = await axios.get("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_articles");
    let articlesList = resArticles.data.data;

    return {
        props : {
            articlesList
        }
    }
}

export default Articles;