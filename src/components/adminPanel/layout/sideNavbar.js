// react & nextJS
import Image from "next/image";
import Link from "next/link";

// libraries
import {FaUsers, FaHome, FaFileSignature, FaUserCircle} from "react-icons/fa";

const SideNavbar = () => {

    const pagesList = [
        { key : 1, page : "", content : "خانه " , icon : FaHome },
        { key : 2, page : "users", content : "لیست کاربران ", icon : FaUsers },
        { key : 3, page : "articles", content : "لیست مقالات ", icon : FaFileSignature },
        { key : 4, page : "profile", content : "پروفایل ", icon : FaUserCircle },
    ]

    return (
        <div className={"sideNavbar mr-9 mtb-13"}>
            <div className={"logo dFlex flexCenter p-4 mb-8"}>
                <Image
                    src={"/images/logo-next.png"}
                    alt={"webLogo"}
                    width={"150px"}
                    height={"150px"}
                />
            </div>
            <div className={"sideNavbarPages dFlex flexColumn white"}>
                {
                    pagesList.map(item =>
                        <Link
                            href={`/adminPanel/${item.page}`}
                            key={item.key}
                        >
                            <div className={"sideNavbarPage relative mt-1 flexCenter pointer"}>
                                <span className={"leftTooltip ptb-3 prl-2 fs-8 radius-6 textRight"}> {item.content} </span>
                                <item.icon />
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default SideNavbar;