// react & nextJS

// libraries
import axios from "axios";
import PN from "persian-number";
import { FaRegClock, FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";

// redux
import { useSelector , useDispatch } from "react-redux";
import {deleteArticle, showEditArticleForm} from "../../../store/slices/articlesSlice";

// components


const ArticleCards = () => {

    const dispatch = useDispatch();

    let articlesList = useSelector( state => state.articles.articlesList)

    const deleteArticleHandler = async (article) => {
        await axios.delete(`https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_articles/${article.id}`)
        dispatch(deleteArticle(article.clientId))
    }

    const seeArticleHandler = () => {
        console.log("seen article")
    }
    return (
        <div className={"articlesList w-7"}>
            {
                articlesList.map(article => (
                        <div className={"adminPanelArticleCard card"} key={article.clientId}>
                            <div className={"cardHeader"}>
                                <div className={"cardSubject"}>
                                    - {article.subject}
                                </div>
                                <div className={"cardTopSort flexCenter"}>
                                            <span className={"cardTopSortTitle"}>
                                                {article.sort}
                                            </span>
                                    <span className={"cardTopSortTime"}>
                                                {`'${PN.convertEnToPe(article.time)}`}
                                        <FaRegClock />
                                            </span>
                                </div>
                            </div>
                            <div className={"cardBody"}>
                                <div>
                                    {`${article.content.slice(0, 125)}...`}
                                </div>
                            </div>
                            <div className={"cardFooter"}>
                                <div className={"cardFooterHashtags"}>
                                    {/*{article.hashtags.map((hashtag, index) => (*/}
                                    {/*    <span className={"primaryBtn"} key={index}> #{hashtag} </span>*/}
                                    {/*))}*/}
                                    <span className={"primaryBtn"}> #{article.hashtags} </span>
                                </div>
                            </div>
                            <div className={"editCard"}>
                                <FaEdit onClick={() => dispatch(showEditArticleForm(article))} />
                                <FaTrashAlt onClick={() => deleteArticleHandler(article)} />
                                <FaEye onClick={() => seeArticleHandler(article)}/>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default ArticleCards;