import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("render header", () => {
  render(<App />);
  const header = screen.getByText(/Dostępna lista transakcji/i);
  expect(header).toBeInTheDocument();
});
