function Table(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">age</th>
                </tr>
            </thead>
            <tbody>
                    {props.data.map(item => <tr key={item.id} scope="row">
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>)}
            </tbody>
        </table>
    )
}
export default Table;
