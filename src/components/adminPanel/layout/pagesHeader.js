import propTypes from "prop-types";

function PagesHeader({headerTitle}) {

    return (
        <div className={"pagesHeader w-6 textCenter mtb-3 p-6 bold-5 fs-13 white"}>
            {headerTitle}
        </div>
    )
}

PagesHeader.propTypes = {
    headerTitle : propTypes.string.isRequired
}

export default PagesHeader;