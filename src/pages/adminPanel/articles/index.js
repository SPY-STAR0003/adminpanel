// React & NextJs
import Head from 'next/head';
import {useEffect} from "react";

// libraries
import axios from "axios";

// redux
import { useSelector, useDispatch } from "react-redux";
import {getArticlesList} from "../../../store/slices/articlesSlice";

// components
import ArticlesContent from "../../../components/adminPanel/articles";
import AddUserFormBtn from "../../../components/adminPanel/layout/showFormsBtn";
import AddArticleForm from "../../../components/adminPanel/articles/addArticleForm";
import EditArticleForm from "../../../components/adminPanel/articles/editArticleForm";

const Articles = ({articlesList}) => {
    const dispatch = useDispatch();
    const showingAddArticleForm = useSelector( state => state.articles.showingAddArticleForm);
    const showingEditArticleForm = useSelector( state => state.articles.showingEditArticleForm);

    useEffect(() => {
        dispatch(getArticlesList(articlesList))
    }, [articlesList, dispatch])

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
            {
                showingEditArticleForm ? <EditArticleForm /> : null
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