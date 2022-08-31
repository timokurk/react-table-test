import React from "react";
import { render } from "@testing-library/react";
import * as FetchData from "../../hooks/useFetchData";
import TableComponent from "./tablecomponent";

describe("TableComponent", () => {
  // Mockataan hookkikutsu ennen jokaista testiä jestin spyOnilla ja resetataan ne aina jokasen testin jälkeen
  beforeEach(() => {
    jest.spyOn(FetchData, "useFetchData").mockReturnValue({
      data: [{ id: 1, content: "Test content", extraContent: "Extra content" }],
      error: null,
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("Should have one mocked row", () => {
    const { container } = render(<TableComponent title="Test" />);
    expect(container.querySelectorAll("tbody tr").length).toBe(1);
  });

  it("Should show title", () => {
    const { getByTestId } = render(<TableComponent title="Test" />);
    expect(getByTestId("table-component")).toHaveTextContent(/Test/i);
  });
});
