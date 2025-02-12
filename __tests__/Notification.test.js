import React from "react";
import { render, screen } from "@testing-library/react";
import Notification from "../src/components/Notification";

test("renders success notification", () => {
  render(<Notification message="Success!" type="success" />);
  expect(screen.getByText("Success!")).toHaveClass("bg-green-200");
});

test("renders error notification", () => {
  render(<Notification message="Error!" type="error" />);
  expect(screen.getByText("Error!")).toHaveClass("bg-red-200");
});

