import Head from 'next/head';
import ArticlesContent from "../../../components/adminPanel/articles";
import axios from "axios";
import AddUserFormBtn from "../../../components/adminPanel/layout/showFormsBtn";
import AddArticleForm from "../../../components/adminPanel/layout/addArticleForm";
import { useSelector, useDispatch } from "react-redux";
import {getArticlesList} from "../../../store/slices/articlesSlice"

const Articles = ({articlesList}) => {

    const showingAddArticleForm = useSelector( state => state.articles.showingAddArticleForm);
    const dispatch = useDispatch();
    dispatch(getArticlesList(articlesList))

    return (
        <>
            <Head>
                <title> پنل مدیریت - لیست مقالات </title>
            </Head>
            <ArticlesContent />
            <AddUserFormBtn isUser={false} tooltipValue={"افزودن مقاله جدید"} />
            {
                showingAddArticleForm ? <AddArticleForm /> : null
            }
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