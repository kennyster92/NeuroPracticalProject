import React from "react";
import axios from "axios";
import { useQuery } from 'react-query'

import Patient from './Patient';

const endpoint = 'http://localhost:3301/api/';

function Patients() {

  const { data, isLoading, error } = useQuery('patients', () => {
    return axios({
      url: endpoint,
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
    }).then((response) => response.data.data);
  });

  if (isLoading) {
    return 'Loading...';
  }
  if (error) {
    <pre>{error.message}</pre>
  }

  return (
    <div>
      <h2>Patients</h2>
      <br/>
      <br/>
      {data.getAllPatients.map((patient) => (
        <Patient key={patient.id} data={patient} />
      ))}
    </div>
  );
}

export default Patients;