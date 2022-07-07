// react & nextJS
import Image from "next/image";
import Link from "next/link";

// libraries
import { FaUserCheck, FaSignInAlt } from "react-icons/fa";

// components
import Input from "../../publicComponents/formsLayout/input";

const Register = () => {

    const formHandler = () => {
        
    }

    return (
        <div className={"fixedShadow"}>
            <form onSubmit={() => formHandler()}>
                <div className={"register pb-5 pt-3 flexColumn radius-12 circleShadow white"}>
                    <div className={"registerHeader flexColumn flexCenter mb-3"}>
                        <Image
                            src={"/images/logo-next.png"}
                            alt={"site-LOGO"}
                            width={"100px"}
                            height={"100px"}
                        />
                        <h2 className={"mt-3 fs-13 bold-7"}> فرم ثبت نام در سایت </h2>
                    </div>
                    <div className={"registerBody dFlex flexColumn w-10"}>
                        <div className={"flexSpaceAround w-9"}>
                            <Input
                                inputName={"name"}
                                inputSize={"w-6"}
                                labelValue={"نام و نام خانوادکی :"}
                                placeholder={" نام خود را وارد نمایید ..."}
                            />
                            <Input
                                inputName={"year"}
                                inputSize={"w-3"}
                                labelValue={"سال تولد :"}
                                placeholder={"به هجری شمسی ..."}
                            />
                        </div>
                        <div className={"flexSpaceAround w-9"}>
                            <Input
                                inputName={"password"}
                                inputSize={"w-4"}
                                labelValue={"رمز عبور :"}
                                placeholder={" حداقل 6 کاراکتر شامل حروف انگلیسی ..."}
                            />
                            <Input
                                inputName={"repeatPassword"}
                                inputSize={"w-4"}
                                labelValue={"تکرار رمز عبور :"}
                                placeholder={"تکرار رمز عبور ..."}
                            />
                        </div>
                        <div className={"flexSpaceAround w-9"}>
                            <Input
                                inputName={"email"}
                                inputSize={"w-4"}
                                labelValue={"ایمیل :"}
                                placeholder={" نیازی به www در ابتدای ایمیل نیست ..."}
                            />
                            <Input
                                inputName={"numberPhone"}
                                inputSize={"w-4"}
                                labelValue={"شماره تلفن :"}
                                placeholder={"بدون صفر با 98 ( کد ایران ) ..."}
                            />
                        </div>
                    </div>
                    <div className={"registerFooter flexCenter "}>
                        <div>
                            <Link href={"/adminPanel"}>
                                <FaUserCheck className={"circleShadowBtn fs-20 pointer"} />
                            </Link>
                            <span className={"bottomTooltip loginIcon"}> ثبت نام در سایت </span>
                        </div>
                        <div>
                            <Link href={"/"}>
                                <FaSignInAlt className={"circleShadowBtn pointer"} />
                            </Link>
                            <span className={"bottomTooltip"}> ورود اعضا </span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register;