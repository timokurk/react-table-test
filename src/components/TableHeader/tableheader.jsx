import React, { useEffect, useState } from "react";

const TableHeader = (props) => {
  const { title } = props;
  const [timer, setTimer] = useState(0);

  // Korjattiin bugi, että timeri meni ikuiseen looppiin laittamalla useEffectiä
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1); // tän olis voinu myös ratkasta laittamalla suoraan timer + 1 ja dependancyks timer, mutta tätä tyyliä suositeltiin enemmän
    }, 1000);
    return () => clearInterval(intervalId); // tää rivi estää memoryleakin ja korjas samalla, että timeri liikkuu smoothisti sekunti sekunnilta
  }, []);

  // Luodaan thead täällä tablelle, joka ottaa propsina annetun titlen (tulee App filusta asti nyt tässä tapauksessa)
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
