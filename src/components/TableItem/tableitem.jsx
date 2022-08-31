import React, { useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import "../../App.css";

const TableItem = (props) => {
  const { id } = props;

  const [open, setOpen] = useState(false);

  const [data, error] = useFetchData(id);
  if (!data) return "Loading...";
  if (error) return "Errored!";

  return (
    <>
      <td>
        <button
          className="table-component-toggle-content"
          onClick={() => setOpen(!open)}
        >
          Toggle content
        </button>
        <div className={`table-component-content${open ? "-open" : ""}`}>
          <span>{data?.content ? data.content : "No content"}</span>
          <span className="table-component-extracontent">
            {data && data.extraContent}
          </span>
        </div>
      </td>
    </>
  );
};

export default TableItem;
