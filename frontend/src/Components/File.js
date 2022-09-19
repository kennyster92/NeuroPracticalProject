
function File() {
    const item = this.props;

    return (
        <div>
        <table>
            <tr>
                <td>Filepath: {item.filePath}</td>
            </tr>
            <tr>
                <td>Created at: {item.createdAt}</td>
            </tr>
        </table>
        </div>
    );
}

export default File;