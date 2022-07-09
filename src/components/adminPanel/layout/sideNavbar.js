// react & nextJS
import Image from "next/image";
import Link from "next/link";

// libraries
import {FaUsers, FaHome, FaFileSignature, FaUserCircle, FaSignOutAlt} from "react-icons/fa";

const SideNavbar = () => {
    
    const changeAuth = async () => {
        await fetch("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_auth/30" , {
            method : "PUT",
            headers : {
                "content-type": "application/JSON"
            },
            body : JSON.stringify({hasAccess: false})
        })
    }

    const pagesList = [
        { key : 1, page : "/adminPanel", content : "خانه " , icon : FaHome },
        { key : 2, page : "/adminPanel/users", content : "لیست کاربران ", icon : FaUsers },
        { key : 3, page : "/adminPanel/articles", content : "لیست مقالات ", icon : FaFileSignature },
        { key : 4, page : "/adminPanel/profile", content : "پروفایل ", icon : FaUserCircle },
        { key : 5, page : "/", content : "خروج از پنل کاربری ", icon : FaSignOutAlt , onclick : () => changeAuth(), },
    ]

    return (
        <div className={"sideNavbar mr-9 mtb-7"}>
            <div className={"logo dFlex flexCenter p-4 mb-8"}>
                <Image
                    src={"/images/logo-next.png"}
                    alt={"webLogo"}
                    width={"130px"}
                    height={"130px"}
                />
            </div>
            <div className={"sideNavbarPages dFlex flexColumn white"}>
                {
                    pagesList.map(item =>
                        <Link
                            href={`${item.page}`}
                            key={item.key}
                        >
                            <a onClick={item?.onclick}>
                                <div className={"sideNavbarPage relative mt-1 flexCenter pointer"}>
                                    <span className={"leftTooltip ptb-3 prl-2 fs-8 radius-6 textRight"}> {item.content} </span>
                                    <item.icon />
                                </div>
                            </a>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default SideNavbar;