import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Popup from "./Popup";

describe("Popup", () => {
  test("renders button and hides popup in the first render", () => {
    render(<Popup />);

    screen.getByText("show popup");
    const divElement = screen.queryByText("popup");

    expect(divElement).not.toBeInTheDocument();
  });

  test("renders popup after button click", async () => {
    userEvent.setup();

    render(<Popup />);

    const buttonElement = screen.getByText("show popup");
    await userEvent.click(buttonElement);

    screen.getByText("popup");
  });
});
