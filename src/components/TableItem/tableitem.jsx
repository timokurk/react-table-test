import React, { useEffect, useState } from "react";
import "../../App.css";

const TableItem = (props) => {
  const { id } = props;

  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});

  async function fetchData() {
    const request = await fetch(`/data/${id}`);
    const response = await request.json();
    setData(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

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
          <span>{data?.content ? data.content : 'No content'}</span>
          <span className="table-component-extracontent">
            {data && data.extraContent}
          </span>
        </div>
      </td>
    </>
  );
};

export default TableItem;
