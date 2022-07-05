import SideNavbar from "../layout/sideNavbar";
import PagesHeader from "../layout/pagesHeader";
import propTypes from "prop-types";
import PN from "persian-number";
import { FaRegClock, FaEdit, FaTrashAlt, FaEye } from "react-icons/fa"

const ArticlesContent = ({articlesList}) => {

    return (
        <main className={"dFlex"}>
            <aside>
                <SideNavbar />
            </aside>
            <div className={"w-10 m-4"}>
                <header className={"flexCenter"}>
                    <PagesHeader headerTitle={"لیست مقالات منتشرشده در سایت آسان بیاموز"} />
                </header>
                <div className={"adminPanelArticlesContent flexSpaceAround flexAlignStart"}>
                    <div className={"articlesList w-7"}>
                        {
                            articlesList.map((article , index) => (
                                <div className={"adminPanelArticleCard card"} key={index}>
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
                                            {article.hashtags.map((hashtag, index) => (
                                                <span className={"primaryBtn"} key={index}> #{hashtag} </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={"editCard"}>
                                        <FaEdit />
                                        <FaTrashAlt />
                                        <FaEye />
                                    </div>
                                </div>
                                )
                            )
                        }
                    </div>
                    <div className={"filterArticles w-2 mtb-6 p-3 flexColumn textCenter radius-8"}>
                        <div className={"filterArticlesHeader mb-4"}>
                            <h3 className={"fs-12 bold-8"}> لیست فیلتر ها </h3>
                        </div>
                        <div className={"filterArticlesBody fs-8"}>
                            <p> این قسمت در کامیت های بعدی فعال خواهد شد... </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

ArticlesContent.propTypes = {
    articlesList : propTypes.array
}

export default ArticlesContent;