
import React from "react";

export default class Study extends React.Component {
  state = { 
    study: this.props.data,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <tr>
        <td>{this.state.study.id}</td>
        <td>{this.state.study.studyName}</td>
    </tr>
    )
  }
}
