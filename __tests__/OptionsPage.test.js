import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import OptionsPage from "../src/components/OptionsPage";

// Mock chrome.storage API
beforeAll(() => {
  global.chrome = {
    storage: {
      sync: {
        get: jest.fn((keys, callback) => callback({ outlineColor: "red", apiKey: "test-key", altTextType: "succinct" })),
        set: jest.fn(),
      },
    },
  };
});

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

