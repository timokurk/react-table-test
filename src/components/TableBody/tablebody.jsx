import React from "react";
import TableItem from "../TableItem/tableitem";

const TableBody = ({ items }) => {
  // Luodaan tbody täällä tablelle ja loopataan data läpi, jota annetaan tablen celleille
  return (
    <tbody>
      {items.map((item) => {
        return (
          <tr key={item.id}>
            <TableItem data={item}></TableItem>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
