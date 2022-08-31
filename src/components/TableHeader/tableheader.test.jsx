import React from "react";
import { render } from "@testing-library/react";
import TableHeader from "./tableheader";

describe("TableComponent", () => {
  it("Should show title and timer", () => {
    const { getByTestId } = render(<TableHeader title="Test" />);
    expect(getByTestId("table-header-component")).toHaveTextContent(/Test 0/i);
  });
});