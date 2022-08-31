import React, { useEffect, useState } from "react";
import TableHeader from "../TableHeader/tableheader";
import TableItem from "../TableItem/tableitem";
import '../../App.css';

const TableComponent = (props) => {
  const { items, title } = props;

  return (
    <div className="table-component">
      <TableHeader title={title} />

      {items.map((i) => {
        return (
          <tr>
            <TableItem id={i}></TableItem>
          </tr>
        );
      })}
    </div>
  );
};

export default TableComponent;
