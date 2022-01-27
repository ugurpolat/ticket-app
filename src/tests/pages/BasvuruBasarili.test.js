/* eslint-disable no-undef */
import BasvuruBasarili from "../../pages/BasvuruBasarili";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Application number come correctyly", () => {
  render(<BasvuruBasarili></BasvuruBasarili>);
  const success = screen.getByText(/Başvuru Başarılı/i);

  expect(success).toBeInTheDocument();
});
