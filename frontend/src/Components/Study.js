
function Study(data) {

    return (
        <div>
        <table>
            <tbody>
                <tr>
                    <td>Id: {data.data.id}</td>
                    <td>Name: {data.data.studyName}</td>
                </tr>
            </tbody>
        </table>
        </div>
    );
}

export default Study;