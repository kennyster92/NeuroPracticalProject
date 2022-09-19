import React, { useEffect, useState } from "react";
import axios from "axios";

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
          <div key={i}>
            <p>{item?.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Patients;