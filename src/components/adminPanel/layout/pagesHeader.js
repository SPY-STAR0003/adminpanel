// React & nextJS
import propTypes from "prop-types";
import {memo} from "react";

const PagesHeader = ({headerTitle}) => {

    return (
        <div className={"pagesHeader w-6 textCenter mtb-3 p-6 bold-5 fs-13 white"}>
            {headerTitle}
        </div>
    )
}

PagesHeader.propTypes = {
    headerTitle : propTypes.string.isRequired
}

export default memo(PagesHeader);