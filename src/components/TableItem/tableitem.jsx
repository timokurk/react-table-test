import React, { useEffect, useState } from "react";

const TableItem = (props) => {
  const { content, href } = props;

  const [open, setOpen] = useState(!!content);
  const [extraContent, setExtraContent] = useState(null);

  async function fetchData() {
    const response = await fetch(href);
    setExtraContent(response.extraContent);
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <td>
        <button
          className="table-component-toggle-content"
          onClick={(e) => setOpen(!open)}
        >
          Toggle content
        </button>

        <span
          style={{ display: open ? "block" : "hidden" }}
          className="table-component-content"
        >
          {content}
        </span>

        <span className="table-component-extracontent">{extraContent}</span>
      </td>
    </>
  );
};

export default TableItem;
