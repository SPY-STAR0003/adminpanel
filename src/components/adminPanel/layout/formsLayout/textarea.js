import propTypes from "prop-types";

const Textarea = ({textareaName, textareaWidth, textareaRows, labelValue, onchange, defaultValue }) => {

    // console.log(value)
    return (
        <div className={textareaWidth}>
            <label> {labelValue} </label>
            <textarea
                data-name={textareaName}
                className={"inputMedium mt-4"}
                onChange={e => onchange(e.target.dataset.name,e.target.value)}
                defaultValue={defaultValue}
                rows={textareaRows}
            />
        </div>
    )
}

Textarea.propTypes = {
    textareaName : propTypes.string,
    textareaWidth : propTypes.string,
    labelValue : propTypes.string,
    onchange : propTypes.func,
    defaultValue : propTypes.string,
    textareaRows : propTypes.number,
}

export default Textarea;