import axios from "axios";

const instance = axios.create({
    baseURL : "https://62b6ea7b76028b55ae716ba0.endapi.io/",
    timeout : 5000,
})