import React, { useEffect, useState } from "react";

const TableHeader = ({ title }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => clearInterval(intervalId); // prevent memory leak
  }, []);

  return (
    <thead data-testid="table-header-component">
      <tr>
        <th>
          {title} {timer}
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
