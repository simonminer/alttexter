import { render, screen, fireEvent } from "@testing-library/react";
import AltTexter from "../src/components/AltTexter";

test("renders AltTexter component", () => {
  render(<AltTexter />);
  expect(screen.getByText("AltTexter")).toBeInTheDocument();
});

test("toggles extension on button click", () => {
  render(<AltTexter />);
  const button = screen.getByText("Enable");
  fireEvent.click(button);
  expect(screen.getByText("Alt-text generation is ON")).toBeInTheDocument();
});

