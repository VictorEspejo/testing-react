import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const pokeElement = screen.getByText(/Pokemon/i);
  expect(pokeElement).toBeInTheDocument();
});
