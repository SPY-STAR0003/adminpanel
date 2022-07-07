// react & nextJS
import Head from 'next/head';

// libraries

// components
import Register from "../../../components/adminPanel/auth/register";

export default function Auth() {
    return (
        <>
            <Head>
                <title> ورود به بخش مدیریت </title>
            </Head>
            <Register />
        </>
    )
}