// react & nextJS
import Image from "next/Image";
import Link from "next/Link";
import propTypes from "prop-types";

const NotAccess = ({ errorTitle, linkTitle }) => {

    return (
        <>
            <div className={"white fixedShadow flexColumn lineHeight-4"}>
                <Image
                    src={"/images/crying.gif"}
                    alt={"NOTACCESS"}
                    height={"300px"}
                    width={"300px"}
                />
                <p className={"fs-15 bold-7"}> {errorTitle} </p>
                <p className={"fs-12 bold-3 mt-5"}>
                    <Link className={"underlined"} href={"/"}> 
                        <a>
                            {linkTitle}
                        </a>
                    </Link>
                </p>
            </div>    
        </>
    )

}

NotAccess.propTypes = {
    errorTitle : propTypes.string,
    linkTitle : propTypes.string,
}

NotAccess.defaultProps = {
    errorTitle : "شما به این قسمت دسترسی ندارید",
    linkTitle : "== لطفا ابتدا با کلیک روی اینجا وارد حساب کاربری خود شوید ! =="
}

export default NotAccess;