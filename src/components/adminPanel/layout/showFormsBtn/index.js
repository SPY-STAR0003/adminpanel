// react & nextJS
import {memo} from "react";

// libraries
import { FaUserPlus, FaFileMedical } from "react-icons/fa";

// redux
import { useDispatch } from "react-redux";
import { showAddUserForm } from "../../../../store/slices/usersSlice";
import { showAddArticleForm } from "../../../../store/slices/articlesSlice";

// components


const ShowFormsBtn = ({isUser, tooltipValue}) => {

    const dispatch = useDispatch();

    const handleAddUserForm = () => {
        isUser
            ? dispatch(showAddUserForm())
            : dispatch(showAddArticleForm())
    }

    return (
        <div
            className={"addFormBtn flexCenter fixedLeftBottom mtb-8 ml-6 p-4 white bold-7 pointer"}
            onClick={() => handleAddUserForm()}
        >
                <span className={`${!isUser?'noLeft':''} iconAddUser fs-22`}>
                    {
                        isUser ? (<FaUserPlus />) : (<FaFileMedical />)
                    }
                </span>
            <span className={"rightTooltip fs-9 ptb-3 prl-2 radius-5"}> {tooltipValue} </span>
        </div>
    )
}

export default memo(ShowFormsBtn);