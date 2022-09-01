import React, { useState } from "react";
import "../../App.css";

const TableItem = (props) => {
  const { data } = props;

  const [open, setOpen] = useState(false);

  // Ottaa propsina nyt datan, joka tulee pää table komponentista bodyn kautta tänne ja näytetään nää datat käyttäjälle (jos löytyy)
  // Otettu style tägi pois ja siirretty css:sät nyt App.css filuun (koska projekti on niin pieni). Isommassa projektissa komponentille oma style filu
  // Tehty tablesta enemmän tablen näkönen ja napista avautuu lisätietoja käyttäjistä sen alle
  return (
    <>
      <td>{data.id}</td>
      <td>{data.name}</td>
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
          {data?.extraContent ? (
            <>
              <div>Ikä: {data.extraContent.age}</div>
              <div>Sukupuoli: {data.extraContent.gender}</div>
              <div>Ammatti: {data.extraContent.job}</div>
            </>
          ): "Ei lisätietoja"}
        </div>
      </td>
    </>
  );
};

export default TableItem;
