import React from "react";
import axios from "axios";

import Study from './Study';

export default class Studies extends React.Component {
  state = { 
    studies: [],
  }
  endpoint = 'http://localhost:3301/api/';

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios({
      url: this.endpoint,
      method: 'post',
      data: {
        query: `
          query getAllStudies {
            getAllStudies {
              studyName
              id
            }
          }
          `
      }
    }).then((response) => {
        const studies = response.data.data.getAllStudies;
        this.setState({studies});
    }).catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h2>Studies</h2>
        <br/>
        <br/>
        <table className="table">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
            </tr>
          </thead>
          <tbody>
            {this.state.studies.map((study) => (
              <Study key={study.id} data={study}/>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
