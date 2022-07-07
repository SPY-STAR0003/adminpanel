// react & nextJS
import Head from 'next/head';

// libraries

// components
import Register from "../../../components/adminPanel/auth/register";

const Auth = () => {
    return (
        <>
            <Head>
                <title> ورود به بخش مدیریت </title>
            </Head>
            <Register />
        </>
    )
}

export default Auth;