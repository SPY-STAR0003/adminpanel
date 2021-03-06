// React & nextJS
import propTypes from "prop-types";

const Input = ({inputName, inputSize, labelValue, onchange, defaultValue, placeholder }) => {

    return (
        <div className={inputSize}>
            <label> {labelValue} </label>
            <input
                data-name={inputName}
                type="text"
                className={"inputMedium mt-4"}
                onChange={e => onchange(e.target.dataset.name,e.target.value)}
                defaultValue={defaultValue}
                placeholder={placeholder}
            />
        </div>
    )
}

Input.propTypes = {
    inputName : propTypes.string,
    inputSize : propTypes.string,
    labelValue : propTypes.string,
    onchange : propTypes.func,
    defaultValue : propTypes.string
}

Input.defaultProps = {
    onchange : () => {},
}

export default Input;