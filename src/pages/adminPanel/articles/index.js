// React & NextJs
import Head from 'next/head';
import {useEffect} from "react";

// redux
import { useDispatch } from "react-redux";
import {getArticlesList} from "../../../store/slices/articlesSlice";

// components
import ArticlesPage from '../../../components/adminPanel/articles';


const Articles = ({articlesList}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticlesList(articlesList.data))
    }, [articlesList.data, dispatch])


    return (
        <>
            <Head>
                <title> پنل مدیریت - لیست مقالات </title>
            </Head>
            <ArticlesPage />
        </>
    )
}

export const getServerSideProps = async () => {

    let resArticles = await fetch("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_articles");
    let articlesList = await resArticles.json();

    return {
        props : {
            articlesList
        }
    }
}

export default Articles;