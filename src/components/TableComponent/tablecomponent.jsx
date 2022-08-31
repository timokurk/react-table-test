import React from "react";
import TableHeader from "../TableHeader/tableheader";
import TableBody from "../TableBody/tablebody";
import "../../App.css";

const TableComponent = (props) => {
  const { items, title } = props;

  return (
    <table className="table-component" data-testid="table-component">
      <TableHeader title={title} />
      <TableBody items={items} />
    </table>
  );
};

export default TableComponent;
