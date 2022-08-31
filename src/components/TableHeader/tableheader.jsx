import React, { useEffect, useState } from "react";

const TableHeader = ({ title }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1); // toinen ratkasu laittaa timer + 1 ja useEffectin dependancyyn timer
    }, 1000)
    return () => clearInterval(intervalId); // välttää memory leakin (sekunnitkin pomppi vähän GUI:ssa)
  }, []);

  return (
    <thead>
      <tr>
        <th>
          {title} {timer}
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
