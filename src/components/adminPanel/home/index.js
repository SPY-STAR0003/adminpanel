import PN from "persian-number";

const HomeContent = ({articlesList, usersList}) => {

    return (
        <div className={"flexColumn flexCenter"}>
            <div className={"homeContent flexSpaceAround w-10 mrl-3"}>
                <div className={"circleShadow flexColumn flexCenter white fs-12"}>
                    <h4 className={"mb-8 fs-12"}>تعداد مقالات منتشر شده</h4>
                    <span> {PN.convertEnToPe(articlesList.length)}+ </span>
                </div>
                <div className={"circleShadow flexColumn flexCenter white fs-12"}>
                    <h4 className={"mb-8 fs-12"}>تعداد کاربران ثبت نام کرده</h4>
                    <span> {PN.convertEnToPe(usersList.length)}+ </span>
                </div>
                <div className={"circleShadow flexColumn flexCenter white fs-12"}>
                    <h4 className={"mb-8 fs-12"}>میزان تکمیل پروفایل شما</h4>
                    <span> %{PN.convertEnToPe(83)} </span>
                </div>
            </div>
        </div>
    )
}

export default HomeContent;