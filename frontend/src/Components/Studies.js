import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from 'react-query'

import Study from './Study';

const endpoint = 'http://localhost:3301/api/';

function Studies() {
  const { data, isLoading, error } = useQuery('studies', () => {
    return axios({
      url: endpoint,
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
      <h2>Studies</h2>
      <br/>
      <br/>
      {data.getAllStudies.map((study) => (
        <Study key={study.id} data={study}/>
      ))}
    </div>
  );
}

export default Studies;