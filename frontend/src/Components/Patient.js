
function Patient(data) {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Id: {data.data.id}</td>
                        <td>Name: {data.data.name}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Patient;