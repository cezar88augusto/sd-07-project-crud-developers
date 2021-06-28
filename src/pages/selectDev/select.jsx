import React, { useState, useEffect } from "react";
import { getDevs } from "../../services/api";
import { DevCard } from '../components/index';

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
        <DevCard key={ index } dev={ dev } />
      ))}
    </div>
  );
}

export default SelectDev;
