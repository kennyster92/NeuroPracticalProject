
function Patient() {
    const item = this.props;

    return (
        <div>
        <table>
            <tr>
                <td>Name: {item.name}</td>
            </tr>
            <tr>
                <td>Created at: {item.createdAt}</td>
            </tr>
        </table>
        </div>
    );
}

export default Patient;