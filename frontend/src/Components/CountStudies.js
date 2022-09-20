
import React from "react";
import axios from "axios";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class CountStudies extends React.Component {
    state = {
        count: -1,
        endpoint: 'http://localhost:3301/api/',
    }

    constructor(props) {
        super(props);
        this.countStudies = this.countStudies.bind(this);
    }

    countStudies(event) {
        event.preventDefault();
        axios({
            url: this.state.endpoint,
            method: 'post',
            data: {
                query: `
                    query countStudies($startDate: String!, $endDate: String!) {
                        countStudies(startDate: $startDate, endDate: $endDate)
                    }
                    `,
                variables: {
                    startDate: event.target[0].value,
                    endDate: event.target[1].value
                }
            }
        }).then((response) => {
            const count = response.data.data.countStudies;
            this.setState({count});
        }).catch(error => console.log(error));
    }

  render() {
    return (
        <div>
            <h2>Count Studies</h2>
            <form className="form-inline" onSubmit={this.countStudies}>
                <div className="form-group mb-2">
                    <label className="sr-only">Start date (format: 'YYYY-MM-DD')</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group mb-2">
                    <label className="sr-only">End date (format: 'YYYY-MM-DD')</label>
                    <input type="text" className="form-control" />
                </div>
                <input type="submit" className="btn btn-primary mb-2" value="Search!"/>
            </form>
            <br/>
            <br/>
            {   this.state.count > 0 ?
                    <h3>Found {this.state.count} studies in the given interval</h3>
                :
                    ''
            }
        </div>
    )
  }
}