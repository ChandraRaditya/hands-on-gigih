import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./index";

test("searchbar behaviour", async () => {
  render(<SearchBar />);
  const input = screen.getByPlaceholderText("search here");
  // screen.debug();
  await userEvent.type(input, "mario");

  expect(input).toHaveValue("mario");
});

test("test searchbar rendered", () => {
  render(<SearchBar />);
  const input = screen.getByPlaceholderText("search here");
  const button = screen.getByRole("button", { pressed: true });

  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
