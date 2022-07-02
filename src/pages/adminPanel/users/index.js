import Head from 'next/head';
import axios from "axios";
import AddFormBtn from "../../../components/adminPanel/layout/addFormBtn";
import AdminPanelUsers from "../../../components/adminPanel/users";

const Users = ({data}) => {

    return (
        <>
            <Head>
                <title> پنل مدیریت - لیست کاربران </title>
            </Head>
            <AdminPanelUsers data={data} />
            <AddFormBtn />
        </>
    )
}

export const getServerSideProps = async () => {

    let res = await axios.get("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_users");
    let data = res.data.data

    return {
        props : {
            data,
        }
    }
}

export default Users;