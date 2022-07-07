// react & nextJS
import Head from 'next/head';

// libraries

// components
import Login from "../components/adminPanel/auth/login";

export default function Home() {
  return (
    <>
        <Head>
            <title> ورود به بخش مدیریت </title>
        </Head>
        <Login />
    </>
  )
}
