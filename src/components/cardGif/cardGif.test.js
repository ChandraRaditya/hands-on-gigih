import { render, screen } from "@testing-library/react";
import CardGif from "./index";

test("test searchbar rendered", () => {
  render(<CardGif />);
  const cardMedia = screen.getByRole("img");

  expect(cardMedia).toBeInTheDocument();
});
