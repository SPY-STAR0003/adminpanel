import propTypes from "prop-types";

const Select = ({selectName, selectSize, labelValue, options, onchange }) => {
    return (
        <div className={selectSize}>
            <label> {labelValue}</label>
            <select
                data-name={selectName}
                className={"inputMedium mt-4"}
                onChange={e => onchange(e.target.dataset.name,e.target.value)}
            >
                <option value={"---"} defaultValue> --- </option>
                {
                    options.map(item =>
                        <option
                            key={item.key}
                            value={item.value}
                        >
                            {item.value}
                        </option>
                    )
                }
            </select>
        </div>
    )
}

Select.propTypes = {
    selectName : propTypes.string,
    selectSize : propTypes.string,
    labelValue : propTypes.string,
    options : propTypes.array,
    onchange : propTypes.func
}

Select.defaultProps = {
    selectSize : "w-3 mr-10",
}

export default Select;