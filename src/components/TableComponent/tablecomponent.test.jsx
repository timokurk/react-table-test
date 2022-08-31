import React from "react";
import { render } from "@testing-library/react";
import TableComponent from "./tablecomponent";

describe("TableComponent", () => {
  it("Should have header and body", () => {
    const { container } = render(
      <TableComponent items={[1, 2, 3]} title="Test" />
    );
    expect(container.querySelectorAll("tbody tr").length).toBe(3);
  });

  it("Should show title", () => {
    const { getByTestId } = render(<TableComponent items={[]} title="Test" />);
    expect(getByTestId("table-component")).toHaveTextContent(/Test/i);
  });
});
