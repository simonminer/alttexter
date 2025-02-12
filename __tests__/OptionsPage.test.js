import { render, screen, fireEvent } from "@testing-library/react";
import OptionsPage from "../src/components/OptionsPage";

test("renders OptionsPage component", () => {
  render(<OptionsPage />);
  expect(screen.getByText("AltTexter Options")).toBeInTheDocument();
});

test("updates API key input field", () => {
  render(<OptionsPage />);
  const input = screen.getByPlaceholderText("Enter your OpenAI API key");
  fireEvent.change(input, { target: { value: "test-key" } });
  expect(input.value).toBe("test-key");
});

