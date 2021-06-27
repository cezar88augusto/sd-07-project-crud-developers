import React, { useState, useEffect } from "react";
import { getDevs } from "../../services/api";

function SelectDev() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const allDevs = await getDevs();
    setDevs(allDevs);
  }

  return (
    <div>
      <h6>Lista de Devs</h6>
      {devs.map((dev, index) => (
        <p>{dev.name}</p>
      ))}
    </div>
  );
}

export default SelectDev;
