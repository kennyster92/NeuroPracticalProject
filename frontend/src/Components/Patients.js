import React, { useEffect, useState } from "react";
import axios from "axios";

import Patient from './Patient';

function Patients() {
  const [patient, setPatient] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/patients').then((data) => {
      console.log(data);
      setPatient(data?.data);
    });
  }, []);

  return (
    <div>
      Patients
      {patient.map((item, i) => {
        return (
            <Patient item={item} />
        );
      })}
    </div>
  );
}

export default Patients;