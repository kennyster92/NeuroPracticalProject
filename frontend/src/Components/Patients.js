import React from "react";
import axios from "axios";

import Patient from './Patient';

export default class Patients extends React.Component {
  state = { 
    patients: [],
    createNew: '',
    endpoint: 'http://localhost:3301/api/',
    editModeEnabled: false,
  }
  

  constructor(props) {
    super(props);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.createNewPatient = this.createNewPatient.bind(this);
    this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
  }

  componentDidMount() {
    this.updateCreateNew();

    axios({
      url: this.state.endpoint,
      method: 'post',
      data: {
        query: `
          query getAllPatients {
            getAllPatients {
              name
              id
            }
          }
          `
      }
    }).then((response) => {
        const patients = response.data.data.getAllPatients;
        this.setState({patients});
    }).catch(error => console.log(error));
  }

  createNewPatient(event) {
    event.preventDefault();        

    console.log('New patient created', event);
    const inputText = event.target[0].value;
    console.log(inputText);

    axios({
      url: this.state.endpoint,
      method: 'post',
      data: {
          query: `
              mutation createPatient($name: String!) {
                  createPatient(name: $name) {
                      name
                      id
                  }
              }
          `,
          variables: {
              name: inputText
          },
      }
    }).then((response) => {
        this.componentDidMount();
    }).catch(error => console.log(error));
  }

  updateCreateNew() {
    if (this.state.editModeEnabled) {
      this.setState({createNew: 
        <form className="form-inline" onSubmit={this.createNewPatient}>
          <div className="form-group mx-sm-3 mb-2">
            <label className="sr-only">Name</label>
            <input className="form-control" type="text" />
          </div>
          <input type="submit" className="btn btn-primary mb-2" value="Create patient!"/>
        </form>
      });
    }
    else {
      this.setState({createNew: ""});
    }
  }

  toggleEditMode(event) {
    this.setState({editModeEnabled: !this.state.editModeEnabled})
    this.updateCreateNew();
    event.preventDefault();
    console.log('Toggle edit mode', this.state.editModeEnabled);
  }

  rerenderParentCallback() {
    this.componentDidMount();
  }

  render() {
    return (
      <div>
        <h2>Patients</h2>
        <br/>
        <br/>
        <button className="btn btn-primary" onClick={this.toggleEditMode}>Toggle edit mode</button>
        <br/>
        <br/>
        {this.state.createNew}
        <table className="table">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {this.state.patients.map((patient) => (
              <Patient key={patient.id} rerenderParentCallback={this.rerenderParentCallback} data={patient} showActions={this.state.editModeEnabled}/>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
