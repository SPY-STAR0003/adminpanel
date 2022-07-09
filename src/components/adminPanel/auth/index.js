// react & nextJS
import {useEffect, useState} from "react";

// components
import NotAccess from "./notAccess"

const getHasAccess = async (setHasAccess) => {
    let res = await fetch("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_auth/30")
    let resJSON = await res.json()
    setHasAccess(resJSON.data.hasAccess)
}

const authenticated = (Component) => {

    return () =>  {
        const [hasAccess , setHasAccess] = useState(true)

        useEffect(() => {
            getHasAccess(setHasAccess)
        } , [])

        if(hasAccess) {
            return <Component />;
        } else {
            return <NotAccess />;
        }
    }
}

export default authenticated;