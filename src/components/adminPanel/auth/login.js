// react & nextJS
import Image from "next/image";
import Link from "next/link";

// libraries
import { FaEdit, FaSignInAlt, FaKey } from "react-icons/fa";

// components
import Input from "../../publicComponents/formsLayout/input";

const Login = () => {

    return (
        <div className={"fixedShadow"}>
            <div className={"login pb-5 pt-3 flexColumn radius-12 circleShadow white"}>
                <div className={"loginHeader flexColumn flexCenter mb-3"}>
                    <Image
                        src={"/images/logo-next.png"}
                        alt={"site-LOGO"}
                        width={"100px"}
                        height={"100px"}
                    />
                    <h2 className={"mt-3 fs-13 bold-7"}> فرم ورود به پنل مدیریت </h2>
                </div>
                <div className={"loginBody w-10 flexColumn"}>
                    <Input
                        inputName={"username"}
                        inputSize={"w-7"}
                        labelValue={"نام کاربری :"}
                        placeholder={" نام کاربری خود را وارد نمایید ..."}
                    />
                    <Input
                        inputName={"password"}
                        inputSize={"w-7"}
                        labelValue={"رمز عبور :"}
                        placeholder={" رمز عبور خود را وارد نمایید ..."}
                    />
                </div>
                <div className={"loginFooter flexCenter"}>
                    <div>
                        <Link href={"/adminPanel/auth"}>
                            <a>
                                <FaEdit className={"circleShadowBtn pointer"} />
                            </a>
                        </Link>
                        <span className={"bottomTooltip"}> ثبت نام در سایت </span>
                    </div>
                    <div>
                        <Link href={"/adminPanel"}>
                            <a>
                                <FaSignInAlt className={"circleShadowBtn fs-20 pointer"} />
                            </a>
                        </Link>
                        <span className={"bottomTooltip loginIcon"}> ورود به سایت </span>
                    </div>
                    <div>
                        <FaKey className={"circleShadowBtn pointer"} />
                        <span className={"bottomTooltip"}> فراموشی رمز عبور </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;