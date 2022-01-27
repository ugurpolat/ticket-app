/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("Render App name", () => {
  render(<App></App>);
  const ticketApp = screen.getByText("Ticket App");
  expect(ticketApp).toHaveTextContent("Ticket App");
});

// test("Render sign up page", () => {
//   render(<App></App>);
//   const link = screen.getByText("Sign Up");
//   expect(link).toBeInTheDocument();
// });
