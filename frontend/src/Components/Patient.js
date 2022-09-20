import React from "react";
import axios from "axios";

export default class Patient extends React.Component {
    state = { 
        patient: this.props.data,
        edit: '',
        remove: '',
        endpoint: 'http://localhost:3301/api/',
    }

    constructor(props) {
        super(props);
        this.editPatient = this.editPatient.bind(this);
        this.removePatient = this.removePatient.bind(this);
    }

    componentDidMount() {
        this.updateEditRemove();
    }

    componentWillReceiveProps(props) {
        if (props.showActions !== this.props.showActions) {
            this.updateEditRemove();
        }
    }

    updateEditRemove() {
        if (this.props.showActions) {
            this.setState({edit: 
                <form onSubmit={this.editPatient} className="form-inline">
                    <div className="form-group mb-2">
                        <label className="sr-only">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <input className="btn btn-primary mb-2" type="submit" value="Edit patient!"/> 
                </form>
            });
            this.setState({remove: <button className="btn btn-danger" onClick={this.removePatient}>Remove patient!</button>});
        }
        else {
            this.setState({edit: ""});
            this.setState({remove: ""});
        }
    }

    editPatient(event) {
        event.preventDefault();        

        console.log('Patient edited', event);
        const inputText = event.target[0].value;
        console.log(inputText);
        axios({
            url: this.state.endpoint,
            method: 'post',
            data: {
                query: `
                    mutation updatePatient($id: Int!, $name: String!) {
                        updatePatient(id: $id, name: $name) {
                            name
                            id
                        }
                    }
                `,
                variables: {
                    id: this.state.patient.id,
                    name: inputText
                },
            }
          }).then((response) => {
                const patient = response.data.data.updatePatient;
                this.setState({patient: patient});
          }).catch(error => console.log(error));
    }

    removePatient(event) {
        event.preventDefault();        
        console.log('Patient removed');

        axios({
            url: this.state.endpoint,
            method: 'post',
            data: {
                query: `
                    mutation deletePatient($id: Int!) {
                        deletePatient(id: $id) {
                            name
                            id
                        }
                    }
                `,
                variables: {
                    id: this.state.patient.id,
                },
            }
          }).then((response) => {
              this.props.rerenderParentCallback();
          }).catch(error => console.log(error));
    }

    render() {
        return (
            <tr>
                <td>{this.state.patient.id}</td>
                <td>{this.state.patient.name}</td>
                <td>{this.state.edit}{this.state.remove}</td>
            </tr>
        )
    }
}
