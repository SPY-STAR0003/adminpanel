// components
import SideNavbar from "../layout/sideNavbar";
import PagesHeader from "../layout/pagesHeader";
import ArticleCards from "./articleCards";
import ArticlesFilter from "./articlesFilter";

const ArticlesContent = () => {

    return (
        <main className={"dFlex"}>
            <aside>
                <SideNavbar/>
            </aside>
            <div className={"w-10 m-4"}>
                <header className={"flexCenter"}>
                    <PagesHeader headerTitle={"لیست مقالات منتشرشده در سایت آسان بیاموز"}/>
                </header>
                <div className={"adminPanelArticlesContent flexSpaceAround flexAlignStart"}>
                    <ArticleCards/>
                    <ArticlesFilter/>
                </div>
            </div>
        </main>
    )
}

export default ArticlesContent;