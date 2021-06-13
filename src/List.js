function List(props) {
    return (
        <ul>
            {props.items.map((item,key) => {
                return <li key={key}>{item}</li>
            })}
        </ul>
    )
}

export default List;