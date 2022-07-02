import PN from "persian-number";

const HomeContent = () => {

    return (
        <div className={"flexColumn flexCenter"}>
            <div className={"w-6 mt-6 textCenter bold-5 fs-13 white"}>
                <p> اطلاعات کلی وبسایت شما ... </p>
            </div>
            <div className={"homeContent flexSpaceAround w-10 mrl-3"}>
                <div className={"circleShadow flexColumn flexCenter white fs-12"}>
                    <h4 className={"mb-8 fs-12"}>تعداد مقالات منتشر شده</h4>
                    <span> {PN.convertEnToPe(314)}+ </span>
                </div>
                <div className={"circleShadow flexColumn flexCenter white fs-12"}>
                    <h4 className={"mb-8 fs-12"}>تعداد کاربران ثبت نام کرده</h4>
                    <span> {PN.convertEnToPe(46)}+ </span>
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