import React from "react";
import TableItem from "../TableItem/tableitem";

const TableBody = ({ items }) => {
  return (
    <tbody>
      {items.map((i) => {
        return (
          <tr key={i}>
            <TableItem id={i}></TableItem>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
