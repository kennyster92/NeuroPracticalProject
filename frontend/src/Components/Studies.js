import React, { useEffect, useState } from "react";
import axios from "axios";

import Study from './Study';

function Studies() {
  const [study, setStudy] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/studies').then((data) => {
      console.log(data);
      setStudy(data?.data);
    });
  }, []);

  return (
    <div>
      Studies
      {study.map((item, i) => {
        return (
          <Study item={item} />
        );
      })}
    </div>
  );
}

export default Studies;