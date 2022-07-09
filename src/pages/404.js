import NotAccess from "../components/adminPanel/auth/notAccess"

const errorNotFoundPage = () => {
    return (
        <NotAccess
            errorTitle={"صفحه مورد نظر شما پیدا نشد !"}
            linkTitle={"با کلیک روی اینجا وارد صفحه ورود به صفحه مدیریت شوید !"}
        />
    )
}

export default errorNotFoundPage;