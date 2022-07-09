// react & nextJS
import Head from 'next/head';

// libraries

// components
import RegisterContent from "../../../components/adminPanel/auth/register";

const Register = () => {
    return (
        <>
            <Head>
                <title> ورود به بخش مدیریت </title>
            </Head>
            <RegisterContent />
        </>
    )
}

export default Register;