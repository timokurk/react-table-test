import React from "react";
import { useFetchData } from "../../hooks/useFetchData";
import TableHeader from "../TableHeader/tableheader";
import TableBody from "../TableBody/tablebody";

const TableComponent = (props) => {
  const { title } = props;

  // Haetaan data komponentissa missä sitä tarvitaan, eikä App filussa ja anneta propsina
  // Käytetään useFetchData custom hookkia, joka hakee json-serveriltä (db.json) mockkidataa
  const { data, error } = useFetchData();
  if (!data) return "Loading...";
  if (error) return "Errored!";

  // Laitetaan tablen headeri ja body omiin komponentteihinsa niin tääkin filu pysyy nättinä ja selkeenä
  return (
    <table className="table-component" data-testid="table-component">
      <TableHeader title={title} />
      <TableBody items={data} />
    </table>
  );
};

export default TableComponent;
