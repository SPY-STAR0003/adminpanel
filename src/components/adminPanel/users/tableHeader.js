
const TableHeader = () => {

    const headersTitle = [
        " نام و نام خانوادگی ",
        " کدملی ",
        " سال تولد ",
        " وظیفه ",
        " عملکرد "
    ]

    return (
        <thead>
            <tr>
                {
                    headersTitle.map((title , index) => <th key={index}> {title} </th>)
                }
            </tr>
        </thead>
    )
}

export default TableHeader;