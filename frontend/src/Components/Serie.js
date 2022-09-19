
function Serie() {
    const item = this.props;

    return (
        <div>
        <table>
            <tr>
                <td>Name: {item.seriesName}</td>
            </tr>
            <tr>
                <td>Created at: {item.createdAt}</td>
            </tr>
        </table>
        </div>
    );
}

export default Serie;