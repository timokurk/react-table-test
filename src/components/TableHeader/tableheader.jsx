import React, { useEffect, useState } from "react";

const TableHeader = ({ title }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setTimer(previousTimer => previousTimer + 1);
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
