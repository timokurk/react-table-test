import React, { useState } from "react";
import "../../App.css";

const TableItem = (props) => {
  const { data } = props;

  const [open, setOpen] = useState(false);

  // Ottaa propsina nyt datan, joka tulee pää table komponentista bodyn kautta tänne ja näytetään nää datat käyttäjälle (jos löytyy)
  // Otettu style tägi pois ja siirretty css:sät nyt App.css filuun (koska projekti on niin pieni). Isommassa projektissa komponentille oma style filu
  return (
    <>
      <td>
        <button
          className="table-component-toggle-content"
          onClick={() => setOpen(!open)}
        >
          Toggle content
        </button>
        <div
          className={`table-component-content${open ? "-open" : ""}`}
          data-testid="table-item-component"
        >
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
