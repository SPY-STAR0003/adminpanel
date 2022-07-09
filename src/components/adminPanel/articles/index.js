
// redux
import { useSelector } from "react-redux";

// components
import ArticlesContent from "./articlesContent";
import AddUserFormBtn from "./../layout/showFormsBtn/index";
import AddArticleForm from "./addArticleForm";
import EditArticleForm from "./editArticleForm";

// designPatters
import authenticated from "../auth";

const ArticlesPage = () => {

    const showingAddArticleForm = useSelector( state => state.articles.showingAddArticleForm);
    const showingEditArticleForm = useSelector( state => state.articles.showingEditArticleForm);

    return (
        <>
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

export default authenticated(ArticlesPage);