// react & nextJS
import Image from "next/Image";
import Link from "next/Link";
import { useEffect } from "react";

// redux
import { useSelector } from "react-redux";


const authenticated = (Component) => {

    // ajax
    useEffect(() => {
        console.log("a")
    }, [])

    console.log(hasAccess)

    if(false) return () =>  <Component />
    
    return () => <NotAccess />
}

const NotAccess = () => {

    return (
        <>
            <div className={"white fixedShadow flexColumn lineHeight-4"}>
                <Image
                    src={"/images/crying.gif"}
                    alt={"NOTACCESS"}
                    height={"300px"}
                    width={"300px"}
                />
                <p className={"fs-15 bold-7"}> شما به این قسمت دسترسی ندارید </p>
                <p className={"fs-12 bold-3 mt-5"}>
                    لطفاً ابتدا
                    <Link className={"underlined"} href={"/"}> وارد </Link>
                    شوید ... 
                </p>
            </div>    
        </>
    )

}

export { NotAccess, authenticated };