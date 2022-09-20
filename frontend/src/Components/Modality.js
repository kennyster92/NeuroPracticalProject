
import React from "react";

export default class Modality extends React.Component {
  state = { 
    modality: this.props.data,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <tr>
        <td>{this.state.modality.id}</td>
        <td>{this.state.modality.name}</td>
    </tr>
    )
  }
}
