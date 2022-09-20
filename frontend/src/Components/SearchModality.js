import React from "react";
import axios from "axios";

import Modality from './Modality';

export default class SearchModality extends React.Component {
  state = { 
    modalities: [],
    endpoint: 'http://localhost:3301/api/'
  }

  constructor(props) {
    super(props);
    this.searchModality = this.searchModality.bind(this);
  }

  searchModality(event) {
    event.preventDefault();
    console.log(event);
    axios({
        url: this.state.endpoint,
        method: 'post',
        data: {
            query: `
                query searchModalities($name: String!) {
                    searchModalities(name: $name) {
                        id
                        name
                    }
                }
                `,
            variables: {
                name: event.target[0].value,
            }
        }
    }).then((response) => {
        const modalities = response.data.data.searchModalities;
        console.log(response);
        this.setState({modalities});
    }).catch(error => console.log(error));
  }

  render() {
    return (
        <div>
            <h2>Search Modality</h2>
            <form className="form-inline" onSubmit={this.searchModality}>
            <div className="form-group mx-sm-3 mb-2">
                <label className="sr-only">Name</label>
                <input className="form-control" type="text" />
            </div>
            <input type="submit" className="btn btn-primary mb-2" value="Search!"/>
            </form>
            <br/>
            <br/>
            <h3>Found modalities:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.modalities.map((modality) => (
                    <Modality key={modality.id} data={modality}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
  }
}