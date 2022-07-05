import { FaUserPlus, FaFileMedical } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { showAddUserForm } from "../../../../store/slices/usersSlice";

const AddUserFormBtn = ({isUser, tooltipValue}) => {
    const dispatch = useDispatch();

    const handleAddUserForm = () => {
        dispatch(showAddUserForm())
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

export default AddUserFormBtn;