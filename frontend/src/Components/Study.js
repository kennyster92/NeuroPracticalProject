
function Study() {
    const item = this.props;

    return (
        <div>
        <table>
            <tr>
                <td>Name: {item.studyName}</td>
            </tr>
            <tr>
                <td>Created at: {item.createdAt}</td>
            </tr>
        </table>
        </div>
    );
}

export default Study;